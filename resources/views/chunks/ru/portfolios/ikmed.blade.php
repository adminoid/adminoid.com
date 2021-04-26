<div class="sixteen wide column">
    <div class="ui card">
        <div class="content">
            <h3 class="left floated">{{ $portfolioPage->pageable->title_ru }}</h3>
            <div class="right floated meta green"><i class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}
            </div>
        </div>
        <div class="content window fix normal-cursor" id="ikmed">
            <img class="ikmed-logo abs" src="/static/img/adminoid/pages/portfolio/presentations/ikmed-logo-big.png"
                 alt="">
            <img class="iphone abs" src="/static/img/adminoid/pages/portfolio/presentations/ikmed/iphone.png"
                 alt="">
            <img class="ipad abs" src="/static/img/adminoid/pages/portfolio/presentations/ikmed/tablet.png"
                 alt="">
            <img class="chrome abs" src="/static/img/adminoid/pages/portfolio/presentations/ikmed/chrome.jpg"
                 alt="">
        </div>
        <div class="extra content">
                    <span class="right aligned right floated links">
                                       @if($portfolioPage->pageable->link)
                            <a href="{{ $portfolioPage->pageable->link }}"><i class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
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