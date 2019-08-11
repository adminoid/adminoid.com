@extends('layouts.en.page')

@section('title', $page->title_en)

@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('/css/components/index.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/image.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/shape.min.css') }}">
    <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="index">
        <h1 class="ui green header">{{ $page->title_en }}</h1>
        <div class="ui stackable two tablet column grid" id="intro">
            <div class="six wide large screen seven wide computer sixteen wide tablet column">
                <img src="/static/img/adminoid/pages/main/ava-circle.jpg" data-rjs="2" alt="">
                <clouds inline-template>
                    <svg id="clouds" width="189px" height="158px" viewBox="0 0 189 158" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <title>static/img/adminoid/pages/main/clouds</title>
                        <defs>
                            <ellipse id="path-clouds-1" cx="13" cy="148" rx="13" ry="10"></ellipse>
                            <mask id="mask-clouds-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
                                  x="0" y="0"
                                  width="26" height="20" fill="white">
                                <use xlink:href="#path-clouds-1"></use>
                            </mask>
                            <ellipse id="path-clouds-3" cx="42" cy="125" rx="33" ry="25"></ellipse>
                            <mask id="mask-clouds-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
                                  x="0" y="0"
                                  width="66" height="50" fill="white">
                                <use xlink:href="#path-clouds-3"></use>
                            </mask>
                            <ellipse id="path-clouds-5" cx="106.389262" cy="62" rx="82.3892617" ry="62"></ellipse>
                            <mask id="mask-clouds-6" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
                                  x="0" y="0"
                                  width="164.778523" height="124" fill="white">
                                <use xlink:href="#path-clouds-5"></use>
                            </mask>
                        </defs>
                        <g id="Главная-clouds" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Large-Monitor---Главная-clouds" transform="translate(-276.000000, -122.000000)">
                                <g id="adminoid/contents/main-page-content" transform="translate(94.000000, 96.000000)">
                                    <g id="intro-clouds" transform="translate(3.000000, 0.000000)">
                                        <g id="static/img/adminoid/pages/main/clouds"
                                           transform="translate(179.000000, 26.000000)">
                                            <use id="Oval-1" stroke="#1254B0" mask="url(#mask-clouds-2)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-1"></use>
                                            <use id="Oval-2" stroke="#1254B0" mask="url(#mask-clouds-4)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-3"></use>
                                            <use id="Oval-3" stroke="#CD2E41" mask="url(#mask-clouds-6)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-5"></use>
                                            <text id="site-need" font-family="RobotoMono-Regular, Roboto Mono"
                                                  font-size="24"
                                                  font-weight="normal" fill="#000000">
                                                <tspan x="50" y="56">Need a</tspan>
                                                <tspan x="50" y="84">web app?</tspan>
                                            </text>
                                            <text id="very-beautiful" style="visibility: hidden; opacity: 0;"
                                                  font-family="RobotoMono-Regular, Roboto Mono"
                                                  font-size="24" font-weight="normal" fill="#000000">
                                                <tspan x="45" y="56">Very</tspan>
                                                <tspan x="45" y="84">beautiful</tspan>
                                            </text>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </clouds>
            </div>
            <div class="ten wide large screen nine wide computer sixteen wide tablet column">

                <p>Yes, you are in the right place, if you need a modern web application.</p>

                <p>I was named Peter in honor of St. Apostle Peter.</p>

                <p>I'm a <u>Full Stack Web-developer</u>:<br>
                    (<a href="https://secure.php.net/">php</a> + <a href="https://laravel.com/">Laravel</a>,
                    <strong>javascript</strong> +
                    <a href="https://vuejs.org/">Vue.js</a>, <br>
                    <strong>html</strong> + <strong>css</strong> + <a href="https://github.com/less/less.js">less</a>/<a
                            href="https://github.com/sass">sass</a>,
                    <br>
                    <a href="https://www.ubuntu.com/">ubuntu</a>/<a
                            href="https://www.debian.org/">debian</a> + <a href="https://www.docker.com/">docker</a>, <br>
                    <a href="https://www.sketchapp.com/">sketch app</a>/<a
                            href="https://www.adobe.com/products/photoshop.html">photoshop</a>)</p>

                <p>Work in Mac OS X, use ten-finger touch typing and vim editor.</p>

                <p>Look through the site, get acquainted with my possibilities and services.</p>

            </div>
        </div>

        <h2 class="ui blue header">Standard services</h2>
        <ol>
            <li><strong>Creation of functional sites prototypes</strong>.
                There are certain standards of usability and design in website development, that users are get used to.<br>

                These standards are determined by the leaders of Internet business (social networks, search engines and other popular services). And this standards are reflected in popular css-frameworks with design, developed by world-class professionals. But any hasty innovation in design may negativity reflect in website conversion. That is why in modern Internet marketing any innovations go through split/multi tests.

                This wise to start your Internet project with minimal professional design, eg design by <a href="http://getbootstrap.com/">twitter bootstrap</a> team, concentrating on the convenience and structure of information presenting in order to be able to set more risky experiments with your own innovations in design, sizing (calibrating) them through multi/split testing in the future. By the way, I can organise it with the help of <a href="https://analytics.google.com/analytics/web/">google analytics</a>.
            </li>

            <li><strong>Developing of online stores, integrated systems, portals and any other web apps.</strong> Though I myself accompany my own works, my projects are also attractive to many other good web-developers in rework and support. <br>

                The reason is: <br>
                <ul>
                    <li>I use one of the most popular tools, which most of the programmers in the world work with, for example, I write backend on PHP with the help of <a href="https://laravel.com/">Laravel framework</a>, I use javascript framework <a href="https://vuejs.org/">Vue.js</a> as a framework for frontend and so on (see more details here - tools).</li>

                    <li>I write code according to generally accepted standards, comment and document it. I try not to reinvent the wheel, if there are time-tested solutions, then I just use them.</li>

                    <li>When it possible or necessary, I set PHP and Javascript tasks with tests (unit or functional) and then actualize (realize) them. Test Driven Development helps the third-party programmers make changes easily without damaging general project functionality. The unit tests also serve as visual documentation.</li>
                </ul>

            </li>

            <li><strong>Redoing an outdated web projects</strong> if it is too slow or too expensive in maintenance. In this case we take as a basis the structure and logic of the old one and on their basis develop a completely new site. Then data from old web app (images, data structures from database, old urls to save the weight of incoming links (SEO) etc.) are transferred to a new site.</li>

            <li><strong><a href="https://developers.google.com/apps-script/">Google Apps Script programming</a></strong>. Since in the past I worked a lot with online stores, where import/export/price lists processing tasks are always acute, most of my google apps works was done for Google Sheets.</li>

            <li><strong>Interactive SVG/Canvas/WebGL-animation</strong> is still poorly distributed. In this case it can be interesting to visitors and strengthen the user behavioral ranking factor (SEO).</li>

            <li>I can also perform partial work concerning Laravel, Vue.js and all of the above, but this is not a rational approach and I will do it only in case of high interest.</li>

        </ol>

        <h2 class="ui red header">The cube surfaces</h2>

        <cube inline-template>
            <div class="ui grid">
                <div class="sixteen wide tablet fourteen wide computer twelve wide large screen column">

                    <div class="four ui top attached basic buttons">
                        <button class="ui button btn-shape-left" @click="moveLeft"><i class="left large arrow blue icon"></i>
                        </button>
                        <button class="ui button btn-shape-down" @click="moveUp"><i class="down large arrow yellow icon"></i>
                        </button>
                        <button class="ui button btn-shape-up" @click="moveDown"><i class="up large arrow green icon"></i>
                        </button>
                        <button class="ui button btn-shape-right" @click="moveRight"><i class="right large arrow red icon"></i>
                        </button>
                    </div>

                    <div class="ui attached segment">
                        <div class="ui shape auto" id="shape-gallery">
                            <div class="sides">
                                <cube-item inline-template>
                                    <div class="active side reliability" id="reliability">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui top left attached label">
                                                    <h3 class="ui green header" @touchstart="onUnhover">Надежность</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/reliability.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>За годы работы (с июня 2008) на крупнейшей российской бирже фриланса FL.ru у меня только
                                                        положительные
                                                        отзывы и завершенные сделки (см. <a href="/reviews">отзывы</a>). В начале пути,
                                                        когда я был неопытен, шанс совершить ошибку был еще велик, но я им не воспользовался. Как
                                                        теперь накосячить ума не приложу…</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </cube-item>
                                <cube-item inline-template>
                                    <div class="side frontend" id="frontend">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui top left attached label">
                                                    <h3 class="ui green header" @touchstart="onUnhover">Фронтенд</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/frontend.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>Первый сайт сверстал в 2002 году табличной версткой. В период пика популярности Internet
                                                        Explorer 6, верстал под заказ множество кросбраузерных страниц. Профессионально программирую на JavaScript с 2009 года. С фреймворком Vue.js работаю с 2014 года.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </cube-item>
                                <cube-item inline-template>
                                    <div class="side backend" id="backend">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui top left attached label">
                                                    <h3 class="ui green header" @touchstart="onUnhover">Бэкенд</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/backend.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>Программирую на PHP с 2006 года. С 2013 года работаю с фреймворком Laravel (3.x -> 4.x -> 5.x). В работе
                                                        использую Unit-тесты, xDebug, phpStorm/VIM.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </cube-item>
                                <cube-item inline-template>
                                    <div class="side server" id="server">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui top left attached label">
                                                    <h3 class="ui green header" @touchstart="onUnhover">Сервер</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/server.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>Я сам решаю задачи администрирования. С 2000 по 2005 годы работал системным
                                                        администратором
                                                        *nix систем. Администрировал крупные многоранговые сети до 250 машин. Сейчас в качестве
                                                        сервера использую связку Docker+LEMP.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </cube-item>
                                <cube-item inline-template>
                                    <div class="side design" id="design">
                                        <div class="content">
                                            <div class="center">
                                                <div class="ui top left attached label">
                                                    <h3 class="ui green header" @touchstart="onUnhover">Дизайн</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/design.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>С 90-х годов начал изучать Photoshop, CorelDRAW. Понимаю теорию дизайна (композиция,
                                                        цветовой баланс, акценты и т.д.). Разработаю функциональный дизайн в программе
                                                        Sketch, в полной мере решающий практические задачи, адаптивный, с наборами стилей и UI
                                                        элементов. Готов объяснить, что я сделал, почему и зачем.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </cube-item>
                            </div>
                        </div>
                    </div>

                    <div class="four ui bottom attached basic buttons">
                        <button class="ui button btn-shape-left" @click="moveLeft">
                            <i class="left large arrow blue icon"></i>
                        </button>
                        <button class="ui button btn-shape-down" @click="moveUp">
                            <i class="down large arrow yellow icon"></i>
                        </button>
                        <button class="ui button btn-shape-up" @click="moveDown">
                            <i class="up large arrow green icon"></i>
                        </button>
                        <button class="ui button btn-shape-right" @click="moveRight">
                            <i class="right large arrow red icon"></i>
                        </button>
                    </div>

                </div>
            </div>
        </cube>
    </div>
@endsection

@section('scripts')
    @parent
    <script src="{{ mix('/js/shape.min.js') }}"></script>
@endsection
