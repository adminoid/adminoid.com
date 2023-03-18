<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Storage;
use App\FeedbackMessage;

class SendTelegram implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $feedbackMessage;

    /**
     * Create a new job instance.
     *
     * @param FeedbackMessage $feedbackMessage
     * @return void
     */
    public function __construct(FeedbackMessage $feedbackMessage)
    {
        $this->feedbackMessage = $feedbackMessage;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $message = <<<EOD
Message data:
{$this->feedbackMessage->email}
{$this->feedbackMessage->text}
{$this->feedbackMessage->ip}
{$this->feedbackMessage->user_agent}
------------
EOD;
        $apiToken = env('TG_TOKEN');
        $data = [
            'chat_id' => env('TG_CHAT_ID'),
            'text' => $message,
        ];
        $response = file_get_contents("https://api.telegram.org/bot$apiToken/sendMessage?" . http_build_query($data) );
    }
}
