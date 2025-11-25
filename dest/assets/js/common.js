(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets/js/common"],{

/***/ "./src/js/_utils/common.js":
/*!*********************************!*\
  !*** ./src/js/_utils/common.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(extend, $) {extend();

if (!$.ua.isTouchDevice) {
  $('.rollover').rollover();
}

if (!$.ua.isMobile) {
  $('a[href^="tel:"]').on('click', function (e) {
    e.preventDefault();
  });
}

$.scroller();
$.enableTouchOver();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./src/js/_utils/jquery.extend */ "./src/js/_utils/jquery.extend.js")["jqueryExtend"], __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/_utils/jquery.extend.js":
/*!****************************************!*\
  !*** ./src/js/_utils/jquery.extend.js ***!
  \****************************************/
/*! exports provided: jqueryExtend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqueryExtend", function() { return jqueryExtend; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ "./node_modules/core-js/modules/es.regexp.sticky.js");
/* harmony import */ var core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_sticky_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


















/**
 * jQueryオブジェクトの拡張
 *
 * @date 2021-03-18
 */
var jqueryExtend = function jqueryExtend() {
  (function ($) {
    /**
     * userAgent判定フラグ
     *
     * @date 2020-05-12
     */
    var ua = navigator.userAgent.toLowerCase();
    $.ua = {
      // Windows
      isWindows: /windows/.test(ua),
      // Mac
      isMac: /macintosh/.test(ua),
      // IE
      isIE: /msie (\d+)|trident/.test(ua),
      // IE9未満
      isLtIE9: /msie (\d+)/.test(ua) && RegExp.$1 < 9,
      // IE10未満
      isLtIE10: /msie (\d+)/.test(ua) && RegExp.$1 < 10,
      // Firefox
      isFirefox: /firefox/.test(ua),
      // WebKit
      isWebKit: /applewebkit/.test(ua),
      // Chrome
      isChrome: /chrome/.test(ua) && !/edge/.test(ua) || /crios/.test(ua),
      // Safari
      isSafari: /safari/.test(ua) && !/chrome/.test(ua) && !/crios/.test(ua) && !/android/.test(ua),
      // iOS
      isIOS: /i(phone|pod|pad)/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window,
      // iOS Chrome
      isIOSChrome: /crios/.test(ua),
      // iPhone、iPod touch
      isIPhone: /i(phone|pod)/.test(ua),
      // iPad
      isIPad: /ipad/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window,
      // Android
      isAndroid: /android/.test(ua),
      // モバイル版Android
      isAndroidMobile: /android(.+)?mobile/.test(ua),
      // タッチデバイス
      isTouchDevice: 'ontouchstart' in window,
      // スマートフォン
      isMobile: /i(phone|pod)/.test(ua) || /android(.+)?mobile/.test(ua),
      // タブレット型端末
      isTablet: /ipad/.test(ua) || /macintosh/.test(ua) && 'ontouchstart' in window || /android/.test(ua) && !/mobile/.test(ua)
    };
    /**
     * ロールオーバー
     *
     * @date 2012-10-01
     *
     * @example $('.rollover').rollover();
     * @example $('.rollover').rollover({ over: '-ov' });
     * @example $('.rollover').rollover({ current: '_cr', currentOver: '_cr_ov' });
     * @example $('.rollover').rollover({ down: '_click' });
     */

    $.fn.rollover = function (options) {
      var defaults = {
        over: '_ov',
        current: null,
        currentOver: null,
        down: null
      };
      var settings = $.extend({}, defaults, options);
      var over = settings.over;
      var current = settings.current;
      var currentOver = settings.currentOver;
      var down = settings.down;
      return this.each(function () {
        var src = this.src;
        var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
        var isCurrent = current && new RegExp(current + ext).test(src);
        if (isCurrent && !currentOver) return;
        var search = isCurrent && currentOver ? current + ext : ext;
        var replace = isCurrent && currentOver ? currentOver + ext : over + ext;
        var overSrc = src.replace(search, replace);
        new Image().src = overSrc;
        $(this).mouseout(function () {
          this.src = src;
        }).mouseover(function () {
          this.src = overSrc;
        });

        if (down) {
          var downSrc = src.replace(search, down + ext);
          new Image().src = downSrc;
          $(this).mousedown(function () {
            this.src = downSrc;
          });
        }
      });
    };
    /**
     * フェードロールオーバー
     *
     * @date 2012-11-21
     *
     * @example $('.faderollover').fadeRollover();
     * @example $('.faderollover').fadeRollover({ over: '-ov' });
     * @example $('.faderollover').fadeRollover({ current: '_cr', currentOver: '_cr_ov' });
     */


    $.fn.fadeRollover = function (options) {
      var defaults = {
        over: '_ov',
        current: null,
        currentOver: null
      };
      var settings = $.extend({}, defaults, options);
      var over = settings.over;
      var current = settings.current;
      var currentOver = settings.currentOver;
      return this.each(function () {
        var src = this.src;
        var ext = /\.(gif|jpe?g|png)(\?.*)?/.exec(src)[0];
        var isCurrent = current && new RegExp(current + ext).test(src);
        if (isCurrent && !currentOver) return;
        var search = isCurrent && currentOver ? current + ext : ext;
        var replace = isCurrent && currentOver ? currentOver + ext : over + ext;
        var overSrc = src.replace(search, replace);
        new Image().src = overSrc;
        $(this).parent().css('display', 'block').css('width', $(this).attr('width')).css('height', $(this).attr('height')).css('background', 'url("' + overSrc + '") no-repeat');
        $(this).parent().hover(function () {
          $(this).find('img').stop().animate({
            opacity: 0
          }, 200);
        }, function () {
          $(this).find('img').stop().animate({
            opacity: 1
          }, 200);
        });
      });
    };
    /**
     * スムーズスクロール
     *
     * @date 2021-03-18
     *
     * @example $.scroller();
     * @example $.scroller({ cancelByMousewheel: true });
     * @example $.scroller({ scopeSelector: '#container', noScrollSelector: '.no-scroll' });
     * @example $.scroller('#content');
     * @example $.scroller('#content', { marginTop: 200, callback: function() { console.log('callback')} });
     */


    $.scroller = function () {
      var self = $.scroller.prototype;

      if (!arguments[0] || _typeof(arguments[0]) === 'object') {
        self.init.apply(self, arguments);
      } else {
        self.scroll.apply(self, arguments);
      }
    };

    $.scroller.prototype = {
      // 初期設定
      defaults: {
        callback: function callback() {},
        cancelByMousewheel: false,
        duration: 500,
        easing: 'swing',
        hashMarkEnabled: false,
        marginTop: 0,
        noScrollSelector: '.noscroll',
        scopeSelector: 'body'
      },
      // 初期化
      init: function init(options) {
        var self = this;
        var settings = this.settings = $.extend({}, this.defaults, options);
        $(settings.scopeSelector).find('a[href^="#"]').not(settings.noScrollSelector).each(function () {
          var hash = this.hash || '#';
          var eventName = 'click.scroller';

          if (hash !== '#' && !$(hash + ', a[name="' + hash.substr(1) + '"]').eq(0).length) {
            return;
          }

          $(this).off(eventName).on(eventName, function (e) {
            e.preventDefault();
            self.scroll(hash, settings);
          });
        });
      },
      // スクロールを実行
      scroll: function scroll(id, options) {
        var self = this;
        var settings = options ? $.extend({}, this.defaults, options) : this.settings ? this.settings : this.defaults;
        if (!settings.hashMarkEnabled && id === '#') return;
        var dfd = $.Deferred();
        var win = window;
        var doc = document;
        var $doc = $(doc);
        var $page = $('html, body');
        var scrollEnd = id === '#' ? 0 : $(id + ', a[name="' + id.substr(1) + '"]').eq(0).offset().top - settings.marginTop;
        var windowHeight = $.ua.isAndroidMobile ? Math.ceil(win.innerWidth / win.outerWidth * win.outerHeight) : win.innerHeight || doc.documentElement.clientHeight;
        var scrollableEnd = $doc.height() - windowHeight;
        if (scrollableEnd < 0) scrollableEnd = 0;
        if (scrollEnd > scrollableEnd) scrollEnd = scrollableEnd;
        if (scrollEnd < 0) scrollEnd = 0;
        scrollEnd = Math.floor(scrollEnd);
        $page.stop().animate({
          scrollTop: scrollEnd
        }, {
          duration: settings.duration,
          easing: settings.easing,
          complete: function complete() {
            dfd.resolve();
          }
        });
        dfd.done(function () {
          self.focus(id);
          settings.callback();
          $doc.off('.scrollerMousewheel');
        });

        if (settings.cancelByMousewheel) {
          var mousewheelEvent = 'onwheel' in document ? 'wheel.scrollerMousewheel' : 'mousewheel.scrollerMousewheel';
          $doc.one(mousewheelEvent, function () {
            dfd.reject();
            $page.stop();
          });
        }
      },
      // フォーカスを移動
      focus: function focus(id) {
        var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];
        var $target = $(id + ', a[name="' + id.substr(1) + '"]').eq(0);
        var targetIsFocusableElement = $target.is(focusableElements.join());

        if (targetIsFocusableElement) {
          $target.focus();
        } else {
          $target.attr('tabindex', -1).focus().removeAttr('tabindex');
        }
      }
    };
    /**
     * 文字列からオブジェクトに変換したクエリを取得
     *
     * @example $.getQuery();
     * @example $.getQuery('a=foo&b=bar&c=foobar');
     */

    $.getQuery = function (str) {
      if (!str) str = location.search;
      str = str.replace(/^.*?\?/, '');
      var query = {};
      var temp = str.split(/&/);

      for (var i = 0, l = temp.length; i < l; i++) {
        var param = temp[i].split(/=/);
        query[param[0]] = decodeURIComponent(param[1]);
      }

      return query;
    };
    /**
     * 画像をプリロード
     *
     * @date 2012-09-12
     *
     * @example $.preLoadImages('/assets/img/01.jpg');
     */


    var cache = [];

    $.preLoadImages = function () {
      var args_len = arguments.length;

      for (var i = args_len; i--;) {
        var cacheImage = document.createElement('img');
        cacheImage.src = arguments[i];
        cache.push(cacheImage);
      }
    };
    /**
     * タッチデバイスにタッチイベント追加
     *
     * @date 2018-10-03
     *
     * @example $.enableTouchOver();
     * @example $.enableTouchOver('.touchhover');
     */


    $.enableTouchOver = function (target) {
      if (target === undefined) {
        target = 'a, button, .js-touchHover';
      }

      if (!$.ua.isTouchDevice) {
        $('html').addClass('no-touchevents');
      } else {
        $('html').addClass('touchevents');
      }

      $(target).on({
        'touchstart mouseenter': function touchstartMouseenter() {
          $(this).addClass('is-touched');
        },
        'touchend mouseleave': function touchendMouseleave() {
          $(this).removeClass('is-touched');
        }
      });
    };
  })(jQuery);
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

}]);
//# sourceMappingURL=common.js.map