<div class="sixteen wide column">
    <div class="ui card">
        <div class="content">
            <h3 class="left floated">{{ $portfolioPage->pageable->title_ru }}</h3>
            <div class="right floated meta yellow"><i
                        class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
        </div>

        <zoom inline-template>
            <div class="window content"
                 ref="container"
                 @mouseenter="startZoom"
                 @mousemove="onZoom"
                 @mouseleave="stopZoom">
                <img src="{{ $portfolioPage->images->first()->folder_in_public }}/{{ $portfolioPage->images->first()->name }}.{{ $portfolioPage->images->first()->ext }}"
                     alt="{{ $portfolioPage->pageable->title_en }}"
                     ref="image"
                     :class="imageClasses"
                     :style="imageStyle">
            </div>
        </zoom>

        <div class="extra content">
            <span class="right aligned right floated links">
                @if($portfolioPage->pageable->link)
                    <a href="{{ $portfolioPage->pageable->link }}"><i
                        class="linkify icon"></i>{{ $portfolioPage->pageable->link }}</a>
                    <br>
                @endif
                @if($portfolioPage->pageable->external_url)
                    <a href="{{ $portfolioPage->pageable->external_url }}" target="_blank"><i
                        class="external icon"></i>{{ $portfolioPage->pageable->external_url }}</a>
                    <br>
                @endif
            </span>
            @foreach($portfolioPage->tags as $tag)
                <a class="ui image label original">
                    <img src="/{{ $tag->icon }}"
                         alt="{{ $tag->name }}">
                    {{ $tag->name }}
                </a>
            @endforeach
        </div>
    </div>
</div>