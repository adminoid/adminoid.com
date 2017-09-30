@extends('layouts.ru.page')

@section('title', $page->title_ru)

@section('styles')
  @parent
  <link rel="stylesheet" href="{{ mix('/css/components/index.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/image.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/shape.min.css') }}">
  <link rel="stylesheet" href="{{ mix('/css/components/icon.min.css') }}">
@endsection

@section('content')
  <div class="ui page container" id="index">
    <h1 class="ui green header">{{ $page->title_ru }}</h1>
    <div class="ui stackable two tablet column grid" id="intro">
      <div class="six wide large screen seven wide computer sixteen wide tablet column">
        <img src="/static/img/adminoid/pages/main/ava-circle.jpg" alt="">
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
                        <tspan x="34" y="70">Сайт надо?</tspan>
                      </text>
                      <text id="very-beautiful" style="visibility: hidden; opacity: 0;"
                            font-family="RobotoMono-Regular, Roboto Mono"
                            font-size="24" font-weight="normal" fill="#000000">
                        <tspan x="69.9941406" y="56">Очень</tspan>
                        <tspan x="48.390625" y="84">красивый</tspan>
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

        <p>Да, ты по адресу, коли хочешь себе современное веб-приложение.</p>

        <p>В младенчестве меня нарекли Петром.</p>

        <p>Я - <u>Full Stack Web-разработчик</u>:<br>
          (<a href="https://secure.php.net/">php</a> + <a href="https://laravel.com/">Laravel</a>,
          <strong>javascript</strong> +
          <a href="https://vuejs.org/">Vue.js</a>,
          <strong>html</strong> + <strong>css</strong> + <a href="https://github.com/less/less.js">less</a>/<a
              href="https://github.com/sass">sass</a>,
          <br>
          <a href="https://getbootstrap.com/">Twitter Bootstrap</a>/<a
              href="https://semantic-ui.com/">Semantic UI</a>/<a
              href="https://github.com/thoughtbot/bourbon">Bourbon</a><br>
          <a href="https://www.docker.com/">docker</a> + <a href="https://www.ubuntu.com/">ubuntu</a>/<a
              href="https://www.debian.org/">debian</a>,
          <a href="https://www.sketchapp.com/">sketch</a> + <a
              href="https://www.adobe.com/products/photoshop.html">photoshop</a>/<a
              href="https://www.gimp.org/">gimp</a>)</p>

        <p>Работаю в macOS. Владею слепой десятипальцевой печатью, использую возможности редактора VIM. Постоянно и самостоятельно изучаю и практикую английский язык.</p>

        <p>Больше всего я работал с Интернет-магазинами но могу создать любую информационную структуру.</p>

        <p>Полистай сайт, ознакомься с моими возможностями и услугами.</p>

      </div>
    </div>

    <h2 class="ui blue header">Услуги типичные</h2>
    <ol>
      <li><strong>Создание полнофункциональных прототипов сайтов</strong>. Одно из последних достижений науки и техники: дизайн, юзабилити и
        функциональность необходимо определять не изображая из себя нострадамуса, а уже в процессе работы бизнеса, по сплит/мульти
        тестам.<br>
        Я могу сделать простейший сайт (без неоправданных наворотов, которые погубят бизнес на корню), запустить его и затем дорабатывать, проверяя увеличились ли, например, продажи из-за следующей доработки или был выбран неверный шаг. Таким образом можно скоро видеть результат, а на выходе получить сверхконверсионный сайт.
      </li>
      <li><strong>Разработка Интернет-магазинов, интегрированных систем, порталов и любых других сайтов под ключ</strong>.
        Хотя я сам с удовольствием сопровождаю свои работы, так же мои проекты привлекательны и для множества
        сторонних
        разработчиков в доработке и поддержке, вот почему:
        <ul>
          <li>я использую одни из самых популярных инструментов, с которыми хочет работать множество
            программистов во
            всем мире.
            Например: бэкенд я пишу на PHP с помощью фреймворка Laravel, а в качестве каркаса для фронтенда
            я
            использую
            JavaScript фреймворк Vue.js, см. <a href="/tools">инструменты</a>
          </li>
          <li>стараюсь писать код соответственно общепринятым стандартам, комментирую, документирую его,
            именую
            развернуто.
            Стараюсь не изобретать велосипеды, если есть проверенные людьми во времени решения, у которых
            есть
            документация,
            поддержка - то использую их
          </li>
          <li>PHP и Javascript задачи я ставлю тестами (модульными, функциональными, e2e и т.п.) и затем
            реализую их.
            Test Driven Development помогает сторонним разработчикам легко вносить изменения в код, не
            повреждая общей
            функциональности проекта. Так же тесты служат в качестве наглядной документации
          </li>
        </ul>
      </li>
      <li><strong>Переделывание устаревшего сайта</strong>, который, например, слишком медленен и дорог в обслуживании. В данном
        случае,
        в основу
        берется структура и наработанная логика старого сайта и на их основе разрабатывается полностью новый
        сайт. Затем данные со старого сайта (изображения, структуры данных из БД, старые урлы для сохранения SEO веса
        входящих
        ссылок и т.д.) переносятся в новый сайт
      </li>
      <li><strong>Google Apps Script программирование</strong>. Поскольку, по большей части я работал с Интернет-магазинами, где
        всегда
        остро стоят задачи
        импорта/экспорта/обработки прайс листов, больше всего мною сделано работ для электронных таблиц Google
        Spreadsheet
      </li>
      <li><strong>Интерактивная SVG/Canvas/WebGL-анимация</strong>. Сейчас еще слабо распространена, поэтому может заинтересовать
        посетителя и усилить поведенческий фактор
      </li>
      <li>Так же могу выполнить какие-то частичные работы касающиеся Laravel, Vue.js и всего вышеперечисленного, но это - нерациональный расход ресурсов
      </li>
    </ol>

    <h2 class="ui red header">Понты эпичные</h2>

    <cube inline-template>
      <div class="ui grid">
        <div class="sixteen wide tablet fourteen wide computer twelve wide large screen column">

          <div class="four ui top attached basic buttons">
            <button class="ui button btn-shape-left" v-on:click="moveLeft"><i class="left large arrow blue icon"></i>
            </button>
            <button class="ui button btn-shape-down" v-on:click="moveUp"><i class="down large arrow yellow icon"></i>
            </button>
            <button class="ui button btn-shape-up" v-on:click="moveDown"><i class="up large arrow green icon"></i>
            </button>
            <button class="ui button btn-shape-right" v-on:click="moveRight"><i class="right large arrow red icon"></i>
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
                          <h3 class="ui green header" v-on:touchstart="onUnhover">Надежность</h3>
                        </div>
                        <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/reliability.jpg"
                             v-on:mouseenter="onHover" v-on:mouseleave="onUnhover"
                             v-on:touchstart="onHover">
                        <div class="text" v-on:touchstart="onUnhover">
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
                          <h3 class="ui green header" v-on:touchstart="onUnhover">Фронтенд</h3>
                        </div>
                        <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/frontend.jpg"
                             v-on:mouseenter="onHover" v-on:mouseleave="onUnhover"
                             v-on:touchstart="onHover">
                        <div class="text" v-on:touchstart="onUnhover">
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
                          <h3 class="ui green header" v-on:touchstart="onUnhover">Бэкенд</h3>
                        </div>
                        <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/backend.jpg"
                             v-on:mouseenter="onHover" v-on:mouseleave="onUnhover"
                             v-on:touchstart="onHover">
                        <div class="text" v-on:touchstart="onUnhover">
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
                          <h3 class="ui green header" v-on:touchstart="onUnhover">Сервер</h3>
                        </div>
                        <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/server.jpg"
                             v-on:mouseenter="onHover" v-on:mouseleave="onUnhover"
                             v-on:touchstart="onHover">
                        <div class="text" v-on:touchstart="onUnhover">
                          <p>Я сам решаю задачи администрирования, потому что с 2000 по 2005 годы работал системным
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
                          <h3 class="ui green header" v-on:touchstart="onUnhover">Дизайн</h3>
                        </div>
                        <img class="ui fluid rounded image" src="static/img/adminoid/pages/main/design.jpg"
                             v-on:mouseenter="onHover" v-on:mouseleave="onUnhover"
                             v-on:touchstart="onHover">
                        <div class="text" v-on:touchstart="onUnhover">
                          <p>С 90-х годов начал изучать Photoshop, CorelDRAW. Понимаю теорию дизайна (композиция,
                            цветовой баланс, акценты и т.д.). Рисую на планшете. Разработаю функциональный дизайн в программе
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
            <button class="ui button btn-shape-left" v-on:click="moveLeft">
              <i class="left large arrow blue icon"></i>
            </button>
            <button class="ui button btn-shape-down" v-on:click="moveUp">
              <i class="down large arrow yellow icon"></i>
            </button>
            <button class="ui button btn-shape-up" v-on:click="moveDown">
              <i class="up large arrow green icon"></i>
            </button>
            <button class="ui button btn-shape-right" v-on:click="moveRight">
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