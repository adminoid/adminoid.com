<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Page;

class PagesController extends Controller
{

    public function show($path = 'index')
    {
        $page = Page::where('uri', '=', $path)->firstOrFail();
        $locale = \Lang::getLocale();
        $template = $page->{"template_$locale"};
        return view($template, compact('page'));
    }
}
