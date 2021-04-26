<script>
import {TweenMax, TimelineLite} from 'gsap'
export default {

  props: ['write'],

  data () {
    return {
      // browser: 0,
      timeline: null,
      topOffset: 0,
      settings: {
        topOffsetForToggleAnimation: 300
      },
      cursor: {
        x: 0,
        y: 0
      },
      selectors: {
        gsap: {
          svgLogo: '#header-logo-svg',
          leftHand: '#left-hand',
          rightHand: '#right-hand',
          manBody: '#man-full',
          head: '#head',
          eyePupil: '#eye-pupil',
          textAdminoid: '#stripped-logo-text',
          textsWebmaster: '#web-Master',
          textsWebmasterLetter: '.wm-tl',
          textWeb: 'tspan#web',
          textMaster: 'tspan#master',
          textsWebmasterWrapper: '#Rectangle-21',
          topMenu: '#top-menu',
          topMenuItem: '.item',
          // flicker
          rectangleCenterColor: '#Rectangle-Green',
          rectanglesBorderColor: '.Rectangle-Red'
        },
        eye: '#eye-pupil'
      },
      reduced: false,
      $eye: {},
      eyeTransformWithAngle: 'translate(13.000000, 36.000000) rotate(40.000000) translate(-13.000000, -36.000000) translate(8.000000, 31.000000)',
      touch: false,
    }
  },

  mounted () {
    this.touch = window.navigator.userAgent.indexOf('Mobile') !== -1
    this.checkTopOffset();
    // this.initFlicker();
    this.timeline = this.compileTimeline();
    this.$eye = $(this.$el).find(this.selectors.eye);

    // this.browser = this.detectBrowser();
  },

  created: function () {
    // todo: addEventListener for touch
    window.addEventListener('scroll', this.checkTopOffset)
    window.addEventListener('mousemove', this.eyeMove)
    window.addEventListener('touchstart', this.eyeMove)
    window.addEventListener('touchmove', this.eyeMove)
  },

  beforeDestroy: function () {
    window.removeEventListener('scroll', this.checkTopOffset)
    window.removeEventListener('mousemove', this.eyeMove)
    window.removeEventListener('touchstart', this.eyeMove)
    window.removeEventListener('touchmove', this.eyeMove)
  },

  watch: {
    topOffset: function (val, oldVal) {
      if (oldVal < this.settings.topOffsetForToggleAnimation && val >= this.settings.topOffsetForToggleAnimation) {
        this.runLogoAnimation()
      } else if (oldVal >= this.settings.topOffsetForToggleAnimation && val < this.settings.topOffsetForToggleAnimation) {
        this.runLogoAnimation('backward')
      }
    }
  },

  methods: {
    toWrite: function () {
      this.$parent.$emit('go-write',true);
    },

    // todo: init below method onTouch
    eyeMove: function (e) {
      if (!this.reduced) return false

      if (this.touch) {
        if (e.type !== 'mousemove') {
          this.cursor.x = e.changedTouches[0].clientX + this.getScrollOffset().left
          this.cursor.y = e.changedTouches[0].clientY + this.getScrollOffset().top
        }
      } else {
        this.cursor.x = e.pageX
        this.cursor.y = e.pageY
      }

      this.setAngle()

    },

    setAngle() {
      let eyeCenter = [this.$eye[0].getBoundingClientRect().left + this.getScrollOffset().left + this.$eye.width() / 2, this.$eye[0].getBoundingClientRect().top + this.getScrollOffset().top + this.$eye.height() / 2]
      let eyeAngle = Math.atan2(this.cursor.x - eyeCenter[0], -(this.cursor.y - eyeCenter[1])) * (180 / Math.PI) - 90
      this.eyeTransformWithAngle = 'translate(13.000000, 36.000000) rotate(' + eyeAngle + ') translate(-13.000000, -36.000000) translate(8.000000, 31.000000)';
    },

    getScrollOffset () {
      const doc = document.documentElement;
      return {
        left: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
        top: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0),
      };
    },

    toggleSidebar: function () {
      $('#top-menu-sidebar')
          .sidebar({
            transition: 'overlay'
          })
          .sidebar('toggle')
    },

    initFlicker: function () {
      const step = 1;
      TweenMax.to(this.selectors.gsap.rectangleCenterColor, step, {
        fill: '#CD2E41',
        repeat: -1,
        yoyo: true,
        repeatDelay: step * 3
      });
      TweenMax.to(this.selectors.gsap.rectanglesBorderColor, step, {
        fill: '#1D60B5',
        repeat: -1,
        yoyo: true,
        repeatDelay: step * 3,
        delay: step * 3
      });
      TweenMax.fromTo(this.selectors.gsap.textWeb, step * 2,
          {
            fill: '#FFFFFF'
          },
          {
            fill: '#FF981C',
            repeat: -1,
            repeatDelay: step * 2,
            yoyo: true
          });
      TweenMax.fromTo(this.selectors.gsap.textMaster, step * 2,
          {
            fill: '#FF981C'
          },
          {
            fill: '#FFFFFF',
            repeat: -1,
            repeatDelay: step * 2,
            yoyo: true
          });
    },

    runLogoAnimation: function (direction = 'forward') {
      if (direction === 'forward') {
        this.reduced = true;
        this.timeline.pause().play();
      } else if (direction === 'backward') {
        this.reduced = false;
        this.timeline.pause().reverse();
      }
    },

    checkTopOffset: function () {
      this.topOffset = window.pageYOffset
    },

    compileTimeline: function () {
      let part1time = 0.2,
          part2time = 0.5,
          $logo = $(this.selectors.gsap.svgLogo),
          $leftHand = $logo.find(this.selectors.gsap.leftHand),
          $rightHand = $logo.find(this.selectors.gsap.rightHand),
          $manBody = $logo.find(this.selectors.gsap.manBody),
          $head = $logo.find(this.selectors.gsap.head),
          $eyePupil = $logo.find(this.selectors.gsap.eyePupil),
          $textAdminoid = $logo.find(this.selectors.gsap.textAdminoid),
          lettersWebmaster = Array.prototype.slice.call(
              $logo.find(this.selectors.gsap.textsWebmaster).find(this.selectors.gsap.textsWebmasterLetter)
          ),
          textsWebmasterWrapper = $logo.find(this.selectors.gsap.textsWebmasterWrapper),
          $topMenu = $(document).find(this.selectors.gsap.topMenu),
          topMenuItemsForResizing = Array.prototype.slice.call($topMenu.find(this.selectors.gsap.topMenuItem));

      topMenuItemsForResizing.push($topMenu);

      let tlLeftHand = new TimelineLite();

      // Hands (waving)
      tlLeftHand.add(TweenMax.fromTo($leftHand, 0.08, {
        rotation: 0
      }, {
        rotation: 35,
        transformOrigin: '90% 100%'
      }))
          .add(TweenMax.to($leftHand, 0.08, {rotation: -50, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.08, {rotation: 35, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.08, {rotation: -50, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.08, {rotation: 35, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.08, {rotation: -50, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.10, {rotation: 35, transformOrigin: '90% 100%'}))
          .add(TweenMax.to($leftHand, 0.15, {rotation: -75, transformOrigin: '90% 100%'}));

      let tlRightHand = new TimelineLite();
      tlRightHand.add(TweenMax.fromTo($rightHand, 0.08, {
        rotation: 0
      }, {
        rotation: -35,
        transformOrigin: '10% 100%'
      }));
      tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.10, {rotation: -35, transformOrigin: '10% 100%'}));
      tlRightHand.add(TweenMax.to($rightHand, 0.15, {rotation: 75, transformOrigin: '10% 100%'}));
      let tlHands = new TimelineLite();
      tlHands.add(tlLeftHand, 0);
      tlHands.add(tlRightHand, 0);

      // Body, part 1
      let tlBody = new TimelineLite();
      tlBody.add(TweenMax.to($manBody, 0.2,
          {y: 0, x: 0, rotation: 0},
          {y: -10, x: 20, rotation: 35, transformOrigin: '50% 50%'}
      ))
          // Body, part 2
          .add(TweenMax.to($manBody, 0.5,
              {y: -5, x: 180, rotation: 90, transformOrigin: '50% 50%'}
          ));

      // Head
      let tlHead = new TimelineLite();
      tlHead.fromTo($head, 0.3,
          {autoAlpha: 1},
          {autoAlpha: 0}
      );

      // SVG img size (begin from part1time)
      let tlLogoSize = new TimelineLite();
      tlLogoSize.add(TweenMax.to($logo, part1time,
          {attr: {viewBox: '0 0 219 42'}, width: 219, height: 42}
      ), part1time);

      // Eye-pupil
      let tlEyePupil = new TimelineLite();
      tlEyePupil.add(TweenMax.to($eyePupil, part1time,
          {autoAlpha: 1}
      ), part1time);

      // Text adminoid
      let tlTextAdminoid = new TimelineLite();
      tlTextAdminoid.add(TweenMax.fromTo($textAdminoid, part1time + part2time,
          {x: 0, y: 24},
          {x: -50, y: 7}
      ));

      // Text webmaster textsWebmaster
      let tlTextWebmaster = new TimelineLite();
      tlTextWebmaster.add(
          TweenMax.staggerFromTo(lettersWebmaster.reverse(), (0.1),
              {autoAlpha: 1, rotateX: 0},
              {autoAlpha: 0, rotateX: 10},
              0.05
          )
      );

      // Webmaster Wrapper
      let tlTextWebmasterWrapper = new TimelineLite();
      tlTextWebmasterWrapper.add(TweenMax.fromTo(textsWebmasterWrapper, 0.5,
          {autoAlpha: 1},
          {autoAlpha: 0}
      ), 0.2);

      // TopMenu height reduction/increase
      let tlTopMenu = new TimelineLite();
      tlTopMenu.add(TweenMax.staggerFromTo(topMenuItemsForResizing, part1time,
          {height: '4.66667rem', opacity: 1},
          {height: '3.66667rem', opacity: 0.93},
          0
      ), part1time);

      // Conclusion
      let timeline = new TimelineLite({paused: true});
      timeline.pause();
      timeline.add(tlHands, 0);
      timeline.add(tlBody, 0);
      timeline.add(tlHead, 0);
      timeline.add(tlLogoSize, 0);
      timeline.add(tlEyePupil, 0);
      timeline.add(tlTextAdminoid, 0);
      timeline.add(tlTextWebmaster, 0);
      timeline.add(tlTextWebmasterWrapper, 0);
      timeline.add(tlTopMenu, 0);
      return timeline;
    }
  }
}
</script>
