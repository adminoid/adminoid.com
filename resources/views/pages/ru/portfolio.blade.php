@extends('layouts.ru.page')

@section('title', $page->title_ru)

@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('/css/components/portfolio.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/card.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/image.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="portfolio">

        <h1 class="ui blue header">{{ $page->title_ru }}</h1>

        <div class="ui negative message">
            <p>Многие мои работы нигде не представлены, потому что в них я принимал частичное участие. А также я работал на офисных работах, в том числе в крупных организациях (МГРО Единая Россия, ГУП ИПК Московская Правда, Carlo Pazolini).</p>
        </div>

        <div class="ui stackable grid">

            @foreach($page->descendants as $portfolioPage)
                @if ($portfolioPage->pageable->custom_face === 1)
                    @include($portfolioPage->pageable->chunk_ru)
                @else

                    <div class="sixteen wide column">
                        <div class="ui card">
                            <div class="content">
                                <h3 class="left floated">{{ $portfolioPage->pageable->title_ru }}</h3>
                                <div class="right floated meta yellow"><i
                                            class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
                            </div>

                            <zoom inline-template>
                                <div class="window content"
                                     ref="container"
                                     :style="containerStyle"
                                     @mousemove="onZoom"
                                     @mouseleave="stopZoom"
                                     @touchstart="onTouchStart"
                                     @touchend="onTouchEnd"
                                >
                                    <img src="{{ $portfolioPage->images->first()->folder_in_public }}/{{ $portfolioPage->images->first()->name }}.{{ $portfolioPage->images->first()->ext }}"
                                         alt="{{ $portfolioPage->pageable->title_ru }}"
                                         class="zoom ui fluid image"
                                         ref="image"
                                         :style="imageStyle"
                                    >
                                </div>
                            </zoom>

                            <div class="extra content">
                                <span class="right aligned right floated links">
                                    @if($portfolioPage->pageable->link)
                                        <a href="{{ $portfolioPage->pageable->link }}"><i class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
                                        <br>
                                    @endif
                                    @if($portfolioPage->pageable->external_url)
                                        <a href="{{ $portfolioPage->pageable->external_url }}" target="_blank"><i class="external icon"></i>{{ parse_url($portfolioPage->pageable->external_url)['host'] }}</a>
                                        <br>
                                    @endif
                                </span>

                                @foreach($portfolioPage->tags as $tag)
                                    <a class="ui image label original">
                                        <img src="/{{ $tag->icon }}"
                                             alt="{{ $tag->name }}">
                                        {{ $tag->name }}
                                    </a>
                                @endforeach
                            </div>
                        </div>
                    </div>
                @endif
            @endforeach

            <div class="sixteen wide column">
            Ссылка на полное портфолио: <a href="https://www.fl.ru/users/adminoid/">https://www.fl.ru/users/adminoid/</a>
            </div>

        </div>
    </div>
@endsection
