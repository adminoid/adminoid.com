<script>

const ImageActiveStyle = 'max-width:none;width:auto;' // remove [ui fluid image] factor (make image is real size)

export default {
  data: function() {
    return {
      touch: false,
      active: false,
      container: {
        width: 0,
        height: 0,
      },
      image: {
        width: 0,
        height: 0,
      },
      proportion: 0,
      cursor: {
        x: 0,
        y: 0
      },
      padding: 50,
    }
  },

  computed: {
    leftFactor: function() {
      if (!!this.cursor.x && this.active) {
        return (this.cursor.x / (this.container.width / 100)) / 100
      }
      return 0
    },

    leftPosition: function () {
      return (this.leftFactor > 0) ? -((this.image.width - this.container.width) * this.leftFactor - this.padding) : 0
    },

    leftScroll: function () {
      return (this.leftFactor > 0) ? Math.round(this.image.width * this.leftFactor - this.container.width / 2) : 0
    },

    topFactor: function() {
      if (!!this.cursor.y && this.active) {
        return (this.cursor.y / (this.container.height / 100)) / 100
      }
      return 0
    },

    topPosition: function () {
      return (this.topFactor > 0) ? -((this.image.height - this.container.height) * this.topFactor - this.padding) : 0
    },

    topScroll: function () {
      return (this.topFactor > 0) ? Math.round(this.image.height * this.topFactor - this.container.height / 2) : 0
    },

    imageStyle: function() {
      if (!this.touch) {
        return (this.leftFactor > 0 || this.topFactor > 0) ?
            `${ImageActiveStyle}position:absolute;left:${this.leftPosition}px;top:${this.topPosition}px;`
            : ''
      }
      else {
        return (this.active) ? ImageActiveStyle : ''
      }
    },

    containerStyle: function () {
      const baseStyle = (this.container.height > 0) ? `height:${this.container.height}px;` : 'height:300px;'
      if (this.touch && this.active) {
        return `${baseStyle}overflow:scroll;`
      }
      return baseStyle
    },

    locked: function () {
      return (this.container.width > this.image.width)
    },

    zoomable: function () {
      return !this.locked && !this.touch
    },

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
    window.removeEventListener('resize', this.calculateSizesAndProportions)
  },

  methods: {
    calculateSizesAndProportions: function() {
      this.touch = window.navigator.userAgent.indexOf('Mobile') !== -1
      this.image.width = this.$refs.image.naturalWidth + this.padding * 2
      this.image.height = this.$refs.image.naturalHeight + this.padding * 2
      this.proportion = this.image.width / this.image.height
      this.container.width = this.$refs.container.clientWidth
      this.container.height = Math.round(this.container.width / this.proportion)
    },

    updateCursorPosition: function (e) {
      let xPos, yPos
      if (this.touch) {
        xPos = Math.abs(e.touches[0].clientX - this.$refs.container.getBoundingClientRect().left)
        yPos = Math.abs(e.touches[0].clientY - this.$refs.container.getBoundingClientRect().top)
      } else {
        xPos = Math.abs(window.pageXOffset - e.pageX)
            - this.$refs.container.getBoundingClientRect().left
        yPos = Math.abs(window.pageYOffset - e.pageY)
            - this.$refs.container.getBoundingClientRect().top
      }
      this.cursor.x = (xPos > 0) ? xPos : 0
      this.cursor.y = (yPos > 0) ? yPos : 0
    },

    onZoom: function(e) {
      if (this.zoomable) {
        this.active = true
        this.updateCursorPosition(e)
      }
    },

    stopZoom: function() {
      if (this.zoomable) {
        this.active = false
      }
    },

    onTap: function (e) {
      if (!this.locked && this.touch) {
        this.active = !this.active
        this.updateCursorPosition(e)
        this.$nextTick(_ => {
          this.$refs.container.scrollLeft = this.leftScroll
          this.$refs.container.scrollTop = this.topScroll
        })
      }
    },

  },

}
</script>
