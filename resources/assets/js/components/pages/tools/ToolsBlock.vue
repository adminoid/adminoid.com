<script>
  import {TimelineLite, Linear} from 'gsap'
  export default{
    data () {
      return {
        links: 'a.hover'
      }
    },
    mounted () {
      $(this.$el).find(this.links).click(this.movie).mouseenter(this.movie)
    },
    methods: {
      movie: function (e) {
        e.preventDefault()
        let target = $(e.target).attr('href')
        let timeline = new TimelineLite()
        timeline
        .fromTo(target, 0.2, {scale: 1, rotation: 0, ease: Linear.easeNone}, {
          scale: 1.5,
          rotation: 180,
          ease: Linear.easeNone
        })
        .fromTo(target, 0.2, {scale: 1.5, rotation: 180, ease: Linear.easeNone}, {
          scale: 1,
          rotation: 360,
          ease: Linear.easeNone
        })
      }
    }
  }
</script>