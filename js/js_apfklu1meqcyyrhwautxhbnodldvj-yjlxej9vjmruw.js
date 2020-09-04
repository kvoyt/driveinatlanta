/**
 * Copyright (c) 2020, Travis Clarke (https://www.travismclarke.com/)
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ImageMap = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var version = "2.0.0";

  var RESIZE = "resize";
  var LOAD = "load";
  var USEMAP = "usemap";
  var COORDS = "coords";
  var COMPLETE = "complete";
  /**
   * ImageMap main library constructor
   *
   * @param selector {string} CSS selector
   * @param wait {number} [wait=500] debounce wait interval
   * @constructor
   */

  var ImageMap = /*#__PURE__*/function () {
    function ImageMap(selector, wait) {
      _classCallCheck(this, ImageMap);

      this.selector = selector instanceof Array ? selector : document.querySelectorAll(selector);
      if (document.readyState !== COMPLETE) window.addEventListener(LOAD, this.update.bind(this));else this.update();
      window.addEventListener(RESIZE, this.debounce(this.update, wait).bind(this));
    }

    _createClass(ImageMap, [{
      key: "update",

      /**
       * Update
       */
      value: function update() {
        var imgs = this.selector;

        for (var i = 0; i < imgs.length; i++) {
          var img = imgs[i];
          if (img.getAttribute(USEMAP) === undefined) return;
          var newImg = img.cloneNode();
          newImg.addEventListener(LOAD, this.handleImageLoad(img.offsetWidth, img.offsetHeight));
          newImg.src = img.src; // required for IE
        }
      }
      /**
       * Debounce
       *
       * @param {function} func
       * @param {number} [wait=500]
       */

    }, {
      key: "debounce",
      value: function debounce(func) {
        var _this = this;

        var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var timeout;
        return function () {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          window.clearTimeout(timeout);
          timeout = window.setTimeout(function (ctx) {
            return func.apply(ctx, args);
          }, wait, _this);
        };
      }
      /**
       * handleImageLoad
       *
       * @param {number} [offsetWidth=0]
       * @param {number} [offsetHeight=0]
       */

    }, {
      key: "handleImageLoad",
      value: function handleImageLoad() {
        var offsetWidth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var offsetHeight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        return function (e) {
          var w = e.target.width;
          var h = e.target.height;
          var wPercent = offsetWidth / 100;
          var hPercent = offsetHeight / 100;
          var mapName = e.target.getAttribute(USEMAP).replace(/^#/, "");
          var areas = document.querySelectorAll(ImageMap.genAreaSelector(mapName));

          var _loop = function _loop(i) {
            var area = areas[i];
            var coordsString = area.dataset[COORDS] = area.dataset[COORDS] || area.getAttribute(COORDS);
            var coordsArrayOld = coordsString.split(",");
            var coordsArrayNew = coordsArrayOld.map(function (_, i) {
              return i % 2 === 0 ? Number(coordsArrayOld[i] / w * 100 * wPercent) : Number(coordsArrayOld[i] / h * 100 * hPercent);
            });
            area.setAttribute(COORDS, coordsArrayNew.toString());
          };

          for (var i = 0; i < areas.length; i++) {
            _loop(i);
          }
        };
      }
    }], [{
      key: "genAreaSelector",
      value: function genAreaSelector(mapName) {
        return "map[name=\"".concat(mapName, "\"] area");
      }
    }]);

    return ImageMap;
  }();

  function _ImageMap(selector, wait) {
    return new ImageMap(selector, wait);
  }

  _ImageMap.VERSION = version;

  return _ImageMap;

})));
;
/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document) {

  'use strict';

  // To understand behaviors, see https://drupal.org/node/756722#behaviors
  Drupal.behaviors.my_custom_behavior = {
    attach: function (context, settings) {

      // Place your code here.
      (function ($) {
  // All your code here
  		
// The function actually applying the offset
function offsetAnchor() {
    if(location.hash.length !== 0) {
        //window.scrollTo(window.scrollX, window.scrollY + 500);
    }
}

// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);

// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).




      $( ".nav a" ).click(function() {
        $("#toggle").click(); 
		  });


      //var once = false;
     $( ".view-event-kalender .tab-label" ).click(function(e) {
          
          var radio = $(e.currentTarget).prev();
          //var radio = $(e.currentTarget).find('input');
          if ($(radio).attr("checked") == false){
            $(radio).attr("checked","checked");
          } else{
            $(radio).attr("checked","");
          }
          radio = null;
          return false;
      });

// init Isotope
//html not-front logged-in no-sidebars page-event-kalender section-event-kalender page-views eu-cookie-compliance-processed
// var $grid = $('.page-event-kalender .view-event-kalender > .view-content ').isotope({
//   // options
//   itemSelector: '.tab'
// });
// // filter items on button click
// $('.view-display-id-filterkategorier .filter').click(function(e) {
//   $('.view-display-id-filterkategorier .filter').removeClass('active');
//   $(e.currentTarget).addClass('active');
//   var filterValue = $(this).attr('data-filter');
//   $grid.isotope({ filter: filterValue });
// });
var filterSpeed = 550;
$('.view-display-id-filterkategorier .filter').click(function(e) {
    if($(e.currentTarget).hasClass('active')){
      return false;
    }
    $('.view-display-id-filterkategorier .filter').removeClass('active');
    $(e.currentTarget).addClass('active');

    var filter = $(this).attr('data-filter');
    if (filter=='*'){
      $('.view-event-kalender > .view-content .tab').hide();
      $('.view-event-kalender > .view-content .tab').fadeIn(filterSpeed);
    } else {
      $('.view-event-kalender > .view-content .tab').hide();
      $(filter).fadeIn(filterSpeed);
    }
});

$('.view-display-id-filterbyer .filter').click(function(e) {
    if($(e.currentTarget).hasClass('active')){
      return false;
    }
    $('.view-display-id-filterbyer .filter').removeClass('active');
    $(e.currentTarget).addClass('active');

    var filter = $(this).attr('data-filter');
    if (filter=='*'){
      $('.view-event-kalender > .view-content .tab').hide();
      $('.view-event-kalender > .view-content .tab').fadeIn(filterSpeed);
    } else {
      $('.view-event-kalender > .view-content .tab').hide();
      $(filter).fadeIn(filterSpeed);
    }
});

/*
$('.view-display-id-filterkategorier .filter').click(function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
*/
  

//$('#image-map').imageMap();

//$('img[usemap]').ImageMap(500);




	}(jQuery));
      
    }
  };

})(jQuery, Drupal, this, this.document);


// window.addEventListener("hashchange", function () {
//     window.scrollTo(window.scrollX, window.scrollY - 100);
// });;
