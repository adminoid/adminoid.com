<script>
    import {TweenMax, TimelineLite} from 'gsap'
    export default {
        data () {
            return {
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
                eyeTransformWithAngle: 'translate(13.000000, 36.000000) rotate(40.000000) translate(-13.000000, -36.000000) translate(8.000000, 31.000000)'
            }
        },
        mounted () {
            this.checkTopOffset()
            this.initFlicker()
            this.timeline = this.compileTimeline()
//      this.timeline.reverse(0)
            this.$eye = $(this.$el).find(this.selectors.eye)
        },
        created: function () {
            window.addEventListener('scroll', this.checkTopOffset)
            window.addEventListener('mousemove', this.eyeMove)
        },
        beforeDestroy: function () {
            window.removeEventListener('scroll', this.checkTopOffset)
            window.removeEventListener('mousemove', this.eyeMove)
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
            write: function () {
                let $modal = $('#super-modal')
                $modal
                        .modal('setting', 'transition', 'horizontal flip')
                        .modal('toggle')
            },
            eyeMove: function (e) {
                if (!this.reduced) return false
                this.cursor.x = e.pageX
                this.cursor.y = e.pageY

                let eyeCenter = [this.$eye.offset().left + this.$eye.width() / 2, this.$eye.offset().top + this.$eye.height() / 2]
                let eyeAngle = Math.atan2(e.pageX - eyeCenter[0], -(e.pageY - eyeCenter[1])) * (180 / Math.PI) - 90
                this.eyeTransformWithAngle = 'translate(13.000000, 36.000000) rotate(' + eyeAngle + ') translate(-13.000000, -36.000000) translate(8.000000, 31.000000)'
            },
            toggleSidebar: function () {
                $('#top-menu-sidebar')
                        .sidebar({
                            transition: 'overlay'
                        })
                        .sidebar('toggle')
            },
            initFlicker: function () {
                var step = 1
                TweenMax.to(this.selectors.gsap.rectangleCenterColor, step, {
                    fill: '#CD2E41',
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: step * 3
                })
                TweenMax.to(this.selectors.gsap.rectanglesBorderColor, step, {
                    fill: '#1D60B5',
                    repeat: -1,
                    yoyo: true,
                    repeatDelay: step * 3,
                    delay: step * 3
                })
                TweenMax.fromTo(this.selectors.gsap.textWeb, step * 2,
                        {
                            fill: '#FFFFFF'
                        },
                        {
                            fill: '#FF981C',
                            repeat: -1,
                            repeatDelay: step * 2,
                            yoyo: true
                        })
                TweenMax.fromTo(this.selectors.gsap.textMaster, step * 2,
                        {
                            fill: '#FF981C'
                        },
                        {
                            fill: '#FFFFFF',
                            repeat: -1,
                            repeatDelay: step * 2,
                            yoyo: true
                        })
            },
            runLogoAnimation: function (direction = 'forward') {
                if (direction === 'forward') {
                    this.reduced = true
                    this.timeline.pause().play()
                } else if (direction === 'backward') {
                    this.reduced = false
                    this.timeline.pause().reverse()
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

                topMenuItemsForResizing.push($topMenu)

                let tlLeftHand = new TimelineLite();
//                tlLeftHand.pause()
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
                .add(TweenMax.to($leftHand, 0.15, {rotation: -75, transformOrigin: '90% 100%'}))

                let tlRightHand = new TimelineLite()
//                tlRightHand.pause()
                tlRightHand.add(TweenMax.fromTo($rightHand, 0.08, {
                    rotation: 0
                }, {
                    rotation: -35,
                    transformOrigin: '10% 100%'
                }))
                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.10, {rotation: -35, transformOrigin: '10% 100%'}))
                tlRightHand.add(TweenMax.to($rightHand, 0.15, {rotation: 75, transformOrigin: '10% 100%'}))
                let tlHands = new TimelineLite()
//                tlHands.pause()
                tlHands.add(tlLeftHand, 0);
                tlHands.add(tlRightHand, 0);
//                return tlHands

                // Body, part 1
                let tlBody = new TimelineLite()
//                tlBody.pause()
                // let part1time = 0.2, part2time = 0.5,
//                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: 50, transformOrigin: '10% 100%'}))
//                tlRightHand.add(TweenMax.to($rightHand, 0.08, {rotation: -35, transformOrigin: '10% 100%'}))
                tlBody.add(TweenMax.to($manBody, 0.2,
                        {y: 0, x: 0, rotation: 0},
                        {y: -10, x: 20, rotation: 35, transformOrigin: '50% 50%'}
                ))
                // Body, part 2
                .add(TweenMax.to($manBody, 0.5,
                        {y: -5, x: 180, rotation: 90, transformOrigin: '50% 50%'}
                ))

//                return tlBody
                // Head
                var tlHead = new TimelineLite()
                tlHead.fromTo($head, 0.3,
                        {autoAlpha: 1},
                        {autoAlpha: 0}
                )
                // SVG img size (begin from part1time)
                let tlLogoSize = new TimelineLite()
//                tlLogoSize.pause()
                tlLogoSize.add(TweenMax.to($logo, part1time,
                        {attr: {viewBox: '0 0 219 42'}, width: 219, height: 42}
                ), part1time)
                // Eye-pupil
                var tlEyePupil = new TimelineLite()
                tlEyePupil.add(TweenMax.to($eyePupil, part1time,
//                        {autoAlpha: 0},
                        {autoAlpha: 1}
                ), part1time)
                // Text adminoid
                var tlTextAdminoid = new TimelineLite()
                tlTextAdminoid.add(TweenMax.fromTo($textAdminoid, part1time + part2time,
                        {x: 0, y: 24},
                        {x: -50, y: 7}
                ))
                // Text webmaster textsWebmaster
                var tlTextWebmaster = new TimelineLite()
                tlTextWebmaster.add(
                        TweenMax.staggerFromTo(lettersWebmaster.reverse(), (0.1),
                                {autoAlpha: 1, rotateX: 0},
                                {autoAlpha: 0, rotateX: 10},
                                0.05
                        )
                )
                // Webmaster Wrapper
                var tlTextWebmasterWrapper = new TimelineLite()
                tlTextWebmasterWrapper.add(TweenMax.fromTo(textsWebmasterWrapper, 0.5,
                        {autoAlpha: 1},
                        {autoAlpha: 0}
                ), 0.2)
                // TopMenu height reduction/increase
                var tlTopMenu = new TimelineLite()
                tlTopMenu.add(TweenMax.staggerFromTo(topMenuItemsForResizing, part1time,
                        {height: '4.66667rem', opacity: 1},
                        {height: '3.66667rem', opacity: 0.93},
                        0
                ), part1time)
                // Conclusion
                var timeline = new TimelineLite({paused: true})
                timeline.pause()
                timeline.add(tlHands, 0)
                timeline.add(tlBody, 0)
                timeline.add(tlHead, 0)
                timeline.add(tlLogoSize, 0)
                timeline.add(tlEyePupil, 0)
                timeline.add(tlTextAdminoid, 0)
                timeline.add(tlTextWebmaster, 0)
                timeline.add(tlTextWebmasterWrapper, 0)
                timeline.add(tlTopMenu, 0)
                return timeline
            }
        }
    }
</script>