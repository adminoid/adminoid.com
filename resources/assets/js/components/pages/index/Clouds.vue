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
<template>
  <svg id="clouds" width="189px" height="158px" viewBox="0 0 189 158" version="1.1"
       xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title>static/img/adminoid/pages/main/clouds</title>
    <defs>
      <ellipse id="path-clouds-1" cx="13" cy="148" rx="13" ry="10"></ellipse>
      <mask id="mask-clouds-2" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
            x="0" y="0"
            width="26" height="20" fill="white">
        <use xlink:href="#path-clouds-1"></use>
      </mask>
      <ellipse id="path-clouds-3" cx="42" cy="125" rx="33" ry="25"></ellipse>
      <mask id="mask-clouds-4" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
            x="0" y="0"
            width="66" height="50" fill="white">
        <use xlink:href="#path-clouds-3"></use>
      </mask>
      <ellipse id="path-clouds-5" cx="106.389262" cy="62" rx="82.3892617" ry="62"></ellipse>
      <mask id="mask-clouds-6" maskContentUnits="userSpaceOnUse" maskUnits="objectBoundingBox"
            x="0" y="0"
            width="164.778523" height="124" fill="white">
        <use xlink:href="#path-clouds-5"></use>
      </mask>
    </defs>
    <g id="Главная-clouds" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g id="Large-Monitor---Главная-clouds" transform="translate(-276.000000, -122.000000)">
        <g id="adminoid/contents/main-page-content" transform="translate(94.000000, 96.000000)">
          <g id="intro-clouds" transform="translate(3.000000, 0.000000)">
            <g id="static/img/adminoid/pages/main/clouds"
               transform="translate(179.000000, 26.000000)">
              <use id="Oval-1" stroke="#1254B0" mask="url(#mask-clouds-2)"
                   stroke-width="4" fill="#FFFFFF"
                   stroke-dasharray="4" xlink:href="#path-clouds-1"></use>
              <use id="Oval-2" stroke="#1254B0" mask="url(#mask-clouds-4)"
                   stroke-width="4" fill="#FFFFFF"
                   stroke-dasharray="4" xlink:href="#path-clouds-3"></use>
              <use id="Oval-3" stroke="#CD2E41" mask="url(#mask-clouds-6)"
                   stroke-width="4" fill="#FFFFFF"
                   stroke-dasharray="4" xlink:href="#path-clouds-5"></use>
              <text id="site-need" font-family="RobotoMono-Regular, Roboto Mono"
                    font-size="24"
                    font-weight="normal" fill="#000000">
                <tspan x="34" y="70">Сайт надо?</tspan>
              </text>
              <text id="very-beautiful" style="visibility: hidden; opacity: 0;"
                    font-family="RobotoMono-Regular, Roboto Mono"
                    font-size="24" font-weight="normal" fill="#000000">
                <tspan x="69.9941406" y="56">Очень</tspan>
                <tspan x="48.390625" y="84">красивый</tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
</template>