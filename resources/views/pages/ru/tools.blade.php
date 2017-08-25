@extends('layouts.page')

@section('content')
    <div class="ui page container" id="tools">

      <h1 class="ui blue header">Инструменты, которые я использую для создания сайтов</h1>
      <br>
      <div class="ui stackable grid">

        <div>
          <div class="ui segment block sixteen wide column" id="projecting" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Проектирование</h2>
                Для построения ER-диаграмм, блок схем, мозгового штурма обычно использую <a href="#lucidchart"
                                                                                            class="hover lucidchart">lucidchart</a>
                и
                <a href="#brain" class="hover brain">ум</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="static/img/adminoid/pages/tools/projecting/lucidchart.png" alt="lucidchart-projecting"
                     id="lucidchart">
                <img src="static/img/adminoid/pages/tools/projecting/brain.png" alt="brain" id="brain">
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="ui segment block sixteen wide column" id="design" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Дизайн</h2>
                Сейчас дизайн-макет я делаю в программе <a href="#sketch" class="hover sketch">
                sketch</a>, а когда ее еще небыло, был долгое время обречен на
                <a href="#photoshop" class="hover photoshop">photoshop</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="static/img/adminoid/pages/tools/design/sketch.png" alt="Sketch App"
                     id="sketch">
                <img src="static/img/adminoid/pages/tools/design/photoshop.png" alt="photoshop" id="photoshop">
              </div>
            </div>
          </div>
        </div>


        <div>
          <div class="ui segment block sixteen wide column" id="backend" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Бэкенд</h2>
                Разрабатываю на <a
                  href="#php" class="hover php">php</a>, используя <a href="#laravel" class="hover laravel">laravel</a>
                в качестве
                фреймворка, в среде <a href="#php-storm" class="hover php-storm">phpStorm</a>, через тестирование <a
                  href="#php-unit" class="hover php-unit">phpUnit</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="static/img/adminoid/pages/tools/backend/laravel.png" alt="Laravel Framework"
                     id="laravel">
                <img src="static/img/adminoid/pages/tools/backend/php.png" alt="язык php" id="php">
                <img src="static/img/adminoid/pages/tools/backend/phpstorm.png" alt="среда разработки PhpStorm"
                     id="php-storm">
                <img src="static/img/adminoid/pages/tools/backend/php-unit.png" alt="PHPUnit" id="php-unit">
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="ui segment block sixteen wide column" id="frontend" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Фронтенд</h2>
                <h3>html, css</h3>
                Стили я описываю при помощи <a href="#less" class="hover less">LESS</a> или <a href="#sass"
                                                                                               class="hover sass">SASS</a>.
                В последние годы я верстаю только адаптивные сайты. Из css-фрейморков больше всего приходилось работать
                с <a href="#twitter-bootstrap" class="hover twitter-bootstrap">Twitter Bootstrap</a>, для этого сайта
                использовал <a href="#semantic-ui" class="hover semantic-ui">semantic-ui</a>, еще нравится <a
                  href="#bourbon" class="hover bourbon">bourbon</a>.
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
                <img src="static/img/adminoid/pages/tools/frontend/less.png" alt="less" id="less">
                <img src="static/img/adminoid/pages/tools/frontend/sass.png" alt="sass" id="sass">
                <img src="static/img/adminoid/pages/tools/frontend/twitter-bootstrap.png" alt="twitter-bootstrap"
                     id="twitter-bootstrap">
                <img src="static/img/adminoid/pages/tools/frontend/semantic-ui.png" alt="semantic-ui" id="semantic-ui">
                <img src="static/img/adminoid/pages/tools/frontend/bourbon.png" alt="bourbon" id="bourbon">

                <img src="static/img/adminoid/pages/tools/frontend/ecma-script.png" alt="ecma-script" id="ecma-script">
                <img src="static/img/adminoid/pages/tools/frontend/vue-js.png" alt="vue-js" id="vue-js">
                <img src="static/img/adminoid/pages/tools/frontend/karma.png" alt="karma" id="karma">
                <img src="static/img/adminoid/pages/tools/frontend/chai.png" alt="chai" id="chai">
                <img src="static/img/adminoid/pages/tools/frontend/mocha.png" alt="mocha" id="mocha">
                <img src="static/img/adminoid/pages/tools/frontend/ext-js.png" alt="ext-js" id="ext-js">
                <img src="static/img/adminoid/pages/tools/frontend/node-js.png" alt="node-js" id="node-js">
                <img src="static/img/adminoid/pages/tools/frontend/webpack.png" alt="webpack" id="webpack">
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="ui segment block sixteen wide column" id="administration" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Администрирование</h2>
                Последнее время администрировал OS <a href="#ubuntu" class="hover ubuntu">Ubuntu</a> / <a href="#debian"
                                                                                                          class="hover debian">Debian</a>,
                в качестве web-сервера использовал <a href="#nginx" class="hover nginx">Nginx</a> или
                <a href="#apache" class="hover apache">Apache</a>.
                Сейчас моя сборка в качестве сервера: на любую OS ставлю
                <a href="#docker" class="hover docker">docker</a>, внутри модифицированный мной <a href="#laradock"
                                                                                                   class="hover laradock">laradock</a>
                - преднастроенная сборка для docker в виде набора
                dockerfile-ов для каждого компонента на основе <a href="#ubuntu" class="hover ubuntu">ubuntu</a>.
                Это работает и для локальной (dev) версии проекта и для production. А так же легко переносится на любой
                vds/vps/hosting, надо просто установить <a href="#docker" class="hover docker">docker</a>, скопировать
                файлы и запустить как обычно.
              </div>
              <div class="six wide column images-wrapper">
                <img src="static/img/adminoid/pages/tools/administration/docker.png" alt="Docker" id="docker">
                <img src="static/img/adminoid/pages/tools/administration/nginx.png" alt="Nginx" id="nginx">
                <img src="static/img/adminoid/pages/tools/administration/ubuntu.png" alt="Ubuntu" id="ubuntu">
                <img src="static/img/adminoid/pages/tools/administration/apache.png" alt="Apache" id="apache">
                <img src="static/img/adminoid/pages/tools/administration/debian.png" alt="Debian" id="debian">
                <img src="static/img/adminoid/pages/tools/administration/laradock.png" alt="laradock" id="laradock">
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="ui segment block sixteen wide column" id="environment" is="tools-block">
            <div class="ui stackable grid">
              <div class="ten wide column text-wrapper">
                <h2 class="ui red header">Рабочее окружение</h2>
                Работаю на <a href="#mac" class="hover mac">macbook pro</a>. Слепая <a href="#keymap"
                                                                                       class="hover keymap">10-ти
                пальцевая печать</a> и редактор <a href="#vim" class="hover vim">VIM</a> делают редактирование текста
                молниеносным. Контроль версий -
                <a href="#git" class="hover git">git</a>.
                Заметки и документацию пишу на <a href="#markdown" class="hover markdown">Markdown</a>.
                Все дела расписываю в программе <a href="#omni" class="hover omni">OmniFocus</a>, затем отслеживаю их
                выполнение по таймеру
                <a href="#vitamin" class="hover vitamin">vitamin-r2</a>.
                Документооборот кручу в <a href="#google-apps" class="hover google-apps">google apps</a>.
              </div>
              <div class="six wide column images-wrapper">
                <img src="static/img/adminoid/pages/tools/environment/mac.png" alt="mac os x" id="mac">
                <img src="static/img/adminoid/pages/tools/environment/keymap.png" alt="keymap" id="keymap">
                <img src="static/img/adminoid/pages/tools/environment/vim.png" alt="vim" id="vim">
                <img src="static/img/adminoid/pages/tools/environment/git.png" alt="git" id="git">
                <img src="static/img/adminoid/pages/tools/environment/markdown.png" alt="markdown" id="markdown">
                <img src="static/img/adminoid/pages/tools/environment/omni.png" alt="omni" id="omni">
                <img src="static/img/adminoid/pages/tools/environment/vitamin.png" alt="Vitamin-R 2" id="vitamin">
                <img src="static/img/adminoid/pages/tools/environment/google-apps.png" alt="Google Apps"
                     id="google-apps">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection