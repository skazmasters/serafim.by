!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=190)}({190:function(e,t){function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}var r=function(){function e(t){n(this,e),this.eventHandlers={},this.nodeElement=t,this.id=t.dataset.popupId,this.init()}return i(e,[{key:"on",value:function(e,t){e in this.eventHandlers||(this.eventHandlers[e]=[]);for(var n=0;n<this.eventHandlers[e];n++)if(this.eventHandlers[e][n]===t)return;this.eventHandlers[e].push(t)}},{key:"trigger",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e in this.eventHandlers&&this.eventHandlers[e].forEach((function(e){return e(t)}))}},{key:"getId",value:function(){return this.id}},{key:"onCloseClick",value:function(e){e.preventDefault(),this.close()}},{key:"init",value:function(){var e=this;this.nodeElement.querySelectorAll(".js-popup-close").forEach((function(t){return t.addEventListener("click",e.onCloseClick.bind(e))}))}},{key:"close",value:function(){var e=this;this.nodeElement.classList.remove("opened"),setTimeout((function(){e.trigger("closed")}),0)}},{key:"open",value:function(){this.nodeElement.classList.add("opened")}}]),e}(),u=new(function(){function e(){n(this,e),this.popups={},this.visiblePopup=null}return i(e,[{key:"add",value:function(e){var t=this,n=new r(e);this.popups[n.getId()]=n,document.querySelectorAll(".js-popup-open[data-popup]").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault(),t.open(e.target.dataset.popup)}))}))}},{key:"open",value:function(e){var t=this;if(!(e in this.popups))throw new Error("popup not found");this.createOverlay();var n=this.popups[e];n.open(),this.visiblePopup=n,n.on("closed",(function(){return t.hideOverlay()}))}},{key:"createOverlay",value:function(){var e=this;this.overlay?this.overlay.classList.remove("not-visible"):(this.overlay=document.createElement("div"),this.overlay.classList.add("popup-overlay"),document.body.appendChild(this.overlay),isMobileLayout()||hideScrollbar(),this.overlay.addEventListener("click",(function(){e.visiblePopup&&e.visiblePopup.close()})))}},{key:"hideOverlay",value:function(){if(this.overlay){var e=this.overlay;this.overlay.classList.add("not-visible"),this.overlay.addEventListener("transitionend",(function(){e.remove()})),isMobileLayout()||showScrollbar(),this.overlay=null}}},{key:"init",value:function(){document.querySelectorAll(".js-popup").forEach((function(e){return u.add(e)}))}}]),e}());u.init(),window.PopupManager=u}});