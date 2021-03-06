<div class="sixteen wide column">
    <div class="ui card">
        <div class="content">
            <h3 class="left floated">{{ $portfolioPage->pageable->title_ru }}</h3>
            <div class="right floated meta yellow"><i class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
        </div>
        <div class="content window fix normal-cursor" id="adminoid-cms">
            <img class="largescreen only" src="/static/img/adminoid/pages/portfolio/adminoid-cms/screen.jpg" data-rjs="2" alt="">
            <div class="description-text">{!! $portfolioPage->pageable->description_ru !!}</div>
        </div>
        <div class="extra content">
                    <span class="right aligned right floated links">
                                       @if($portfolioPage->pageable->link)
                            <a href="{{ $portfolioPage->pageable->link }}"><i class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
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
