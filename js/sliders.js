!function(e){var t={};function i(n){if(t[n])return t[n].exports;var l=t[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,i),l.l=!0,l.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)i.d(n,l,function(t){return e[t]}.bind(null,l));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=191)}({191:function(e,t){function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}var r=function(){function e(t){i(this,e),this.nodeElement=t,this.timeout=+this.nodeElement.dataset.timeout||5e3,this.pagination=t.querySelector(".article-slider__pagination"),this.slidesCount=t.querySelectorAll(".swiper-slide").length,this.startTime=null,this.elapsedTime=null,this.timeFraction=null,this.activeSlideElement=null,this.activeSlideElementProgress=null,this.init()}return l(e,[{key:"initSwiper",value:function(){this.swiper=new Swiper(this.nodeElement,{effect:"fade",loop:!0,speed:1e3,autoplay:!1,on:{init:this.onSlideChange.bind(this),slideChange:this.onSlideChange.bind(this)},fadeEffect:{crossFade:!0}}),this.updateActiveSlideElement()}},{key:"prepareHtmlPaginationForSlide",value:function(e,t){var i=this;if(!e.querySelector(".article-slider__pagination")){var n=document.createElement("div");n.classList.add("article-slider__pagination");for(var l=function(e){var l=document.createElement("div");if(l.classList.add("article-slider__bullet"),e===t){var r=document.createElement("div");r.classList.add("article-slider__progress"),l.appendChild(r)}n.appendChild(l),function(e){l.addEventListener("click",(function(t){t.preventDefault(),i.swiper.realIndex!==e&&(i.swiper.realIndex===i.slidesCount-1&&0===e?i.swiper.slideNext():0===i.swiper.realIndex&&e===i.slidesCount-1?i.swiper.slidePrev():i.swiper.slideTo(e+1))}))}(e)},r=0;r<this.slidesCount;r++)l(r);e.querySelector(".article-slider__pagination-wrapper").appendChild(n)}}},{key:"updateActiveSlideElement",value:function(){this.swiper&&(this.activeSlideElement=this.swiper.slides[this.swiper.activeIndex],this.prepareHtmlPaginationForSlide(this.activeSlideElement,this.swiper.realIndex),this.activeSlideElement?this.activeSlideElementProgress=this.activeSlideElement.querySelector(".article-slider__progress"):this.activeSlideElementProgress=null)}},{key:"init",value:function(){this.initSwiper()}},{key:"toNextSlide",value:function(){this.swiper.slideNext()}},{key:"timing",value:function(e){return e}},{key:"animate",value:function(e){var t=(e-this.startTime+this.elapsedTime)/this.timeout;t>1&&(t=1);var i=this.timing(t);this.drawProgress(i),t<1?this.animationId=raf(this.animate.bind(this)):this.toNextSlide()}},{key:"drawProgress",value:function(e){this.activeSlideElementProgress&&(this.activeSlideElementProgress.style.transform="scaleX(".concat(e,")"))}},{key:"startProgress",value:function(){this.activeSlideElement=this.swiper?this.swiper.slides[this.swiper.activeIndex]:null,this.startTime=performance.now(),this.elapsedTime=0,this.animationId=raf(this.animate.bind(this))}},{key:"resetProgress",value:function(){this.startTime=null,this.elapsedTime=null,this.timeFraction=null,this.drawProgress(0)}},{key:"onSlideChange",value:function(){this.updateActiveSlideElement(),this.resetProgress(),this.startProgress()}}]),e}(),s=function(){function e(t){i(this,e),this.nodeElement=t,this.events()}return l(e,[{key:"events",value:function(){this.initSwiper()}},{key:"initSwiper",value:function(){this.swiper=new Swiper(this.nodeElement,{el:this.nodeElement.querySelector('[data-slider="slider"]'),effect:"fade",loop:!0,slidesPerView:1,autoplay:{delay:1e4,disableOnInteraction:!1},fadeEffect:{crossFade:!0},autoHeight:!0,pagination:{el:this.nodeElement.querySelector('[data-slider="pagination"]'),type:"bullets",clickable:!0,dynamicBullets:!1,bulletActiveClass:"active"}})}}],[{key:"init",value:function(t){new e(t)}}]),e}(),a=function(){function e(t){i(this,e),this.nodeElement=t,this.events()}return l(e,[{key:"events",value:function(){this.initSwiper()}},{key:"initSwiper",value:function(){this.swiper=new Swiper(this.nodeElement,{el:this.nodeElement.querySelector('[data-slider="slider"]'),slidesPerView:1,spaceBetween:43,pagination:{el:this.nodeElement.querySelector('[data-slider="pagination"]'),type:"bullets",clickable:!0,dynamicBullets:!1,bulletActiveClass:"active"}})}}],[{key:"init",value:function(t){new e(t)}}]),e}(),o=function(){function e(t){i(this,e),this.nodeElement=t,this.events()}return l(e,[{key:"events",value:function(){this.initSwiper()}},{key:"initSwiper",value:function(){this.swiper=new Swiper(this.nodeElement,{el:this.nodeElement.querySelector('[data-slider="slider"]'),effect:"fade",loop:!0,slidesPerView:1,autoplay:{delay:8e3,disableOnInteraction:!1},fadeEffect:{crossFade:!0},navigation:{prevEl:'[data-slider="prev"]',nextEl:'[data-slider="next"]'}})}}],[{key:"init",value:function(t){new e(t)}}]),e}(),u=function(){function e(){i(this,e)}return l(e,null,[{key:"init",value:function(){document.querySelectorAll(".js-slider-article").forEach((function(e){new r(e)})),document.querySelectorAll(".js-slider-fade").forEach((function(e){s.init(e)})),document.querySelectorAll(".js-slider-default").forEach((function(e){a.init(e)})),document.querySelectorAll(".js-slider-quotes").forEach((function(e){o.init(e)}))}}]),e}();document.addEventListener("DOMContentLoaded",(function(){u.init()}))}});