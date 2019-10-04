@extends('layouts.en.page')

@section('title', $page->title_en)

@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('/css/components/portfolio.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/card.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/image.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="portfolio">

        <h1 class="ui blue header">{{ $page->title_en }}</h1>

        <div class="ui stackable grid">

            @foreach($page->descendants as $portfolioPage)
                @if ($portfolioPage->pageable->custom_face == 1)
                    @include($portfolioPage->pageable->chunk_en)
                @else

                    <div class="sixteen wide column">
                        <div class="ui card">
                            <div class="content">
                                <h3 class="left floated">{{ $portfolioPage->pageable->title_en }}</h3>
                                <div class="right floated meta yellow"><i
                                        class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
                            </div>
                            <zoom class="content" inline-template>
                                <div class="content window fix"
                                     @mouseenter="startZoom" @touchstart="startZoom"
                                     @mousemove="onZoom" @touchmove="onZoom"
                                     @mouseleave="stopZoom" @touchend="stopZoom">
                                    <img class="ui fluid image zoom"
                                         src="{{ $portfolioPage->images->first()->folder_in_public }}/{{ $portfolioPage->images->first()->name }}.{{ $portfolioPage->images->first()->ext }}"
                                         alt=""
                                         :style="{ left: left + 'px', top: top + 'px' }">
                                </div>
                            </zoom>
                            <div class="extra content">
                                <span class="right aligned right floated links">
                                       @if($portfolioPage->pageable->link)
                                        <a href="{{ $portfolioPage->pageable->link }}"><i class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
                                        <br>
                                    @endif
                                    @if($portfolioPage->pageable->external_url)
                                        <a href="{{ $portfolioPage->pageable->external_url }}" target="_blank"><i class="external icon"></i>{{ $portfolioPage->pageable->external_url }}</a>
                                        <br>
                                    @endif
                                </span>

                                @foreach($portfolioPage->tags as $tag)
                                    <a class="ui image label original"><img src="/{{ $tag->icon }}">
                                        {{ $tag->name }}</a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                @endif
            @endforeach

            <div class="sixteen wide column">
                More than 80 jobs done since 2008 in my full portfolio (freelancing platform number one in Russia):
                <br>
                <a href="https://www.fl.ru/users/adminoid/">https://www.fl.ru/users/adminoid/</a> (<a href="https://translate.google.com/translate?sl=ru&tl=en&u=https%3A%2F%2Fwww.fl.ru%2Fusers%2Fadminoid%2F">Auto-translated version in English</a>)
            </div>

            <div class="ui negative message">
                <p>Many of my works are not represented anywhere, because I only participated in them. And I also worked in office work, including in large organizations (central office of United Russia political party (I work for current russian Minister of Culture Vladimir Medinsky), publishing house "Moskovskaya Pravda", shoe company "Carlo Pazolini").</p>
            </div>

        </div>
    </div>
@endsection
