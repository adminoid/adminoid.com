<script>
  import $ from 'jquery'
  const framePaddingAndBorder = 40 // 40 it is a padding and border
  const heightAngleLimit = 10
  const widthAngleLimit = 5
  export default {
    data: function () {
      return {
        initData: {
          width: 0,
          height: 0,
          leftOffset: 0,
          topOffset: 0
        },
        cursor: {
          x: 0,
          y: 0
        },
        angles: {
          vertical: 0,
          horizontal: 0
        },
        $block: {},
        moved: false
      }
    },
    created: function () {
      window.addEventListener('resize', this.makeInitData)
    },
    mounted: function () {
      this.makeInitData()
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.makeInitData)
    },
    methods: {
      makeInitData: function () {
        let $el = $(this.$el)
        this.$block = $el
        this.initData.leftOffset = $el.offset().left
        this.initData.topOffset = $el.offset().top
        this.initData.width = $el.width() + framePaddingAndBorder
        this.initData.height = $el.height() + framePaddingAndBorder
      },
      onHover: function (e) {
        this.moved = true
        this.cursor.x = e.pageX
        this.cursor.y = e.pageY
      },
      onLeave: function () {
        this.moved = false
      }
    },
    computed: {
      widthAngle: {
          get: function () {
              if (!this.moved) return 0
              let percent = parseInt(Math.round((this.cursor.x - this.initData.leftOffset) / (this.initData.width / 100)), 10)
              let factor = (percent / 100)
              let angle
              if (percent > 0 && percent <= 50) {
                  let angleFactor = 1 - factor * 2
                  angle = -(widthAngleLimit * angleFactor)
              } else if (percent > 50 && percent <= 100) {
                  let angleFactor = (factor - 0.5) * 2
                  angle = widthAngleLimit * angleFactor
              }
              return -angle || 0
          },
          set: function () {}
      },
      heightAngle: {
          get: function () {
              if (!this.moved) return 0
              let percent = parseInt(Math.round((this.cursor.y - this.initData.topOffset) / (this.initData.height / 100)), 10)
              let factor = (percent / 100)
              let angle
              if (percent > 0 && percent <= 50) {
                  let angleFactor = 1 - factor * 2
                  angle = -(heightAngleLimit * angleFactor)
              } else if (percent > 50 && percent <= 100) {
                  let angleFactor = (factor - 0.5) * 2
                  angle = heightAngleLimit * angleFactor
              }
              return angle || 0
          },
          set: function () {}
      }
    }
  }
</script>
