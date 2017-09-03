<script>
  import $ from 'jquery'
  export default {
    props: {
      image: {
        type: String,
        default: '.zoom'
      }
    },
    data: function () {
      return {
        initialData: {
          wrapperWidth: 0,
          wrapperHeight: 0,
          imageWidth: 0,
          imageHeight: 0,
          widthProportion: 1,
          heightProportion: 1,
          startLeft: this.startLeft,
          startTop: this.startTop
        },
        selectors: {
          image: this.image
        },
        cursor: {
          x: 0,
          y: 0
        },
        $wrapper: {},
        $image: {},
        border: 100
      }
    },
    created: function () {
//      this.calculateSizesAndProportions()
      window.addEventListener('resize', this.calculateSizesAndProportions)
    },
    mounted: function () {
      this.makeStartUpData()
      this.calculateSizesAndProportions()
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.calculateSizesAndProportions)
    },
    methods: {
      makeStartUpData: function () {
        this.$wrapper = $(this.$el)
        this.$image = this.$wrapper.find(this.selectors.image)
      },
      calculateSizesAndProportions: function () {
        this.initialData.wrapperWidth = this.$wrapper.width()
        this.initialData.wrapperHeight = this.$wrapper.height()
        this.initialData.imageWidth = this.$image[0].naturalWidth + this.border * 2
        this.initialData.imageHeight = this.$image[0].naturalHeight + this.border * 2
        this.initialData.widthProportion = this.initialData.imageWidth / this.initialData.wrapperWidth
        this.initialData.heightProportion = this.initialData.imageHeight / this.initialData.wrapperHeight
      },
      startZoom: function (e) {
        this.$image.css('position', 'absolute')
        this.$image.removeClass('ui fluid image')
      },
      onZoom: function (e) {
        this.calculateCursorPosition(e)
      },
      stopZoom: function () {
        // restore to original
        this.$image.css('position', 'static')
        this.$image.addClass('ui fluid image')
      },
      calculateCursorPosition: function (e) {
        let xPos = e.pageX - this.$wrapper.offset().left
        let yPos = e.pageY - this.$wrapper.offset().top
        this.cursor.x = parseInt(xPos, 10)
        this.cursor.y = parseInt(yPos, 10)
      }
    },
    computed: {
      left: function () {
        if (this.cursor.x) {
          return -(
              this.cursor.x * this.initialData.widthProportion - this.cursor.x - this.border
          )
        }
      },
      top: function () {
        if (this.cursor.y) {
          return -(
              this.cursor.y * this.initialData.heightProportion - this.cursor.y - this.border
          )
        }
      }
    }
  }
</script>
<template>
  <div class="content window fix" id="ikmed-prices"
       @mouseenter="startZoom" @touchstart="startZoom"
       @mousemove="onZoom" @touchmove="onZoom"
       @mouseleave="stopZoom" @touchend="stopZoom">
    <img class="chrome zoom"
         src="/static/img/adminoid/pages/portfolio/presentations/ikmed-prices/chrome.jpg"
         alt=""
         :style="{ left: left + 'px', top: top + 'px' }">
    <img class="ikmed-logo" src="/static/img/adminoid/pages/portfolio/presentations/ikmed-logo-big.png"
         alt="">
  </div>
</template>
<style></style>