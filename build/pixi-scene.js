!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(4)},function(e,t){e.exports=PIXI},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function h(e,t,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var r=Object.getPrototypeOf(e);return null===r?void 0:h(r,t,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),f=i(c),l=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this));return n.name=e,n.manager=null,n.initialized=!1,n.tweenManager=new f["default"].tween.TweenManager,n.timerManager=new f["default"].timer.TimerManager,n}return a(t,e),u(t,[{key:"init",value:function(){}},{key:"update",value:function(e){this.tweenManager.update(e),this.timerManager.update(e),s(Object.getPrototypeOf(t.prototype),"update",this).call(this,e)}},{key:"_initialize",value:function(){this.initialized||(this.initialized=!0,this.init())}}]),t}(f["default"].Container);t["default"]=l},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),s=function p(e,t,n){null===e&&(e=Function.prototype);var i=Object.getOwnPropertyDescriptor(e,t);if(void 0===i){var r=Object.getPrototypeOf(e);return null===r?void 0:p(r,t,n)}if("value"in i)return i.value;var o=i.get;if(void 0!==o)return o.call(n)};Object.defineProperty(t,"__esModule",{value:!0});var c=n(1),f=i(c),l=n(2),h=i(l),d=function(e){function t(e){r(this,t);var n=o(this,Object.getPrototypeOf(t).call(this));return n._scene=null,n.renderer=e,n.scenes=[],n._fixedWidth=0,n._fixedHeight=0,n._last=0,n.scene=new h["default"]("initial"),n}return a(t,e),u(t,[{key:"update",value:function(e){e||0===e||(e=this._getDeltaMS()/1e3),s(Object.getPrototypeOf(t.prototype),"update",this).call(this,e)}},{key:"addScene",value:function(e){return-1!==this.scenes.indexOf(e)?this:(e.manager=this,this.scenes.push(e),this)}},{key:"getSceneByName",value:function(e){for(var t=void 0,n=0;n<this.scenes.length;n++)if(this.scenes[n].name===e){t=this.scenes[n];break}return t}},{key:"goTo",value:function(e){return this.scene=this.getSceneByName(e),this}},{key:"createScene",value:function(e){var t=new h["default"](e);return this.addScene(t),t}},{key:"resizeScenes",value:function(){if(this.fixedWidth||this.fixedHeight)for(var e=Math.min(this.renderer.width/this.fixedWidth,this.renderer.height/this.fixedHeight),t=0;t<this.scenes.length;t++)this._resizeScene(this.scenes[t],e)}},{key:"_resizeScene",value:function(e,t){e.scale.set(t)}},{key:"_getDeltaMS",value:function(){0===this._last&&(this._last=Date.now());var e=Date.now(),t=e-this._last;return this._last=e,t}},{key:"scene",get:function(){return this._scene},set:function(e){this._scene!==e&&(this._scene=e,this._scene.manager=this,this._scene.position.set(this.renderer.width/2,this.renderer.height/2),this.addScene(this._scene),this.scene._initialize(),this.resizeScenes(),this.children.length=0,this.addChildAt(this._scene,0))}},{key:"fixedHeight",get:function(){return this._fixedHeight},set:function(e){e!==this._fixedHeight&&(this._fixedHeight=e,this.resizeScenes())}},{key:"fixedWidth",get:function(){return this._fixedWidth},set:function(e){e!==this._fixedWidth&&(this._fixedWidth=e,this.resizeScenes())}}]),t}(f["default"].Container);t["default"]=d},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=i(r),a=n(3),u=i(a),s=n(2),c=i(s);o["default"].tween&&o["default"].tween.TweenManager&&o["default"].timer&&o["default"].timer.TimerManager||console.error("Warning: pixi-scene needs 'pixi-tween'(https://github.com/Nazariglez/pixi-tween) and 'pixi-timer'(https://github.com/Nazariglez/pixi-timer) to work! Install them before use this plugin."),o["default"].SceneManager||(o["default"].Container.prototype.update=function(e){for(var t=this.children.length,n=0;t>n;n++)this.children[n].update(e)},o["default"].SceneManager=u["default"],o["default"].Scene=c["default"]),t["default"]={SceneManager:u["default"],Scene:c["default"]}}]);
//# sourceMappingURL=pixi-scene.js.map