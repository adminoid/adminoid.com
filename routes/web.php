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

$locale = \Localization::getSupportedLocaleNameByTld(\Localization::getTld());

if (!Session::has($locale)) {
    Session::put('locale', $locale);
}

app()->setLocale(Session::get('locale'));

Route::get('/', function () {
    return view('pages.ru.index');
});

Route::get('/price.html', function () {
    return view('pages.ru.price');
});

Route::get('/tools.html', function () {
    return view('pages.ru.tools');
});

Route::get('/process.html', function () {
    return view('pages.ru.process');
});

Route::get('/portfolio.html', function () {
    return view('pages.ru.portfolio');
});

Route::get('/reviews.html', function () {
    return view('pages.ru.reviews');
});

Route::resource('feedback-messages', 'FeedbackMessagesController');
