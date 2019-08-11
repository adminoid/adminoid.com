@extends('layouts.ru.page')

@section('title', $page->title_ru)

@section('styles')
  @parent
  <link rel="stylesheet" href="{{ mix('/css/components/portfolio.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/card.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="reviews">

      <h1 class="ui blue header">{{ $page->title_ru }}</h1>

      @foreach($page->descendants as $review)
        <div class="ui segment review">
          <div class="ui container">
            <h2 class="ui header">
              <img src="{{ $review->images->first()->folder_in_public }}/{{ $review->images->first()->name }}.{{ $review->images->first()->ext }}" class="ui circular image">
              {{ $review->pageable->name_ru }} <span class="nick">[<a href="{{ $review->pageable->link_to_profile }}">{{ $review->pageable->nick }}</a>]</span>
            </h2>
            <div class="review-text">
              <p>{!! $review->pageable->content_ru !!}</p>
            </div>
            <div class="ui top right attached label">{{ date('d.m.Y', strtotime($review->pageable->published_at)) }}</div>
            <div class="ui bottom right attached label"><i
                      class="linkify icon"></i><a href="{{ $review->pageable->link_to_review }}" class="right floated">Ссылка на отзыв</a></div>
          </div>
        </div>
      @endforeach

        <p>Отзывы взяты отсюда: <a href="https://www.fl.ru/users/adminoid/opinions/">https://www.fl.ru/users/adminoid/opinions/</a></p>

    </div>
@endsection
