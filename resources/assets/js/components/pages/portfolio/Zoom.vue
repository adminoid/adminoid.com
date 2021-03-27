<script>

  // import $ from 'jquery'

  export default {

    data: function() {
      return {
        zoomStopped: true,
        imagePosition: 'static',
        container: {
          width: 0,
          height: 0,
        },
        image: {
          width: 0,
          height: 0,
        },
        proportion: 1,
        cursor: {
          x: 0,
          y: 0
        },
        padding: 50,
      }
    },

    created: function() {
      window.addEventListener('resize', this.calculateSizesAndProportions);
    },

    mounted: async function() {
      const img = new Image();
      img.src = this.$refs.image.getAttribute('src')
      await img.decode()
      this.calculateSizesAndProportions()
    },

    beforeDestroy: function() {
      window.removeEventListener('resize', this.calculateSizesAndProportions);
    },

    methods: {
      calculateSizesAndProportions: function() {
        this.image.width = this.$refs.image.naturalWidth + this.padding * 2
        this.image.height = this.$refs.image.naturalHeight + this.padding * 2
        this.proportion = this.image.width / this.image.height

        this.container.width = this.$refs.container.clientWidth
        this.container.height = Math.round(this.container.width / this.proportion)

        console.group('--calculateSizesAndProportions--')
        console.log(this.image.width, this.image.height)
        console.log(this.container.width, this.container.height)
        console.groupEnd()

      },

      startZoom: function() {
        this.imagePosition = 'absolute'
        this.zoomStopped = false
      },

      onZoom: function(e) {
        this.calculateCursorPosition(e)
      },

      stopZoom: function() {

        console.info('stopZoom')

        this.imagePosition = 'static'
        this.zoomStopped = true
      },

      calculateCursorPosition: function(e) {
        let xPos = Math.abs(window.pageXOffset - e.pageX)
            - this.$refs.container.getBoundingClientRect().left
        let yPos = Math.abs(window.pageYOffset - e.pageY)
            - this.$refs.container.getBoundingClientRect().top

        this.cursor.x = (xPos > 0) ? xPos : 0
        this.cursor.y = (yPos > 0) ? yPos : 0

      },

    },

    computed: {
      imageClasses: function() {
        return (this.zoomStopped) ? 'ui fluid image' : ''
      },

      imageStyle: function() {
        return (!!this.left && !!this.top) ?
            `position:absolute;left:${this.left}px;top:${this.top}px`
            : 'position:static'
      },

      containerStyle: function () {
        return `height:${this.container.height}px`
      },

      left: function() {
        if (!!this.cursor.x && !this.zoomStopped) {
          const widthFactor = (this.cursor.x / (this.container.width / 100)) / 100
          const widthDiff = this.image.width - this.container.width
          return -(widthDiff * widthFactor) + this.padding
        }
        return false
      },

      top: function() {
        if (!!this.cursor.y && !this.zoomStopped) {
          const heightFactor = (this.cursor.y / (this.container.height / 100)) / 100
          const heightDiff = this.image.height - this.container.height
          return -(heightDiff * heightFactor) + this.padding
        }
        return false
      }
    }

  }
</script>
