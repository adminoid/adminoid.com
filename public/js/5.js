webpackJsonp([5],{"2tQ8":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("R5/K");t.default={data:function(){return{timeline:{},animation:{leftValue:0,minuteValue:0,hourValue:0},touched:!1,touch:!1}},watch:{touched:function(e){e?this.timeline.pause().play():this.timeline.pause().reverse()}},mounted:function(){this.touch=-1!==window.navigator.userAgent.indexOf("Mobile"),this.compileTimeline()},methods:{compileTimeline:function(){var e=new n.TimelineLite({paused:!0});e.add(n.TweenLite.fromTo(this.animation,.5,{leftValue:0,minuteValue:0,hourValue:0},{leftValue:251,minuteValue:360,hourValue:30}),0),e.add(n.TweenLite.fromTo("g#work-text",.1,{fill:"rgb(18, 84, 176)"},{fill:"rgb(255, 255, 255)"}),.1),this.timeline=e},onHover:function(){this.touch||this.timeline.pause().play()},onLeave:function(){this.touch||this.timeline.pause().reverse()},onTouchStart:function(){this.touched=!this.touched}},computed:{pieDashArray:function(){return(this.animation.leftValue?this.animation.leftValue:0)+" 251"},minuteTransform:function(){return"rotate("+(this.animation.minuteValue?this.animation.minuteValue:0)+", 6, 78)"},hourTransform:function(){return"translate(-15,3) rotate("+(this.animation.hourValue?this.animation.hourValue:0)+", 21, 75)"}}}},QmOZ:function(e,t,i){var n=i("VU/8")(i("2tQ8"),null,!1,null,null,null);e.exports=n.exports}});
//# sourceMappingURL=5.js.map