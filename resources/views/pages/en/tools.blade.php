@extends('layouts.en.page')

@section('title', $page->title_en)

@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('/css/components/tools.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="tools">

        <h1 class="ui blue header">{{ $page->title_en }}</h1>
        <br>
        <div class="ui stackable grid">

            <tools-block inline-template>
                <div>
                    <div class="ui segment block sixteen wide column" id="blockchain">
                        <div class="ui stackable grid">
                            <div class="ten wide column text-wrapper">
                                <h2 class="ui red header">Blockchain</h2>
                                <p>
                                    I will develop a contract or a system of contracts in the language of
                                    <a href="#solidity" class="hover solidity">Solidity</a>.
                                    I'll write unit tests with <a href="#hardhat" class="hover hardhat">Hardhat</a>.
                                    While development I also use
                                    <a href="#openzeppelin" class="hover openzeppelin">OpenZeppelin</a>
                                    framework.
                                </p>
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/blockchain/solidity.svg" alt="Solidity" id="solidity">
                                <img src="/static/img/adminoid/pages/tools/blockchain/hardhat.svg" alt="Hardhat" id="hardhat">
                                <img src="/static/img/adminoid/pages/tools/blockchain/openzeppelin.svg" alt="OpenZeppelin" id="openzeppelin">
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
                                <h2 class="ui red header">Frontend</h2>
                                <div class="ui stackable grid">

                                    <div class="ten wide column text-wrapper">
                                        <h3>JavaScript</h3>
                                        For programming in javascript I prefer use latest version of
                                        <a href="#ecma-script" class="hover ecma-script">ECMAScript</a>
                                        and Typescript. For basis I always use <a href="#vue-js" class="vue-js hover">Vue.js</a>.
                                        As a module builder I use <a href="#webpack" class="hover webpack">webpack</a>.
                                        I cover code by unit tests with: <a href="#chai" class="hover chai">chai</a>,
                                        <a href="#mocha" class="mocha hover">mocha</a>,
                                        <a href="#jest" class="hover jest">jest</a> and so on.
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
                                        <h3>HTML, CSS</h3>
                                        For html I prefer use <a href="#pug" class="hover pug">Pug</a>.
                                        I describe html styles with
                                        <a href="#sass" class="hover sass">SCSS/SASS</a>.
                                        I build only responsive html layouts. Mostly I have worked with
                                        <a href="#twitter-bootstrap" class="hover twitter-bootstrap">Twitter Bootstrap</a>,
                                        but for this site I have used <a href="#semantic-ui" class="hover semantic-ui">Semantic UI</a>.
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
                                <h2 class="ui red header">Backend</h2>
                                For now I am developing a backend either with
                                <a href="#golang" class="hover golang">Golang</a> or
                                <a href="#node-js" class="node-js hover">Node.js</a>.
                                Once upon a time for same purposes I used
                                <a href="#php" class="hover php">Php</a>,
                                <a href="#laravel" class="hover laravel">Laravel</a> Framework
                                with a <a href="#php-unit" class="hover php-unit"></a> testing.
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/backend/laravel.svg" alt="Laravel Framework" id="laravel">
                                <img src="/static/img/adminoid/pages/tools/backend/golang.svg" alt="язык golang" id="golang">
                                <img src="/static/img/adminoid/pages/tools/backend/php.svg" alt="язык php" id="php">
                                <img src="/static/img/adminoid/pages/tools/backend/phpunit.svg" alt="PHPUnit" id="php-unit">
                                <img src="/static/img/adminoid/pages/tools/backend/node-js.svg" alt="node-js" id="node-js">
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
                                <h2 class="ui red header">Environment</h2>

                                I work on a <a href="#mac" class="hover mac">Macbook pro</a>.
                                <a href="#keymap" class="hover keymap">Touch typing</a> and
                                <a href="#vim" class="hover vim">VIM</a> editor make the text editing
                                lightning fast. Any changes are under control of
                                <a href="#git" class="hover git">git</a>.
                                I make notes and docs in <a href="#markdown" class="hover markdown">Markdown</a>.
                                My documents automated in <a href="#google-apps" class="hover google-apps">google apps</a>.
                                Also I may use either Toggl or <a href="#vitamin" class="hover vitamin">Vitamin-R2</a>
                                or Screenflow (if you need video reports) as a timer. For GTD I may use
                                <a href="#omni" class="hover omni">OmniFocus</a> and other GTD soft.
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
                                <h2 class="ui red header">Administration</h2>

                                In recent years I have used OS <a href="#ubuntu" class="hover ubuntu">Ubuntu</a>
                                / <a href="#debian" class="hover debian">Debian</a>
                                (in childhood I use FreeBSD). As a web server I have used
                                <a href="#nginx" class="hover nginx">Nginx</a>, Caddy (In childhood -
                                <a href="#apache" class="hover apache">Apache</a>).
                                And now, using <a href="#docker" class="hover docker">Docker</a>,
                                I can install different versions of backend services at the same time.
                                I use docker-composer, docker-swarm, docker-machine and so on. System
                                based on docker possible transfer to other hardware in minutes.

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
                                <h2 class="ui red header">Planning</h2>

                                <p>To build ER-diagrams, flowcharts, brainstorm I usually use <a href="#lucidchart" class="hover lucidchart">lucidchart</a>, my <a href="#brain" class="hover brain">mind</a> and walking back and forth.</p>
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
                                <h2 class="ui red header">Design</h2>
                                Now I do the design layout in the<a href="#sketch" class="hover sketch">Sketch</a>
                                or <a href="#figma" class="hover figma">Figma</a>.
                                <br>
                                But I used to work in <a href="#photoshop" class="hover photoshop">Photoshop</a> for a long time before.
                            </div>
                            <div class="six wide column images-wrapper">
                                <img src="/static/img/adminoid/pages/tools/design/sketch.png" alt="Sketch" id="sketch" data-rjs="2">
                                <img src="/static/img/adminoid/pages/tools/design/figma.svg" alt="Figma" id="figma">
                                <img src="/static/img/adminoid/pages/tools/design/photoshop.png" alt="Photoshop" id="photoshop" data-rjs="2">
                            </div>
                        </div>
                    </div>
                </div>
            </tools-block>

        </div>
    </div>
@endsection
