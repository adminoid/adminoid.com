<template>
  <div class="video">

    <div class="video__description">
      <slot/>
    </div>

    <video ref="video" class="video__background" autoplay loop muted playsinline width="100%" height="100%" src="http://localhost:8000/static/img/adminoid/pages/cc/motion.mp4" type="video/mp4"/>

    <a class="video__button" :class="action" href="#" @click.prevent="togglePlay">
      <img :src="imgSrc" :alt="action | capitalize">
    </a>

  </div>
</template>

<script>
  export default {

    props: {
      video: {
        type: String,
      }
    },

    data() {
      return {
        play: true,
      }
    },

    computed: {
      action() {
        return (this.play) ? 'pause' : 'play';
      },

      imgSrc() {
        return "/static/img/adminoid/pages/portfolio/video/" + this.action + ".svg";
      }
    },

    methods: {
      togglePlay () {
        let video = this.$refs.video;
        if ( this.play ) {
          video.pause();
          this.play = false;
        }
        else {
          video.play();
          this.play = true;
        }
      },
    },

    filters: {
      capitalize: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }

  }
</script>

<style>

  .video {
    text-align: center;
    position: relative;
  }

  .video video{
    margin: 0 auto;
  }

  .video__description {
    text-align: left;
    margin-bottom: 20px;
  }

  .video__button {
    display: block;
    position: absolute;
    right: 50px;
    bottom: 40px;
    opacity: .8;
    text-align: center;
    width: 200px;
  }

  .video__button.play {
    padding-left: 40px;
  }

  .video__button img {
    display: inline-block;
  }

</style>
