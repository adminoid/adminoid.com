<?php

namespace App\Http\Controllers;

use App\FeedbackMessage;
use Carbon\Carbon;
use Illuminate\Http\Request;
//use Illuminate\Foundation\Validation\ValidatesRequests;
// use Illuminate\Support\Facades\Mail;
use App\Jobs\SendTelegram;
use Illuminate\Validation\ValidationException;

class FeedbackMessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return array
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        $recaptchaResponse = request('rc_key');
        if (empty($recaptchaResponse)) {
            throw ValidationException::withMessages(['rc_key' => 'Recaptcha is empty']);
        } else {
            $this->validate($request, [
                'email' => 'required|email',
                'text' => 'required|max:5000',
            ]);

            // Build POST request:
            $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
            $recaptchaSecret = env("RC_SECRET", false);
            if (!$recaptchaSecret) {
                throw ValidationException::withMessages(['rc_key' => 'No recaptcha key in .env file']);
            }

            // Make and decode POST request:
            $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse);
            $recaptcha = json_decode($recaptcha);
            if (!$recaptcha->success) {
                throw ValidationException::withMessages(['rc_key' => 'Recaptcha is wrong']);
            } else {
                // Take action based on the score returned:
                if ($recaptcha->score < 0.5) {
                    throw ValidationException::withMessages(['rc_key' => 'Recaptcha score is low']);
                } else {
                    $ip = $request->ip();
                    $user_agent = $request->header('User-Agent');
                    $current_date = Carbon::now();
                    $feedbackMessage = (new FeedbackMessage)->forceCreate([
                        'email' => request('email'),
                        'text' => "\n\r" . request('text') . "\n\r\n\r ____ " . $current_date,
                        'ip' => $ip,
                        'user_agent' => $user_agent
                    ]);
                    SendTelegram::dispatch($feedbackMessage);
                    return ['message' => __('messages.feedback_message_sent')];
                }
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\FeedbackMessage $feedbackMessage
     * @return \Illuminate\Http\Response
     */
    public function show(FeedbackMessage $feedbackMessage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\FeedbackMessage $feedbackMessage
     * @return \Illuminate\Http\Response
     */
    public function edit(FeedbackMessage $feedbackMessage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\FeedbackMessage $feedbackMessage
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FeedbackMessage $feedbackMessage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\FeedbackMessage $feedbackMessage
     * @return \Illuminate\Http\Response
     */
    public function destroy(FeedbackMessage $feedbackMessage)
    {
        //
    }
}
