webpackJsonp([5],{"006r":function(t,o,u){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=u("R5/K");o.default={data:function(){return{clouds:{minCloud:"#path-clouds-1",midCloud:"#path-clouds-3",maxCloud:"#path-clouds-5"},texts:{siteNeed:"#site-need",veryBeautiful:"#very-beautiful"}}},mounted:function(){this.init()},methods:{init:function(){l.TweenLite.set(this.texts.veryBeautiful,{visibility:"hidden"}),new l.TimelineMax({repeat:-1}).to(this.texts.siteNeed,.3,{autoAlpha:0},"+=2").to(this.clouds.maxCloud,.1,{autoAlpha:0}).to(this.clouds.midCloud,.1,{autoAlpha:0}).to(this.clouds.minCloud,.1,{autoAlpha:0}).to(this.clouds.minCloud,.2,{autoAlpha:1}).to(this.clouds.midCloud,.2,{autoAlpha:1}).to(this.clouds.maxCloud,.2,{autoAlpha:1}).to(this.texts.veryBeautiful,.3,{autoAlpha:1}).to(this.texts.veryBeautiful,.3,{autoAlpha:0},"+=2").to(this.clouds.maxCloud,.1,{autoAlpha:0}).to(this.clouds.midCloud,.1,{autoAlpha:0}).to(this.clouds.minCloud,.1,{autoAlpha:0}).to(this.clouds.minCloud,.2,{autoAlpha:1}).to(this.clouds.midCloud,.2,{autoAlpha:1}).to(this.clouds.maxCloud,.2,{autoAlpha:1})}}}},"8SnC":function(t,o,u){var l=u("VU/8")(u("006r"),null,!1,null,null,null);t.exports=l.exports}});
//# sourceMappingURL=5.69cc06db9358e8922be5.js.map