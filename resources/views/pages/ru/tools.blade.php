@extends('layouts.ru.page')

@section('title', $page->title_ru)

@section('styles')
  @parent
  <link rel="stylesheet" href="{{ mix('/css/components/tools.min.css') }}">
@endsection

@section('content')
  <div class="ui page container" id="tools">

    <h1 class="ui blue header">{{ $page->title_ru }}</h1>
    <br>
    <div class="ui stackable grid">

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="projecting">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Проектирование</h2>
                <p>Для построения ER-диаграмм, блок схем, мозгового штурма обычно использую <a href="#lucidchart" class="hover lucidchart">lucidchart</a>, <a href="#brain" class="hover brain">ум</a> и хождение туда-сюда.</p>
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/projecting/lucidchart.png" alt="lucidchart-projecting" id="lucidchart" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/projecting/brain.png" alt="brain" id="brain" data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="design">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Дизайн</h2>
                Сейчас дизайн-макет я делаю в программе <a href="#sketch" class="hover sketch">
                  sketch</a>, а когда ее еще небыло, был долгое время обречен на
                <a href="#photoshop" class="hover photoshop">photoshop</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/design/sketch.png" alt="Sketch App"
                     id="sketch" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/design/photoshop.png" alt="photoshop" id="photoshop"
                     data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="backend">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Бэкенд</h2>
                Разрабатываю на <a
                    href="#php" class="hover php">php</a>, используя <a href="#laravel"
                                                                        class="hover laravel">laravel</a>
                в качестве
                фреймворка, в среде <a href="#php-storm" class="hover php-storm">phpStorm</a>, через тестирование <a
                    href="#php-unit" class="hover php-unit">phpUnit</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/backend/laravel.png" alt="Laravel Framework"
                     id="laravel" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/backend/php.png" alt="язык php" id="php" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/backend/phpstorm.png" alt="среда разработки PhpStorm"
                     id="php-storm" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/backend/php-unit.png" alt="PHPUnit" id="php-unit"
                     data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="frontend">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Фронтенд</h2>
                <h3>html, css</h3>
                Стили я описываю при помощи <a href="#less" class="hover less">LESS</a> или <a href="#sass"
                                                                                               class="hover sass">SASS</a>.
                В последние годы я верстаю только адаптивные сайты. Из css-фрейморков больше всего приходилось работать
                с <a href="#twitter-bootstrap" class="hover twitter-bootstrap">Twitter Bootstrap</a>, для этого сайта
                использовал <a href="#semantic-ui" class="hover semantic-ui">semantic-ui</a>.
                <h3>Javascript</h3>
                Пишу на <a href="#ecma-script" class="hover ecma-script">ecmaScript 5</a> и выше, в качестве каркаса
                приложения использую
                <a href="#vue-js" class="vue-js hover">vue.js</a>. Компилирую и сжимаю код при помощи <a href="#webpack"
                                                                                                         class="hover webpack">webpack</a>.
                Менеджментом пакетов, запуском тестов занимается
                <a href="#node-js" class="node-js hover">node.js</a>.
                Unit тесты - это <a href="#chai" class="hover chai">chai</a> + <a href="#mocha" class="mocha hover">mocha</a>
                на
                <a href="#karma" class="hover karma">karma</a>.
                На <a href="#ext-js" class="hover ext-js">extJs</a> я сделал немало админок.
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/frontend/less.png" alt="less" id="less" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/sass.png" alt="sass" id="sass" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/twitter-bootstrap.png" alt="twitter-bootstrap"
                     id="twitter-bootstrap" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/semantic-ui.png" alt="semantic-ui" id="semantic-ui"
                     data-rjs="2">

                <img src="/static/img/adminoid/pages/tools/frontend/ecma-script.png" alt="ecma-script" id="ecma-script"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/vue-js.png" alt="vue-js" id="vue-js" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/karma.png" alt="karma" id="karma" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/chai.png" alt="chai" id="chai" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/mocha.png" alt="mocha" id="mocha" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/ext-js.png" alt="ext-js" id="ext-js" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/node-js.png" alt="node-js" id="node-js" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/frontend/webpack.png" alt="webpack" id="webpack" data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="administration">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Администрирование</h2>
                В последние годы использовал OS <a href="#ubuntu" class="hover ubuntu">Ubuntu</a> / <a href="#debian"
                                                                                                          class="hover debian">Debian</a>,
                а в качестве web-сервера использовал <a href="#nginx" class="hover nginx">Nginx</a> или
                <a href="#apache" class="hover apache">Apache</a>. <br>
                А сейчас, используя <a href="#docker" class="hover docker">Docker</a>, могу установить одновременно несколько разных версий php, mysql и т.п..
                На дешевом хостинге за 250 рублей в месяц такая система будет быстро работать. И ее можно легко, в несколько простых шагов, перенести на любой другой хостинг, сервер, машину или облачный сервис.
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/administration/docker.png" alt="Docker" id="docker"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/administration/nginx.png" alt="Nginx" id="nginx" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/administration/ubuntu.png" alt="Ubuntu" id="ubuntu"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/administration/apache.png" alt="Apache" id="apache"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/administration/debian.png" alt="Debian" id="debian"
                     data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

      <tools-block inline-template>
        <div>
          <div class="ui segment block sixteen wide column" id="environment">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Рабочее окружение</h2>
                Работаю на <a href="#mac" class="hover mac">macbook pro</a>. Слепая <a href="#keymap" class="hover keymap">10-ти пальцевая печать</a> и редактор <a href="#vim" class="hover vim">VIM</a> делают редактирование текста молниеносным. Все изменения под контролем у <a href="#git" class="hover git">git</a>.
                Заметки и документацию пишу на <a href="#markdown" class="hover markdown">Markdown</a>.
                Все дела расписываю в программе <a href="#omni" class="hover omni">OmniFocus</a>, затем отслеживаю их
                выполнение по таймеру
                <a href="#vitamin" class="hover vitamin">Vitamin-R2</a>.
                Документооборот кручу в <a href="#google-apps" class="hover google-apps">google apps</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="/static/img/adminoid/pages/tools/environment/mac.png" alt="mac os x" id="mac" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/keymap.png" alt="keymap" id="keymap" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/vim.png" alt="vim" id="vim" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/git.png" alt="git" id="git" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/markdown.png" alt="markdown" id="markdown"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/omni.png" alt="omni" id="omni" data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/vitamin.png" alt="Vitamin-R 2" id="vitamin"
                     data-rjs="2">
                <img src="/static/img/adminoid/pages/tools/environment/google-apps.png" alt="Google Apps"
                     id="google-apps" data-rjs="2">
              </div>
            </div>
          </div>
        </div>
      </tools-block>

    </div>
  </div>
@endsection
