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

//Route::get('/', function () {
//    return view('welcome');
//});

//$locale = 'ru';
$locale = 'en';
if (array_key_exists('HTTP_HOST', $_SERVER)) {
    $domain = $_SERVER['HTTP_HOST'];
    $domainParts = explode('.', $domain);
    $zone = $domainParts[count($domainParts) - 1];
    if ($zone == 'com') {
        $locale = 'en';
    } elseif ($zone == 'ru') {
        $locale = 'ru';
    }
}


if (!Session::has($locale)) {
    Session::put('locale', $locale);
}
app()->setLocale(Session::get('locale'));

Route::get('{path?}', 'PagesController@show')
    ->where('path', '[a-z0-9/-]+');

//Route::get('{path?}', function ($path = '/') {
//    return $path;
//});

//Route::get('/', function () {
//    return view('pages.ru.index');
//});
//
//Route::get('/price.html', function () {
//    return view('pages.ru.price');
//});
//
//Route::get('/tools.html', function () {
//    return view('pages.ru.tools');
//});
//
//Route::get('/process.html', function () {
//    return view('pages.ru.process');
//});
//
//Route::get('/portfolio.html', function () {
//    return view('pages.ru.portfolio');
//});
//
//Route::get('/reviews.html', function () {
//    return view('pages.ru.reviews');
//});

Route::resource('feedback-messages', 'FeedbackMessagesController');
