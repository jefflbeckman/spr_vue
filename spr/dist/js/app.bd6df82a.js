(function(e){function t(t){for(var r,l,i=t[0],s=t[1],u=t[2],p=0,f=[];p<i.length;p++)l=i[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);c&&c(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},1:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("spr",{attrs:{msg:"R.I.P. Napster",stream_name:"test"}}),n("chat"),n("logo")],1)},o=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"spr"},[n("div",{staticClass:"player"},[n("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(t){return e.onPlayerPlay(t)},pause:function(t){return e.onPlayerPause(t)},ended:function(t){return e.onPlayerEnded(t)},waiting:function(t){return e.onPlayerWaiting(t)},playing:function(t){return e.onPlayerPlaying(t)},loadeddata:function(t){return e.onPlayerLoadeddata(t)},timeupdate:function(t){return e.onPlayerTimeupdate(t)},canplay:function(t){return e.onPlayerCanplay(t)},canplaythrough:function(t){return e.onPlayerCanplaythrough(t)},statechanged:function(t){return e.playerStateChanged(t)},ready:e.playerReadied}})],1),n("div",{staticClass:"message"},[n("h1",[e._v(e._s(e.msg))])])])},i=[],s={name:"spr",props:{msg:String},data:function(){return{playerOptions:{muted:!0,language:"en",playbackRates:[.7,1,1.5,2],sources:[{type:"application/x-mpegURL",src:"http://159.65.106.88:8080/hls/spr.m3u8"},{type:"application/x-mpegURL",src:"http://159.65.106.88:8080/hls/zohan.m3u8"}],poster:"./assets/stoned_pirates_radio.jpg"}}},mounted:function(){console.log("this is current player instance object",this.player)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(e){console.log("player play!",e)},onPlayerPause:function(e){console.log("player pause!",e)},playerStateChanged:function(e){console.log("player current update state",e)},playerReadied:function(e){console.log("the player is readied",e)}}},u=s,c=(n("9ea8"),n("2877")),p=Object(c["a"])(u,l,i,!1,null,"fb628bda",null),f=p.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chat"},[n("iframe",{attrs:{src:"https://titanembeds.com/embed/721432861881663498",height:"600",width:"800",frameborder:"0"}})])}],h={name:"chat"},m=h,g=Object(c["a"])(m,d,y,!1,null,null,null),v=g.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},P=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"logo"},[r("img",{attrs:{alt:"Stoned Pirates Radio",src:n("9cf9")}})])}],_={name:"logo"},O=_,j=Object(c["a"])(O,b,P,!1,null,null,null),x=j.exports,w={name:"App",components:{spr:f,logo:x,chat:v}},C=w,S=(n("034f"),Object(c["a"])(C,a,o,!1,null,null,null)),E=S.exports,$=n("1293"),R=n.n($);n("fda2");r["a"].config.productionTip=!1,r["a"].use(R.a),new r["a"]({render:function(e){return e(E)}}).$mount("#app")},"85ec":function(e,t,n){},"9cf9":function(e,t,n){e.exports=n.p+"img/stoned_pirates_radio.4aa06993.jpg"},"9ea8":function(e,t,n){"use strict";var r=n("d491"),a=n.n(r);a.a},d491:function(e,t,n){}});
//# sourceMappingURL=app.bd6df82a.js.map