webpackJsonp([5],{KHQK:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("+Uzz");n.n(i);t.default={data:function(){return{timeline:{},animation:{leftValue:0,minuteValue:0,hourValue:0}}},mounted:function(){this.compileTimeline()},methods:{onHover:function(){this.timeline.pause().play()},compileTimeline:function(){var e=new i.TimelineLite({paused:!0});e.add(i.TweenLite.fromTo(this.animation,.5,{leftValue:0,minuteValue:0,hourValue:0},{leftValue:251,minuteValue:360,hourValue:30}),0),e.add(i.TweenLite.fromTo("g#work-text",.1,{fill:"rgb(18, 84, 176)"},{fill:"rgb(255, 255, 255)"}),.1),this.timeline=e},onLeave:function(){this.timeline.pause().reverse(0)}},computed:{pieDashArray:function(){return(this.animation.leftValue?this.animation.leftValue:0)+" 251"},minuteTransform:function(){return"rotate("+(this.animation.minuteValue?this.animation.minuteValue:0)+", 6, 78)"},hourTransform:function(){return"translate(-15,3) rotate("+(this.animation.hourValue?this.animation.hourValue:0)+", 21, 75)"}}}},QmOZ:function(e,t,n){var i=n("VU/8")(n("KHQK"),null,null,null,null);e.exports=i.exports}});