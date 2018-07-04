<?php

namespace App\Mail;

use App\FeedbackMessage;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class FeedbackSend extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * @var FeedbackMessage
     */
    public $feedbackMessage;

    /**
     * FeedbackSend constructor.
     * @param FeedbackMessage $feedbackMessage
     */
    public function __construct(FeedbackMessage $feedbackMessage)
    {
        $this->feedbackMessage = $feedbackMessage;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.feedback');
    }
}
