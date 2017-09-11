@extends('layouts.ru.page')

@section('title', $page->title_ru)

@section('styles')
  @parent
  <link rel="stylesheet" href="{{ mix('/css/components/workflow.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="workflow">
      <h1 class="ui blue header">{{ $page->title_ru }}</h1>
      <div class="ui grid workflow-block projecting top">
        <div class="inner-column"></div>
        <half-rotate class="sixteen wide column" inline-template>
          <div class="sixteen wide column message"
               v-on:mousemove="onHover"
               v-on:mouseleave="onLeave"
               v-bind:style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
            <h2>Проектирование</h2>
            <p>
              Для того, чтобы красиво “пораскинуть мозгами” я использую диаграммы связей (или mind map).
              Для проектирования БД - ER-диаграммы, для логики приложения - блок-схемы.
            </p>
            <p>
              Вот несколько примеров (там еще вкладки есть):
            </p>

            <div class="ui five column centered grid">
              <div class="center aligned column">
                <a href="https://www.lucidchart.com/documents/edit/2f8cdb14-161f-4afe-8ccf-6bf7d8567da9/0">
                  <img src="static/img/adminoid/pages/workflow/projecting/lc-1.png" alt="lucidchart scheme">
                </a>
              </div>

              <div class="center aligned column">
                <a href="https://www.lucidchart.com/documents/edit/a90a0bce-b152-4405-920f-98b0f1f4cae1">
                  <img src="static/img/adminoid/pages/workflow/projecting/lc-2.png" alt="lucidchart scheme">
                </a>
              </div>

              <div class="center aligned column">
                <a href="https://www.lucidchart.com/documents/edit/d5fd80c6-c43d-476e-89b3-0e5fb5371ae2">
                  <img src="static/img/adminoid/pages/workflow/projecting/lc-3.png" alt="lucidchart scheme">
                </a>
              </div>
            </div>
          </div>
        </half-rotate>
      </div>
      <div class="ui grid workflow-block design">
        <div class="inner-column"></div>
        <half-rotate class="sixteen wide column" inline-template>
          <div class="sixteen wide column message"
               v-on:mousemove="onHover"
               v-on:mouseleave="onLeave"
               v-bind:style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
            <h2>Дизайн</h2>
            <p>
              Скачать дизайн-макет для этого сайта:
            </p>
            <p>
              <img src="static/img/adminoid/pages/workflow/design/site.png" alt="">
            </p>
          </div>
        {{--</half-rotate>--}}
      </div>

      <div class="ui grid workflow-block frontend">
        <div class="inner-column"></div>
        <half-rotate class="sixteen wide column" inline-template>
          <div class="sixteen wide column message"
               v-on:mousemove="onHover"
               v-on:mouseleave="onLeave"
               v-bind:style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
            <h2>Фронтенд</h2>
            <p>
              Примеры из этого проекта:
            </p>
            <p>
              Vue.js модули, Unit-тесты, верстка, стили, репозиторий
            </p>
          </div>
        </half-rotate>
      </div>

      <div class="ui grid workflow-block backend bottom">
        <div class="inner-column"></div>

        <half-rotate class="sixteen wide column" inline-template>
          <div class="sixteen wide column message"
               v-on:mousemove="onHover"
               v-on:mouseleave="onLeave"
               v-bind:style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
            <h2>Бэкенд</h2>
            <p>
              Примеры:
            </p>
            <p>
              Unit-тесты, репозиторий
            </p>
          </div>
        </half-rotate>

      </div>

    </div>
@endsection