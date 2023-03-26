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
                    <div class="ui segment block sixteen wide column" id="blockchain">
                        <div class="ui stackable grid">
                            <div class="ten wide column text-wrapper">
                                <h2 class="ui red header">Блокчейн</h2>
                                <p>
                                    Разработаю контракт или систему контрактов на
                                    <a href="#solidity" class="hover solidity">Solidity</a>,
                                    напишу тесты с <a href="#hardhat" class="hover hardhat">Hardhat</a>,
                                    использую фреймворк <a href="#openzeppelin" class="hover openzeppelin">OpenZeppelin</a>.
                                </p>
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/blockchain/solidity.svg" alt="solidity" id="solidity">
                                <img src="/static/img/adminoid/pages/tools/blockchain/hardhat.svg" alt="hardhat" id="hardhat">
                                <img src="/static/img/adminoid/pages/tools/blockchain/openzeppelin.svg" alt="openzeppelin" id="openzeppelin">
                            </div>
                        </div>
                    </div>
                </div>
            </tools-block>

            <tools-block inline-template>
                <div>
                    <div class="ui segment block sixteen wide column" id="frontend">
                        <div class="ui stackable grid">
                            <div class="sixteen wide column text-wrapper">
                                <h2 class="ui red header">Фронтенд</h2>
                                <div class="ui stackable grid">

                                    <div class="ten wide column text-wrapper">
                                        <h3>Javascript</h3>
                                        Пишу на <a href="#ecma-script" class="hover ecma-script">ecmaScript 6</a>, в качестве каркаса
                                        приложения использую
                                        <a href="#vue-js" class="vue-js hover">vue.js</a>.
                                        Компилирую и сжимаю код при помощи <a href="#webpack" class="hover webpack">webpack</a>.
                                        Unit тестирование: <a href="#chai" class="hover chai">chai</a>, <a href="#mocha" class="mocha hover">mocha</a>,
                                        <a href="#jest" class="hover jest">jest</a>. Для E2E тестов или автоматизации работы в браузере - Puppeteer
                                    </div>

                                    <div class="six wide column images-wrapper">
                                        <img src="/static/img/adminoid/pages/tools/frontend/es6.svg" alt="ecma-script" id="ecma-script" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/vue-js.png" alt="vue-js" id="vue-js" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/jest.svg" alt="jest" id="jest" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/chai.png" alt="chai" id="chai" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/mocha.png" alt="mocha" id="mocha" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/webpack.png" alt="webpack" id="webpack" data-rjs="2">
                                    </div>

                                </div>
                                <div class="ui stackable grid">

                                    <div class="ten wide column text-wrapper">
                                        <h3>html, css</h3>
                                        Использую шаблонизатор <a href="#pug" class="hover pug">Pug</a> Стили я описываю при помощи
                                        <a href="#sass" class="hover sass">SASS</a>.
                                        В последние годы я верстаю только адаптивные сайты. Из css-фрейморков больше всего приходилось работать
                                        с <a href="#twitter-bootstrap" class="hover twitter-bootstrap">Twitter Bootstrap</a>, для этого сайта
                                        использовал <a href="#semantic-ui" class="hover semantic-ui">semantic-ui</a>.
                                    </div>
                                    <div class="six wide column images-wrapper images-wrapper_html">
                                        <img src="/static/img/adminoid/pages/tools/frontend/sass.png" alt="sass" id="sass" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/twitter-bootstrap.png" alt="twitter-bootstrap" id="twitter-bootstrap" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/semantic-ui.png" alt="semantic-ui" id="semantic-ui" data-rjs="2">
                                        <img src="/static/img/adminoid/pages/tools/frontend/pug.svg" alt="pug" id="pug" data-rjs="2">
                                    </div>

                                </div>
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
                                Разрабатываю на <a href="#golang" class="hover golang">Golang</a>
                                и/или <a href="#node-js" class="node-js hover">Node.js</a>.
                                Раньше использовал <a href="#php" class="hover php">PHP</a>
                                c <a href="#laravel" class="hover laravel">Laravel</a>,
                                на тестах <a href="#php-unit" class="hover php-unit"></a>.
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/backend/laravel.svg" alt="Laravel Framework" id="laravel">
                                <img src="/static/img/adminoid/pages/tools/backend/golang.svg" alt="язык golang" id="golang">
                                <img src="/static/img/adminoid/pages/tools/backend/php.svg" alt="язык php" id="php">
                                <img src="/static/img/adminoid/pages/tools/backend/phpunit.svg" alt="PHPUnit" id="php-unit">
                                <img src="/static/img/adminoid/pages/tools/backend/node-js.svg" alt="Node.js" id="node-js">
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
                                Работаю на <a href="#mac" class="hover mac">macbook pro</a>.
                                Слепая <a href="#keymap" class="hover keymap">10-ти пальцевая печать</a> и редактор <a href="#vim" class="hover vim">VIM</a> делают редактирование текста молниеносным. Все изменения под контролем у <a href="#git" class="hover git">git</a>.
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
                                <img src="/static/img/adminoid/pages/tools/environment/markdown.png" alt="markdown" id="markdown" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/environment/omni.png" alt="omni" id="omni" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/environment/vitamin.png" alt="Vitamin-R 2" id="vitamin" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/environment/google-apps.png" alt="Google Apps" id="google-apps" data-rjs="2">
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
                                В последние годы использовал OS <a href="#ubuntu" class="hover ubuntu">Ubuntu</a>
                                / <a href="#debian" class="hover debian">Debian</a>,
                                а в качестве web-сервера использовал <a href="#nginx" class="hover nginx">Nginx</a> или
                                <a href="#apache" class="hover apache">Apache</a>. <br>
                                А сейчас, используя <a href="#docker" class="hover docker">Docker</a>,
                                могу установить одновременно несколько разных версий php, mysql и т.п..
                                На дешевом облачном хостинге за 250 рублей в месяц такая система будет
                                быстро работать. И ее можно легко, в несколько простых шагов, перенести
                                на любой другой хостинг, сервер, машину или облачный сервис.
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/administration/docker.png" alt="Docker" id="docker" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/administration/nginx.png" alt="Nginx" id="nginx" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/administration/ubuntu.png" alt="Ubuntu" id="ubuntu" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/administration/apache.png" alt="Apache" id="apache" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/administration/debian.png" alt="Debian" id="debian" data-rjs="2">
                            </div>
                        </div>
                    </div>
                </div>
            </tools-block>

            <tools-block inline-template>
                <div>
                    <div class="ui segment block sixteen wide column" id="projecting">
                        <div class="ui stackable grid">
                            <div class="ten wide column text-wrapper">
                                <h2 class="ui red header">Проектирование</h2>
                                <p>Для построения ER-диаграмм, блок схем, мозгового штурма я обычно использую <a href="#lucidchart" class="hover lucidchart">lucidchart</a>, <a href="#brain" class="hover brain">ум</a> и хождение туда-сюда.</p>
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
                                Сейчас дизайн-макет я делаю в <a href="#sketch" class="hover sketch">
                                    Sketch</a> или <a href="#figma" class="hover figma">
                                    Figma</a>, до нее был долгое время обречен на
                                <a href="#photoshop" class="hover photoshop">Photoshop</a>.
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/design/sketch.png" alt="Sketch App" id="sketch" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/design/figma.svg" alt="Figma" id="figma">
                                <img src="/static/img/adminoid/pages/tools/design/photoshop.png" alt="photoshop" id="photoshop" data-rjs="2">
                            </div>
                        </div>
                    </div>
                </div>
            </tools-block>

        </div>
    </div>
@endsection
