<script>
  import {TimelineMax, TweenLite} from 'gsap'
  export default {
    data: function () {
      return {
        clouds: {
          minCloud: '#path-clouds-1',
          midCloud: '#path-clouds-3',
          maxCloud: '#path-clouds-5'
        },
        texts: {
          siteNeed: '#site-need',
          veryBeautiful: '#very-beautiful'
        }
      }
    },
    mounted: function () {
      this.init()
    },
    methods: {
      // https://greensock.com/forums/topic/11673-how-to-hide-elements-so-they-arent-visible-before-animation-is-triggered/
      init: function () {
        TweenLite.set(this.texts.veryBeautiful, {visibility: 'hidden'})
        const timeline = new TimelineMax({repeat: -1})
        timeline
        .to(this.texts.siteNeed, 0.3, {autoAlpha: 0}, '+=2')
        .to(this.clouds.maxCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.midCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.minCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.minCloud, 0.2, {autoAlpha: 1})
        .to(this.clouds.midCloud, 0.2, {autoAlpha: 1})
        .to(this.clouds.maxCloud, 0.2, {autoAlpha: 1})
        .to(this.texts.veryBeautiful, 0.3, {autoAlpha: 1})
        .to(this.texts.veryBeautiful, 0.3, {autoAlpha: 0}, '+=2')
        .to(this.clouds.maxCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.midCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.minCloud, 0.1, {autoAlpha: 0})
        .to(this.clouds.minCloud, 0.2, {autoAlpha: 1})
        .to(this.clouds.midCloud, 0.2, {autoAlpha: 1})
        .to(this.clouds.maxCloud, 0.2, {autoAlpha: 1})
      }
    }
  }
</script>
