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
                <img src="/static/img/adminoid/pages/main/ava-circle.jpg" class="ava" data-rjs="2" alt="">
                <clouds inline-template>
                    <svg id="clouds" width="189px" height="158px" viewBox="0 0 189 158" version="1.1"
                         style="transform:rotateZ(360deg) translateZ(0);will-change: transform;"
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
                            <g id="Large-Monitor---Главная-clouds" style="will-change: transform;" transform="translate(-276.000000, -122.000000)">
                                <g id="adminoid/contents/main-page-content" style="will-change: transform;" transform="translate(94.000000, 96.000000)">
                                    <g id="intro-clouds" style="will-change: transform;" transform="translate(3.000000, 0.000000)">
                                        <g id="static/img/adminoid/pages/main/clouds"
                                           style="will-change: transform;" transform="translate(179.000000, 26.000000)">
                                            <use id="Oval-1" stroke="#1254B0" mask="url(#mask-clouds-2)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-1"></use>
                                            <use id="Oval-2" stroke="#1254B0" mask="url(#mask-clouds-4)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-3"></use>
                                            <use id="Oval-3" stroke="#CD2E41" mask="url(#mask-clouds-6)"
                                                 stroke-width="4" fill="#FFFFFF"
                                                 stroke-dasharray="4" xlink:href="#path-clouds-5"></use>
                                            <text id="site-need"
                                                  font-family="RobotoMono-Regular,'Roboto Mono','Helvetica Neue',Arial,Helvetica,sans-serif"
                                                  font-size="24" font-weight="normal" fill="#000000">
                                                <tspan x="67" y="56">Need a</tspan>
                                                <tspan x="55" y="84">web app?</tspan>
                                            </text>
                                            <text id="very-beautiful" style="visibility: hidden; opacity: 0;"
                                                  font-family="RobotoMono-Regular,'Roboto Mono','Helvetica Neue',Arial,Helvetica,sans-serif"
                                                  font-size="24" font-weight="normal" fill="#000000">
                                                <tspan x="83" y="53">Very</tspan>
                                                <tspan x="61" y="82">beautiful</tspan>
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

                <p>I'm a <u>Full Stack Web(3.0) developer</u>:<br>
                  <strong>JavaScript</strong>/<strong>TypeScript</strong> +
                  <a href="https://vuejs.org/">Vue.js</a> + <a href="https://web3js.readthedocs.io/">web3.js</a>, <br>
                  <strong>Golang</strong>, <a href="https://soliditylang.org/">Solidity</a>,
                  <a href="https://ton.org/docs/develop/func/overview">Func</a>,
                  <br>
                  and <a href="https://nodejs.org/">Node.js</a>, <a href="https://www.php.net/">PHP</a>.
                  <br>

                  Servers set up with an <a href="https://ubuntu.com/">Ubuntu</a> + <a href="https://www.docker.com/">Docker</a>, <br>
                </p>

                <p>I'm working in <strong>macOS</strong>, use <strong>ten-finger touch typing</strong> and <strong>VIM</strong> editor.</p>

                <p class="p-bold">Preferred method of communication - telegram
                    <a href="https://t.me/qrkey" target="_blank" class="tg-link" title="@qrkey">
                        <img src="/static/img/telegram.svg" alt="@qrkey"> QRKEY
                    </a>
                </p>

                <p>Look through the site, get acquainted with my possibilities and services.</p>

            </div>
        </div>

        <br>
        <div class="updated-2023">
          <em>Updated <strong>March 21, 2023</strong></em>
          <p>
            I haven't updated my website and portfolio for the past few years, I just haven't had the time to do so.<br>
            Because of it,
            Therefore, at least briefly, I will describe the main news.<br>
            Firstly: <strong>Backend code now i write in Golang</strong> with an eye on performance, that is, without the use of frameworks and ORMs.<br>
            Secondly: the last couple of years I have had a lot of work with the blockchain.<br>
            As a new turnkey service, I want to introduce the service: <strong>"Smart contract + website"</strong><br>
            The minimum cost of any order is $10 000.
          </p>
          <p>
            In conclusion my technology stack is:
            <ul>
              <li>Smart contracts: Solidity/Func</li>
              <li>Frontend: Vue.js 3.x, javascript/typescript</li>
              <li>Backend: Golang</li>
            </ul>
            <em>And also, if necessary, I work with <strong>Node.js</strong> and <strong>PHP</strong></em>
          </p>
        </div>

        <h2 class="ui blue header">Standard services</h2>
        <ol>
            <li><strong>Smart contract + website</strong>.
              I will write a <strong>Smart contracts</strong>, no matter what complexity, on <strong>Solidity</strong> or <strong>Func (TON blockchain)</strong>, as well as create a web application (site) and integrate with it.
            </li>

            <li><strong>Creation of functional sites prototypes</strong>.
                There are certain standards of usability and design in website development, that users are get used to.<br>

                These standards are determined by the leaders of Internet business (social networks, search engines and other popular services). And this standards are reflected in popular css-frameworks with design, developed by world-class professionals. But any hasty innovation in design may negatively reflect in website conversion. That is why in modern Internet marketing any innovations go through split/multi tests.

                It is wise to start your Internet project with minimal professional design, eg design by the <a href="http://getbootstrap.com/">twitter bootstrap</a> team, concentrating on the convenience and structure of information presenting in order to be able to set riskier experiments with your own innovations in design, sizing (calibrating) them through multi/split testing in the future. By the way, I can organise it with the help of <a href="https://analytics.google.com/analytics/web/">google analytics</a>.
            </li>

            <li><strong>Development of online stores, integrated systems, portals and any other web apps.</strong> My products are easy to maintain. <br>

                The reason is: <br>
                <ul>
                    <li>I use one of the most popular tools, which most of the programmers in the world work with, for example, I make backend in PHP with the help of the <a href="https://laravel.com/">Laravel framework</a>, I use the javascript framework <a href="https://vuejs.org/">Vue.js</a> as a framework for frontend and so on (see more details here - tools).</li>

                    <li>I code according to generally accepted standards, comment and document it. I try not to reinvent the wheel, if there are time-tested solutions, then I just use them.</li>

                    <li>When it possible or necessary, I set PHP and Javascript tasks with tests (unit or functional) and then actualize (realize) them. Test Driven Development helps the third-party programmers make changes easily without damaging general project functionality. The unit tests also serve as visual documentation.</li>
                </ul>

            </li>

            <li><strong>Redoing outdated web projects</strong> if it is too slow or too expensive in maintenance. In this case we take as a basis the structure and logic of the old one and on its basis develop a completely new site. Then data from old web app (images, data structures from database, old urls to save the weight of incoming links (SEO) etc.) are transferred to a new site.</li>

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
                                                    <h3 class="ui green header" @touchstart="onUnhover">Strong and stable</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/reliability.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>
                                                        Over the years of work (since June 2008) on the largest Russian freelance exchange FL.ru, I have only positive reviews and fully completed work (see <a href="/reviews">reviews</a>).
                                                        At the beginning of the journey, when I was inexperienced, the chance to make a mistake was still great, but I did not use it. Now I won’t know how to screw up my mind.
                                                    </p>
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
                                                    <h3 class="ui green header" @touchstart="onUnhover">Frontend</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/frontend.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>
                                                        The first site was created in 2002 using an HTML table layout. At the peak of the popularity of Internet Explorer 6, I created many cross-browser custom pages. I have been professionally programming in JavaScript since 2009, and have been working with the Vue.js framework since 2014.
                                                    </p>
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
                                                    <h3 class="ui green header" @touchstart="onUnhover">Backend</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/backend.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>
                                                        I have been programming in PHP since 2006. Since 2013 I have been working with the Laravel framework (3.x -> 4.x -> 5.x), using Unit tests, xDebug, phpStorm / VIM (with 10 finger touch typing) in my work.
                                                    </p>
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
                                                    <h3 class="ui green header" @touchstart="onUnhover">Server</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/server.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>
                                                        I solve administration tasks myself. From 2000 to 2005 he worked as a system administrator of *nix (FreeBSD/Solaris/OpenBSD/Red Hat Linux) systems. I'm was administers large multi-rank networks with more than 250 machines. Now I use Docker/Laradock/LEMP and more...
                                                    </p>
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
                                                    <h3 class="ui green header" @touchstart="onUnhover">Design</h3>
                                                </div>
                                                <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/design.jpg"
                                                     @mouseenter="onHover" @mouseleave="onUnhover"
                                                     @touchstart="onHover">
                                                <div class="text" @touchstart="onUnhover">
                                                    <p>
                                                        From the 90s, he began to study Photoshop, CorelDRAW. I understand design theory (composition, color balance, accents, etc.). Functional design I do in the Sketch application. I am doing responsive design, with sets of styles and user interface elements. I understand and can explain what and why I did.
                                                    </p>
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
