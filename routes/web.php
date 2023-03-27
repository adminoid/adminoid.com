<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$locale = 'en';
if (array_key_exists('HTTP_HOST', $_SERVER)) {
    $domain = $_SERVER['HTTP_HOST'];
    $domainParts = explode('.', $domain);
    $zone = $domainParts[count($domainParts) - 1];
    if ($zone == 'ru') {
        $locale = 'ru';
    }
}


if (!Session::has($locale)) {
    Session::put('locale', $locale);
}
app()->setLocale(Session::get('locale'));

Route::get('{path?}', 'PagesController@show')
    ->where('path', '[a-z0-9/-]+');

Route::resource('feedback-messages', 'FeedbackMessagesController');
