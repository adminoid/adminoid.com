<script>
import {TimelineLite, TweenLite} from 'gsap'
export default {
  data: function () {
    return {
      timeline: {},
      animation: {
        leftValue: 0,
        minuteValue: 0,
        hourValue: 0
      },
      touched: false,
      touch: false,
    }
  },

  watch: {
    touched(is) {
      if (is) {
        this.timeline.pause().play()
      } else {
        this.timeline.pause().reverse()
      }
    }
  },

  mounted: function () {
    this.touch = window.navigator.userAgent.indexOf('Mobile') !== -1
    this.compileTimeline()
  },
  methods: {
    // todo: add onTouch
    // todo: may be add click cursor for mobile screen
    compileTimeline: function () {
      const timeline = new TimelineLite({paused: true})
      timeline.add(TweenLite.fromTo(this.animation, 0.5,
          {
            leftValue: 0,
            minuteValue: 0,
            hourValue: 0
          }, {
            leftValue: 251,
            minuteValue: 360,
            hourValue: 30
          }
      ), 0)
      timeline.add(TweenLite.fromTo('g#work-text', 0.1, {fill: 'rgb(18, 84, 176)'}, {fill: 'rgb(255, 255, 255)'}), 0.1)
      this.timeline = timeline
    },
    onHover: function () {
      if (!this.touch) {
        this.timeline.pause().play()
      }
    },
    onLeave: function () {
      if (!this.touch) {
        this.timeline.pause().reverse()
      }
    },
    onTouchStart() {
      this.touched = !this.touched
    },
  },
  computed: {
    pieDashArray: function () {
      return `${(this.animation.leftValue) ? this.animation.leftValue : 0} 251`
    },
    minuteTransform: function () {
      return `rotate(${(this.animation.minuteValue) ? this.animation.minuteValue : 0}, 6, 78)`
    },
    hourTransform: function () {
      return `translate(-15,3) rotate(${(this.animation.hourValue) ? this.animation.hourValue : 0}, 21, 75)`
    }
  }
}
</script>
