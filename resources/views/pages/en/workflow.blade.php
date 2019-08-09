@extends('layouts.en.page')

@section('title', $page->title_en)

@section('styles')
    @parent
    <link rel="stylesheet" href="{{ mix('/css/components/workflow.min.css') }}">
@endsection

@section('content')
    <div class="ui page container" id="workflow">
        <h1 class="ui blue header">{{ $page->title_en }}</h1>
        <div class="ui grid workflow-block projecting top">
            <div class="inner-column"></div>
            <half-rotate class="sixteen wide column" inline-template>
                <div class="sixteen wide column message"
                     @mousemove="onHover"
                     @mouseleave="onLeave"
                     :style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
                    <h2>Projecting</h2>
                    <p>
                        In order to make a nice brainstorm, I use mind maps. For designing databases - ER-diagrams.
                    </p>
                    <p>
                        Here are some more examples (there are also some tabs):

                        <a href="https://www.lucidchart.com/documents/edit/2f8cdb14-161f-4afe-8ccf-6bf7d8567da9/0"
                           target="_blank">example 1</a>,
                        <a href="https://www.lucidchart.com/documents/edit/a90a0bce-b152-4405-920f-98b0f1f4cae1"
                           target="_blank">example 2</a>,
                        <a href="https://www.lucidchart.com/documents/edit/d5fd80c6-c43d-476e-89b3-0e5fb5371ae2"
                           target="_blank">example 3</a>
                    </p>

                    <div class="ui five column centered grid">
                        <div class="center aligned column">
                            <img src="static/img/adminoid/pages/workflow/projecting/lc-1.png" alt="lucidchart scheme" data-rjs="2">
                        </div>

                        <div class="center aligned column">
                            <img src="static/img/adminoid/pages/workflow/projecting/lc-2.png" alt="lucidchart scheme" data-rjs="2">
                        </div>

                        <div class="center aligned column">
                            <img src="static/img/adminoid/pages/workflow/projecting/lc-3.png" alt="lucidchart scheme" data-rjs="2">
                        </div>
                    </div>
                </div>
            </half-rotate>
        </div>
        <div class="ui grid workflow-block design">
            <div class="inner-column"></div>
            <half-rotate class="sixteen wide column" inline-template>
                <div class="sixteen wide column message"
                     @mousemove="onHover"
                     @mouseleave="onLeave"
                     :style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
                    <h2>Design</h2>
                    <p>
                        <a href="/downloads/pages/workflow/adminoid-clean.sketch" target="_blank">Download design layout</a> for this site
                    </p>
                    <p>
                        <img src="static/img/adminoid/pages/workflow/design/site.png" alt="" data-rjs="2">
                    </p>
                </div>
            </half-rotate>
        </div>

        <div class="ui grid workflow-block frontend">
            <div class="inner-column"></div>
            <half-rotate class="sixteen wide column" inline-template>
                <div class="sixteen wide column message"
                     @mousemove="onHover"
                     @mouseleave="onLeave"
                     :style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
                    <h2>Frontend</h2>
                    <p>
                        Examples from this site:
                    </p>
                    <p>
                        <a href="https://github.com/adminoid/frontend.adminoid.com" target="_blank">Repo</a>, <a href="https://github.com/adminoid/frontend.adminoid.com/tree/master/test/unit/specs" target="_blank">unit-tests</a>, <a href="https://github.com/adminoid/adminoid.com/tree/master/semantic/src/definitions/pages" target="_blank">styles</a>, <a href="https://github.com/adminoid/adminoid.com/tree/master/resources/assets/js/components" target="_blank">Vue.js components</a>, <a href="https://github.com/adminoid/adminoid.com/blob/master/docs/frontend.md" target="_blank">Mini documentation</a>
                    </p>
                </div>
            </half-rotate>
        </div>

        <div class="ui grid workflow-block backend bottom">
            <div class="inner-column"></div>

            <half-rotate class="sixteen wide column" inline-template>
                <div class="sixteen wide column message"
                     @mousemove="onHover"
                     @mouseleave="onLeave"
                     :style="{ transform: 'rotateY(' + widthAngle + 'deg)' + 'rotateX(' + heightAngle + 'deg)' }">
                    <h2>Backend</h2>
                    <p>
                        Examples for this project:
                    </p>
                    <p>
                        <a href="https://github.com/adminoid/adminoid.com/tree/master/tests/Feature" target="_blank">Unit-tests</a>, <a href="https://github.com/adminoid/backend.adminoid.com" target="_blank">repo</a>, <a href="https://github.com/adminoid/adminoid.com/blob/master/docs/backend.md" target="_blank">Mini documentation</a>
                    </p>
                </div>
            </half-rotate>

        </div>

    </div>
@endsection
