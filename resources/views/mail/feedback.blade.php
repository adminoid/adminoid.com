<div id="message">
    <p><strong>Sender:</strong> {{ $feedbackMessage->email }}</p>
{{--    <p><strong>First name:</strong> {{ $feedbackMessage->first_name }}</p>--}}
{{--    <p><strong>Last name:</strong> {{ $feedbackMessage->last_name}}</p>--}}
{{--    <p><strong>Phone:</strong> {{ $feedbackMessage->phone }}</p>--}}
    <p><strong>ip:</strong> {{ $feedbackMessage->ip }}</p>
    <p><strong>user agent:</strong> {{ $feedbackMessage->user_agent}}</p>
    <p><strong>Message:</strong> {{ $feedbackMessage->text }}</p>
</div>
