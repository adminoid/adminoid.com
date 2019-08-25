<?php

namespace App\Http\Controllers;

use App\FeedbackMessage;
use Illuminate\Http\Request;
//use Illuminate\Foundation\Validation\ValidatesRequests;
use App\Mail\FeedbackSend;
use Illuminate\Support\Facades\Mail;

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

        $this->validate($request, [
            'email' => 'required|email',
            'text' => 'required|max:5000',
        ]);

        $ip = $request->ip();
        $user_agent = $request->header('User-Agent');

        $feedbackMessage = (new FeedbackMessage)->forceCreate([
            'email' => request('email'),
            'text' => request('text'),
            'ip' => $ip,
            'user_agent' => $user_agent
        ]);

        Mail::to('info@romb.ru')->queue(new FeedbackSend($feedbackMessage));

        return ['message' => __('messages.feedback_message_sent')];

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
