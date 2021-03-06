<div class="sixteen wide column">
    <div class="ui card">
        <div class="content">
            <h3 class="left floated">{{ $portfolioPage->pageable->title_ru }}</h3>
            <div class="right floated meta yellow"><i class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
        </div>
        <div class="content window fix normal-cursor" id="ikmed-admin-panel">
            <img class="ikmed-logo abs" src="/static/img/adminoid/pages/portfolio/presentations/ikmed-logo-big.png"
                 alt="">
            <img class="chrome-1 abs"
                 src="/static/img/adminoid/pages/portfolio/presentations/ikmed-admin-panel/chrome-1.jpg"
                 alt="">
            <img class="chrome-2 abs"
                 src="/static/img/adminoid/pages/portfolio/presentations/ikmed-admin-panel/chrome-2.jpg"
                 alt="">
            <img class="chrome-3 abs"
                 src="/static/img/adminoid/pages/portfolio/presentations/ikmed-admin-panel/chrome-3.jpg"
                 alt="">
            <img class="chrome-4 abs"
                 src="/static/img/adminoid/pages/portfolio/presentations/ikmed-admin-panel/chrome-4.jpg"
                 alt="">
        </div>
        <div class="extra content">
                            <span class="right aligned right floated links">
                                       @if($portfolioPage->pageable->link)
                                    <a href="{{ $portfolioPage->pageable->link }}"><i
                                                class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
                                    <br>
                                @endif
                                @if($portfolioPage->pageable->external_url)
                                    <a href="{{ $portfolioPage->pageable->external_url }}" target="_blank"><i
                                                class="external icon"></i>{{ parse_url($portfolioPage->pageable->external_url)['host'] }}</a>
                                    <br>
                                @endif
                    </span>
            @foreach($portfolioPage->tags as $tag)
                <a class="ui image label original"><img src="/{{ $tag->icon }}">
                    {{ $tag->name }}</a>
            @endforeach
        </div>
    </div>
</div>