@extends('layouts.page')

@section('title', 'Отзывы')

@section('styles')
  @parent
  <link rel="stylesheet" href="{{ mix('/css/components/portfolio.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/card.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/label.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="reviews">

      <h1 class="ui blue header">Отзывы</h1>

      <div class="ui segment review">
        <div class="ui container">
          <h2 class="ui header">
            <img src="static/img/adminoid/pages/reviews/user-default-small.png" class="ui circular image">
            Виктория Власева <span class="nick">[Gosti_tyt]</span>
          </h2>
          <div class="review-text">
            <p>Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.</p>
          </div>
          <div class="ui top right attached label">Date</div>
          <div class="ui bottom right attached label"><i
              class="outline linkify icon"></i><a href="#" class="right floated">Ссылка на отзыв</a></div>
        </div>
      </div>

      <div class="ui segment review">
        <div class="ui container">
          <h2 class="ui header">
            <img src="static/img/adminoid/pages/reviews/user-default-small.png" class="ui circular image">
            Виктория Власева <span class="nick">[Gosti_tyt]</span>
          </h2>
          <div class="review-text">
            <p>Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.</p>
          </div>
          <div class="ui top right attached label">Date</div>
          <div class="ui bottom right attached label"><i
              class="outline linkify icon"></i><a href="#" class="right floated">Ссылка на отзыв</a></div>
        </div>
      </div>

      <div class="ui segment review">
        <div class="ui container">
          <h2 class="ui header">
            <img src="static/img/adminoid/pages/reviews/user-default-small.png" class="ui circular image">
            Виктория Власева <span class="nick">[Gosti_tyt]</span>
          </h2>
          <div class="review-text">
            <p>Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.
              Нравится работать с этим исполнителем – делает быстро и четко. Продолжаем сотрудничество.</p>
          </div>
          <div class="ui top right attached label">Date</div>
          <div class="ui bottom right attached label"><i
              class="outline linkify icon"></i><a href="#" class="right floated">Ссылка на отзыв</a></div>
        </div>
      </div>

    </div>
@endsection