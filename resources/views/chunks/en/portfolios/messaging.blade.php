<div class="sixteen wide column">
    <div class="ui card">
        <div class="content">
            <h3 class="left floated">{{ $portfolioPage->pageable->title_en }}</h3>
            <div class="right floated meta yellow"><i class="calendar icon"></i>{{ $portfolioPage->pageable->custom_date }}</div>
        </div>
        <div class="content window fix normal-cursor" id="chat-constructor">
            <center>
                <iframe id="player-messaging"
                        width="100%"
                        src="https://www.youtube.com/embed/5qYmki6ocV8"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>Your browser does not support this, try viewing it on YouTube: YOUR URL</iframe>
            </center>
            <script type="application/javascript">
                window.addEventListener("load", playerSizer);
                window.addEventListener("resize", playerSizer);
                function playerSizer() {
                    const player = document.getElementById("player-messaging");
                    let width = player.offsetWidth;
                    player.style.height = (width * 0.5625) + "px";
                }
            </script>
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
