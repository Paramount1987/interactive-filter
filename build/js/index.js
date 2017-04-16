/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./js/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	//------------------------------------------

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(4);
	__webpack_require__(7);

	__webpack_require__(9);
	__webpack_require__(11);
	__webpack_require__(12);
	//--------------dom is loaded
	_app2.default.domLoaded();

	//----------------components
	_app2.default.tab.init();
	_app2.default.collapse.init();

	//--------------init apartments
	_app2.default.apartments.init();
	_app2.default.filter.init();
	_app2.default.map.init();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _data = __webpack_require__(3);

	var _data2 = _interopRequireDefault(_data);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var APP = {
	    data: _data2.default.apartments,
	    filterList: [],
	    dataFilter: _data2.default.filterItems,
	    isMapVisible: false,

	    domLoaded: function domLoaded() {
	        $(document).ready(function () {
	            //hide preload
	            setTimeout(function () {
	                $('#preloader').fadeOut();
	            }, 300);
	        });
	    }
	};

		exports.default = APP;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	var data = [{
	    name: 'Stylish apartment in el born',
	    price: 85,
	    img: 'img/apartments/1.jpg',
	    location: [41.393592, 2.162570],
	    comfort: ['Guarded parking', 'Balcony', 'Dishwasher', 'Freezer']
	}, {
	    name: 'A cozy flat near Las Ramblas',
	    price: 70,
	    img: 'img/apartments/2.jpg',
	    location: [41.394195, 2.164844],
	    comfort: ['Free wireless internet', 'Fireplace']
	}, {
	    name: 'Apartment in the classic Barcelona center',
	    price: 60,
	    img: 'img/apartments/3.jpg',
	    location: [41.393732, 2.165551],
	    comfort: ['Air conditioner', 'Elevator', 'Terrace', 'Blender', 'Fridge']
	}, {
	    name: 'Classic Eixample place for rent',
	    price: 75,
	    img: 'img/apartments/4.jpg',
	    location: [41.392794, 2.164888],
	    comfort: ['Free Transportation', 'Guarded parking', 'Game room']
	}, {
	    name: 'Atlantida Beach',
	    price: 90,
	    img: 'img/apartments/5.jpg',
	    location: [41.392876, 2.163260],
	    comfort: ['Cooking hob']
	}, {
	    name: 'Elegant place in Eixample',
	    price: 150,
	    img: 'img/apartments/6.jpg',
	    location: [41.394479, 2.163797],
	    comfort: ['Air conditioner', 'Computerr', 'Free wireless internet', 'Game room', 'Terrace', 'Fridge']
	}];

	var dataFilter = ['Fridge', 'Freezer', 'Dishwasher', 'Cooking hob', 'Coffee maker', 'Blender', 'Terrace', 'Game room', 'Floor heating', 'Fireplace', 'Balcony', 'Guarded parking', 'Free wireless internet', 'Free Transportation', 'Elevator', 'Computer', 'Air conditioner'];

	module.exports.apartments = data;
	module.exports.filterItems = dataFilter;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//-----tab bootstrap
	__webpack_require__(5);
	__webpack_require__(6);

	_app2.default.tab = {

	    init: function init() {}
		};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';

	/* ========================================================================
	 * Bootstrap: transition.js v3.3.7
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================

	  function transitionEnd() {
	    var el = document.createElement('bootstrap');

	    var transEndEventNames = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] };
	      }
	    }

	    return false; // explicit for ie8 (  ._.)
	  }

	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false;
	    var $el = this;
	    $(this).one('bsTransitionEnd', function () {
	      called = true;
	    });
	    var callback = function callback() {
	      if (!called) $($el).trigger($.support.transition.end);
	    };
	    setTimeout(callback, duration);
	    return this;
	  };

	  $(function () {
	    $.support.transition = transitionEnd();

	    if (!$.support.transition) return;

	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function handle(e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
	      }
	    };
	  });
		}(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	/* ========================================================================
	 * Bootstrap: tab.js v3.3.7
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	+function ($) {
	  'use strict';

	  // TAB CLASS DEFINITION
	  // ====================

	  var Tab = function Tab(element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element);
	    // jscs:enable requireDollarBeforejQueryAssignment
	  };

	  Tab.VERSION = '3.3.7';

	  Tab.TRANSITION_DURATION = 150;

	  Tab.prototype.show = function () {
	    var $this = this.element;
	    var $ul = $this.closest('ul:not(.dropdown-menu)');
	    var selector = $this.data('target');

	    if (!selector) {
	      selector = $this.attr('href');
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
	    }

	    if ($this.parent('li').hasClass('active')) return;

	    var $previous = $ul.find('.active:last a');
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    });
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    });

	    $previous.trigger(hideEvent);
	    $this.trigger(showEvent);

	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;

	    var $target = $(selector);

	    this.activate($this.closest('li'), $ul);
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      });
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      });
	    });
	  };

	  Tab.prototype.activate = function (element, container, callback) {
	    var $active = container.find('> .active');
	    var transition = callback && $.support.transition && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length);

	    function next() {
	      $active.removeClass('active').find('> .dropdown-menu > .active').removeClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', false);

	      element.addClass('active').find('[data-toggle="tab"]').attr('aria-expanded', true);

	      if (transition) {
	        element[0].offsetWidth; // reflow for transition
	        element.addClass('in');
	      } else {
	        element.removeClass('fade');
	      }

	      if (element.parent('.dropdown-menu').length) {
	        element.closest('li.dropdown').addClass('active').end().find('[data-toggle="tab"]').attr('aria-expanded', true);
	      }

	      callback && callback();
	    }

	    $active.length && transition ? $active.one('bsTransitionEnd', next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();

	    $active.removeClass('in');
	  };

	  // TAB PLUGIN DEFINITION
	  // =====================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.tab');

	      if (!data) $this.data('bs.tab', data = new Tab(this));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.tab;

	  $.fn.tab = Plugin;
	  $.fn.tab.Constructor = Tab;

	  // TAB NO CONFLICT
	  // ===============

	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old;
	    return this;
	  };

	  // TAB DATA-API
	  // ============

	  var clickHandler = function clickHandler(e) {
	    e.preventDefault();
	    Plugin.call($(this), 'show');
	  };

	  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler).on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler);
		}(jQuery);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//-----collapse bootstrap
	__webpack_require__(8);

	_app2.default.collapse = {

	    init: function init() {}
		};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.7
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */

	/* jshint latedef: false */

	+function ($) {
	  'use strict';

	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================

	  var Collapse = function Collapse(element, options) {
	    this.$element = $(element);
	    this.options = $.extend({}, Collapse.DEFAULTS, options);
	    this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
	    this.transitioning = null;

	    if (this.options.parent) {
	      this.$parent = this.getParent();
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger);
	    }

	    if (this.options.toggle) this.toggle();
	  };

	  Collapse.VERSION = '3.3.7';

	  Collapse.TRANSITION_DURATION = 350;

	  Collapse.DEFAULTS = {
	    toggle: true
	  };

	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width');
	    return hasWidth ? 'width' : 'height';
	  };

	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return;

	    var activesData;
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing');

	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse');
	      if (activesData && activesData.transitioning) return;
	    }

	    var startEvent = $.Event('show.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide');
	      activesData || actives.data('bs.collapse', null);
	    }

	    var dimension = this.dimension();

	    this.$element.removeClass('collapse').addClass('collapsing')[dimension](0).attr('aria-expanded', true);

	    this.$trigger.removeClass('collapsed').attr('aria-expanded', true);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.$element.removeClass('collapsing').addClass('collapse in')[dimension]('');
	      this.transitioning = 0;
	      this.$element.trigger('shown.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    var scrollSize = $.camelCase(['scroll', dimension].join('-'));

	    this.$element.one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
	  };

	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return;

	    var startEvent = $.Event('hide.bs.collapse');
	    this.$element.trigger(startEvent);
	    if (startEvent.isDefaultPrevented()) return;

	    var dimension = this.dimension();

	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight;

	    this.$element.addClass('collapsing').removeClass('collapse in').attr('aria-expanded', false);

	    this.$trigger.addClass('collapsed').attr('aria-expanded', false);

	    this.transitioning = 1;

	    var complete = function complete() {
	      this.transitioning = 0;
	      this.$element.removeClass('collapsing').addClass('collapse').trigger('hidden.bs.collapse');
	    };

	    if (!$.support.transition) return complete.call(this);

	    this.$element[dimension](0).one('bsTransitionEnd', $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
	  };

	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']();
	  };

	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function (i, element) {
	      var $element = $(element);
	      this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
	    }, this)).end();
	  };

	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in');

	    $element.attr('aria-expanded', isOpen);
	    $trigger.toggleClass('collapsed', !isOpen).attr('aria-expanded', isOpen);
	  };

	  function getTargetFromTrigger($trigger) {
	    var href;
	    var target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

	    return $(target);
	  }

	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================

	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this);
	      var data = $this.data('bs.collapse');
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);

	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
	      if (!data) $this.data('bs.collapse', data = new Collapse(this, options));
	      if (typeof option == 'string') data[option]();
	    });
	  }

	  var old = $.fn.collapse;

	  $.fn.collapse = Plugin;
	  $.fn.collapse.Constructor = Collapse;

	  // COLLAPSE NO CONFLICT
	  // ====================

	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old;
	    return this;
	  };

	  // COLLAPSE DATA-API
	  // =================

	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this = $(this);

	    if (!$this.attr('data-target')) e.preventDefault();

	    var $target = getTargetFromTrigger($this);
	    var data = $target.data('bs.collapse');
	    var option = data ? 'toggle' : $this.data();

	    Plugin.call($target, option);
	  });
		}(jQuery);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	var _template = __webpack_require__(10);

	var _template2 = _interopRequireDefault(_template);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.apartments = {
	    container: '.apartments-list',
	    linkToRow: '#apartments-row',
	    counterDiv: '.js-apartments__count',

	    init: function init() {
	        var _this = this;
	        $(document).ready(function () {
	            _app2.default.apartments.$list = $(_this.container);

	            _this.render(_app2.default.data);

	            $("a[href='" + _this.linkToRow + "']").on('shown.bs.tab', function () {
	                _app2.default.isMapVisible = false;
	            });
	        });
	    },

	    render: function render(data) {
	        var _this = this;
	        data.forEach(function (el) {
	            _app2.default.apartments.$list.append(_template2.default.generateTemplate(el));
	        });

	        //--------counter
	        var counter = data.length;
	        var $counterDiv = $(_this.counterDiv);
	        if (counter === 1) {
	            $counterDiv.text(counter + ' offer');
	        } else {
	            $counterDiv.text(counter + ' offers');
	        }
	    },

	    updateApartments: function updateApartments() {
	        var _this = this;

	        _app2.default.apartments.$list.empty();

	        if (!_app2.default.filterList.length) {
	            _this.render(_app2.default.data);
	        } else {
	            var filteredApartments = _app2.default.data.filter(function (el) {
	                var status = true;
	                for (var i = 0; i < _app2.default.filterList.length; i++) {
	                    if (el.comfort.indexOf(_app2.default.filterList[i]) == -1) {
	                        status = false;
	                        break;
	                    }
	                }
	                return status;
	            });
	            _this.render(filteredApartments);
	        }
	    }
		};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	module.exports.generateTemplate = function (data) {
	    return "<li>\n            <a class=\"apartment-item\" href=\"#\">\n                <img class=\"apartment-item__img\" src=\"" + data.img + "\" alt=\"img\">\n                <span class=\"apartment-item__body\">\n                <span class=\"apartment-item__name\">" + data.name + "</span>\n            <span class=\"apartment-item__price\">\n                <span class=\"icon-euro\">\u20AC</span> " + data.price + "\n                </span>\n                </span>\n                </a>\n            </li>";
		};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.filter = {
	    checkbox: '.js-checkbox-filter',
	    inputFilter: '.js-filter-search__input',
	    filterControl: '.filter-search__control',
	    filerTags: '.js-filter-tags',
	    filterTag: '.js-filter-tag',
	    filterSearchTags: '.js-filter-search__list-tags',
	    filterSearchTag: '.js-search-filter-tag',
	    filterSearchList: '.js-filter-search__list',
	    filterSearchLi: 'js-search-filter-li',
	    filteredList: [],

	    init: function init() {
	        var _this = this;
	        $(document).ready(function () {
	            _this.checkboxChange();
	            _this.filterTagClick();
	            _this.focusInputFilter();
	            _this.clickOutsideSearchList();
	            _this.clickFilterSearchLi();
	            _this.keyupInputFilter();
	        });
	    },

	    focusInputFilter: function focusInputFilter() {
	        var _this = this;
	        var $filterSearchList = $(_this.filterSearchList);
	        $(_this.inputFilter).focus(function () {
	            $(this).val('');
	            $filterSearchList.addClass('is-active');
	            _this.updateSearchFilterList();
	        });

	        $(_this.filterControl).click(function (e) {
	            if (e.target.className == 'filter-search__control' || e.target.className == 'icon-search') {
	                setTimeout(function () {
	                    $(_this.inputFilter).focus();
	                }, 10);
	            }
	        });
	    },

	    clickOutsideSearchList: function clickOutsideSearchList() {
	        var _this = this;
	        var $list = $(_this.filterSearchList);

	        $(document).click(function (e) {
	            if (e.target.className !== _this.filterSearchLi) {
	                if (e.target.id !== 'filter-input') {
	                    $list.removeClass('is-active');
	                }
	            }
	        });
	    },

	    clickFilterSearchLi: function clickFilterSearchLi() {
	        var _this = this;

	        $('body').on('click', '.' + _this.filterSearchLi, function () {
	            var tagName = $(this).data('name');
	            _app2.default.filterList.push(tagName);

	            $(_this.checkbox + "[value='" + tagName + "']").prop("checked", true);
	            //-----------hide list
	            $(_this.filterSearchList).removeClass('is-active');
	            //----------clear input
	            $(_this.inputFilter).val('');
	            //------update new list tags
	            _this.updateFilterTag();
	            _this.updateSearchFilterTag();
	            _this.updateSearchFilterList();
	            //------update apartments
	            _app2.default.apartments.updateApartments();

	            //-----------if map is init and visible
	            if (_app2.default.isMapVisible) {
	                _app2.default.map.updateMarkers();
	            }
	        });
	    },

	    keyupInputFilter: function keyupInputFilter() {
	        var _this = this;
	        var $inputFilter = $(_this.inputFilter);
	        var $filterSearchList = $(_this.filterSearchList);
	        var $filterControl = $(_this.filterControl);

	        $inputFilter.css('width', $filterControl.width() - 13 + 'px');

	        $inputFilter.keyup(function () {
	            $inputFilter.css('width', $inputFilter.val().length * 6 + 10 + 'px');

	            $filterSearchList.empty();

	            _this.filteredList.forEach(function (el) {
	                if (el.toLowerCase().indexOf($inputFilter.val().toLowerCase()) >= 0) {
	                    $filterSearchList.append('<li class="js-search-filter-li" data-name="' + el + '">' + el + '</li>');
	                }
	            });
	        });
	    },

	    checkboxChange: function checkboxChange() {
	        var _this = this;

	        $('body').on('change', _this.checkbox, function () {
	            var $filter = $(this);
	            var filterVal = $filter.val();

	            if ($filter.is(':checked')) {
	                _app2.default.filterList.push(filterVal);
	            } else {
	                _app2.default.filterList.splice(_app2.default.filterList.indexOf(filterVal), 1);
	            }

	            //------update new list tags
	            _this.updateFilterTag();
	            _this.updateSearchFilterTag();
	            _this.updateSearchFilterList();
	            //------update apartments
	            _app2.default.apartments.updateApartments();

	            //-----------if map is init and visible
	            if (_app2.default.isMapVisible) {
	                _app2.default.map.updateMarkers();
	            }
	        });
	    },

	    filterTagClick: function filterTagClick() {
	        var _this = this;

	        $('body').on('click', _this.filterTag + ',' + _this.filterSearchTag, function () {
	            var tagName = $(this).data('name');
	            _app2.default.filterList.splice(_app2.default.filterList.indexOf(tagName), 1);

	            $(_this.checkbox + "[value='" + tagName + "']").prop("checked", false);
	            //------update new list tags
	            _this.updateFilterTag();
	            _this.updateSearchFilterTag();
	            _this.updateSearchFilterList();
	            //------update apartments
	            _app2.default.apartments.updateApartments();

	            //-----------if map is init and visible
	            if (_app2.default.isMapVisible) {
	                _app2.default.map.updateMarkers();
	            }
	        });
	    },

	    updateFilterTag: function updateFilterTag() {
	        var _this = this;
	        var $filterTags = $(_this.filerTags);

	        $filterTags.empty();
	        _app2.default.filterList.forEach(function (el) {
	            $filterTags.append('<li class="js-filter-tag" data-name="' + el + '">' + el + '</li>');
	        });
	    },

	    updateSearchFilterTag: function updateSearchFilterTag() {
	        var _this = this;
	        var $filterTags = $(_this.filterSearchTags);
	        var $inputFilter = $(_this.inputFilter);
	        var $filterControl = $(_this.filterControl);

	        $filterTags.empty();
	        _app2.default.filterList.forEach(function (el) {
	            $filterTags.append('<li class="js-search-filter-tag" data-name="' + el + '">' + el + '</li>');
	        });

	        if (_app2.default.filterList.length != 0) {
	            $inputFilter.css('width', '10px');
	            $inputFilter.attr("placeholder", "");
	        } else {
	            $inputFilter.css('width', $filterControl.width() - 13 + 'px');
	            $inputFilter.attr("placeholder", "enter the names of amenities that you need in apartment");
	        }
	    },

	    updateSearchFilterList: function updateSearchFilterList() {
	        var _this = this;
	        var $filterSearchList = $(_this.filterSearchList);
	        $filterSearchList.empty();
	        _this.filteredList.length = 0;;

	        _app2.default.dataFilter.forEach(function (el) {
	            if (_app2.default.filterList.indexOf(el) == -1) {
	                _this.filteredList.push(el);
	                $filterSearchList.append('<li class="js-search-filter-li" data-name="' + el + '">' + el + '</li>');
	            }
	        });
	    }
		};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(2);

	var _app2 = _interopRequireDefault(_app);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_app2.default.map = {
	    container: 'map',
	    linkToMap: '#apartments-map',
	    markers: [],

	    init: function init() {
	        var _this = this;
	        $(document).ready(function () {

	            $("a[href='" + _this.linkToMap + "']").on('shown.bs.tab', function () {
	                _this.createMap();
	            });
	        });
	    },

	    getApartments: function getApartments() {
	        var _this = this;

	        if (!_app2.default.filterList.length) {
	            return _app2.default.data;
	        } else {
	            var filteredApartments = _app2.default.data.filter(function (el) {
	                var status = true;
	                for (var i = 0; i < _app2.default.filterList.length; i++) {
	                    if (el.comfort.indexOf(_app2.default.filterList[i]) == -1) {
	                        status = false;
	                        break;
	                    }
	                }
	                return status;
	            });
	            return filteredApartments;
	        }
	    },

	    getMapPosition: function getMapPosition(data) {
	        var pos = [0, 0];

	        for (var i = 0; i < data.length; i++) {
	            pos[0] += data[i].location[0];
	            pos[1] += data[i].location[1];
	        }

	        pos[0] = pos[0] / data.length;
	        pos[1] = pos[1] / data.length;

	        return pos;
	    },

	    createMap: function createMap() {
	        var _this = this;
	        var position = _this.getMapPosition(_app2.default.data);
	        _app2.default.isMapVisible = true;
	        /*
	         * create map
	         */
	        _this.mapGoogle = new google.maps.Map(document.getElementById(_this.container), {
	            center: new google.maps.LatLng(position[0], position[1]),
	            zoom: 18,
	            mapTypeId: google.maps.MapTypeId.ROADMAP,
	            disableDefaultUI: true,
	            styles: _this.styleMap
	        });
	        /*
	         * add markers to map
	         */
	        _this.updateMarkers();
	    },

	    createMarker: function createMarker(options, html) {
	        var infoWindow = new google.maps.InfoWindow();
	        var marker = new google.maps.Marker(options);
	        if (html) {
	            google.maps.event.addListener(marker, "click", function () {
	                infoWindow.setContent(html);
	                infoWindow.open(options.map, this);
	            });
	        }
	        return marker;
	    },

	    clearMapMarkers: function clearMapMarkers() {
	        for (var i = 0; i < _app2.default.map.markers.length; i++) {
	            _app2.default.map.markers[i].setMap(null);
	        }
	    },

	    updateMarkers: function updateMarkers() {
	        var _this = this;
	        _this.clearMapMarkers();
	        _app2.default.map.markers = [];
	        var apartments = _this.getApartments();

	        for (var i = 0; i < apartments.length; i++) {
	            _app2.default.map.markers.push(_this.createMarker({
	                position: new google.maps.LatLng(apartments[i].location[0], apartments[i].location[1]),
	                icon: 'img/pin.png',
	                label: { text: '€' + apartments[i].price, color: "white" },
	                map: _this.mapGoogle
	            }, "<span>" + apartments[i].name + "</span>"));
	        }
	    },

	    styleMap: [{
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "administrative",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "landscape",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "landscape",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#f2f2f2"
	        }]
	    }, {
	        "featureType": "landscape",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "landscape.man_made",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "landscape.man_made",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#f5f5f3"
	        }]
	    }, {
	        "featureType": "poi.attraction",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "poi.attraction",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.business",
	        "elementType": "labels",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.government",
	        "elementType": "labels",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.medical",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.park",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#e2e6e3"
	        }]
	    }, {
	        "featureType": "poi.park",
	        "elementType": "labels.text.fill",
	        "stylers": [{
	            "color": "#7e9c83"
	        }]
	    }, {
	        "featureType": "poi.place_of_worship",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.school",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "poi.sports_complex",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#ffffff"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "geometry.stroke",
	        "stylers": [{
	            "color": "#c8c8c7"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "labels.icon",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "labels.text.fill",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.highway",
	        "elementType": "labels.text.stroke",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.highway.controlled_access",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "road.local",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "road.local",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#dddddd"
	        }]
	    }, {
	        "featureType": "transit",
	        "stylers": [{
	            "saturation": -100
	        }, {
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "transit",
	        "elementType": "labels.icon",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "transit.line",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "transit.station.airport",
	        "elementType": "labels.icon",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "transit.station.airport",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "transit.station.bus",
	        "elementType": "geometry.stroke",
	        "stylers": [{
	            "color": "#c8c8c7"
	        }]
	    }, {
	        "featureType": "transit.station.bus",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "water",
	        "stylers": [{
	            "saturation": -100
	        }]
	    }, {
	        "featureType": "water",
	        "elementType": "geometry.fill",
	        "stylers": [{
	            "color": "#cdd2d4"
	        }, {
	            "saturation": 5
	        }]
	    }, {
	        "featureType": "water",
	        "elementType": "geometry.stroke",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "water",
	        "elementType": "labels.icon",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }, {
	        "featureType": "water",
	        "elementType": "labels.text",
	        "stylers": [{
	            "visibility": "off"
	        }]
	    }]
		};

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjNiNmI5OGUzMzIyN2Q3NjgzZDUiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9kYXRhL2luZGV4LmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy90YWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL3RhYi90cmFuc2l0aW9uLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy90YWIvdGFiLmpzIiwid2VicGFjazovLy9zcmMvanMvY29tcG9uZW50cy9jb2xsYXBzZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvY29sbGFwc2UvY29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FwYXJ0bWVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2FwYXJ0bWVudHMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vL3NyYy9qcy9jb21wb25lbnRzL2ZpbHRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vc3JjL2pzL2NvbXBvbmVudHMvbWFwL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vanMvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjNiNmI5OGUzMzIyN2Q3NjgzZDUiLCIndXNlIHN0cmljdCc7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbXBvcnQgQVBQICAgICAgICBmcm9tICcuL2NvbXBvbmVudHMvYXBwJztcblxucmVxdWlyZSgnLi9jb21wb25lbnRzL3RhYicpO1xucmVxdWlyZSggJy4vY29tcG9uZW50cy9jb2xsYXBzZScpO1xuXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMvYXBhcnRtZW50cycpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL2ZpbHRlcicpO1xucmVxdWlyZSgnLi9jb21wb25lbnRzL21hcCcpO1xuLy8tLS0tLS0tLS0tLS0tLWRvbSBpcyBsb2FkZWRcbkFQUC5kb21Mb2FkZWQoKTtcblxuXG4vLy0tLS0tLS0tLS0tLS0tLS1jb21wb25lbnRzXG5BUFAudGFiLmluaXQoKTtcbkFQUC5jb2xsYXBzZS5pbml0KCk7XG5cbi8vLS0tLS0tLS0tLS0tLS1pbml0IGFwYXJ0bWVudHNcbkFQUC5hcGFydG1lbnRzLmluaXQoKTtcbkFQUC5maWx0ZXIuaW5pdCgpO1xuQVBQLm1hcC5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2luZGV4LmpzIiwiaW1wb3J0IGRhdGEgZnJvbSAnLi4vZGF0YSc7XG5pbXBvcnQgZGF0YUZpbHRlciBmcm9tICcuLi9kYXRhJztcblxuY29uc3QgQVBQID0ge1xuICAgIGRhdGE6IGRhdGEuYXBhcnRtZW50cyxcbiAgICBmaWx0ZXJMaXN0OiBbXSxcbiAgICBkYXRhRmlsdGVyOiBkYXRhRmlsdGVyLmZpbHRlckl0ZW1zLFxuICAgIGlzTWFwVmlzaWJsZTogZmFsc2UsXG5cbiAgICBkb21Mb2FkZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICAgICAgLy9oaWRlIHByZWxvYWRcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXskKCcjcHJlbG9hZGVyJykuZmFkZU91dCgpfSwzMDApO1xuICAgICAgICB9KTtcbiAgICB9LFxufVxuXG5leHBvcnQgZGVmYXVsdCBBUFA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvYXBwL2luZGV4LmpzIiwidmFyIGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1N0eWxpc2ggYXBhcnRtZW50IGluIGVsIGJvcm4nLFxyXG4gICAgICAgIHByaWNlOiA4NSxcclxuICAgICAgICBpbWc6ICdpbWcvYXBhcnRtZW50cy8xLmpwZycsXHJcbiAgICAgICAgbG9jYXRpb246IFs0MS4zOTM1OTIsIDIuMTYyNTcwXSxcclxuICAgICAgICBjb21mb3J0OiBbJ0d1YXJkZWQgcGFya2luZycsICdCYWxjb255JywgJ0Rpc2h3YXNoZXInLCAnRnJlZXplciddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBIGNvenkgZmxhdCBuZWFyIExhcyBSYW1ibGFzJyxcclxuICAgICAgICBwcmljZTogNzAsXHJcbiAgICAgICAgaW1nOiAnaW1nL2FwYXJ0bWVudHMvMi5qcGcnLFxyXG4gICAgICAgIGxvY2F0aW9uOiBbNDEuMzk0MTk1LCAyLjE2NDg0NF0sXHJcbiAgICAgICAgY29tZm9ydDogWydGcmVlIHdpcmVsZXNzIGludGVybmV0JywgJ0ZpcmVwbGFjZSddXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdBcGFydG1lbnQgaW4gdGhlIGNsYXNzaWMgQmFyY2Vsb25hIGNlbnRlcicsXHJcbiAgICAgICAgcHJpY2U6IDYwLFxyXG4gICAgICAgIGltZzogJ2ltZy9hcGFydG1lbnRzLzMuanBnJyxcclxuICAgICAgICBsb2NhdGlvbjogWzQxLjM5MzczMiwgMi4xNjU1NTFdLFxyXG4gICAgICAgIGNvbWZvcnQ6IFsnQWlyIGNvbmRpdGlvbmVyJywgJ0VsZXZhdG9yJywgJ1RlcnJhY2UnLCAnQmxlbmRlcicsICdGcmlkZ2UnXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnQ2xhc3NpYyBFaXhhbXBsZSBwbGFjZSBmb3IgcmVudCcsXHJcbiAgICAgICAgcHJpY2U6IDc1LFxyXG4gICAgICAgIGltZzogJ2ltZy9hcGFydG1lbnRzLzQuanBnJyxcclxuICAgICAgICBsb2NhdGlvbjogWzQxLjM5Mjc5NCwgMi4xNjQ4ODhdLFxyXG4gICAgICAgIGNvbWZvcnQ6IFsnRnJlZSBUcmFuc3BvcnRhdGlvbicsICdHdWFyZGVkIHBhcmtpbmcnLCAnR2FtZSByb29tJ11cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ0F0bGFudGlkYSBCZWFjaCcsXHJcbiAgICAgICAgcHJpY2U6IDkwLFxyXG4gICAgICAgIGltZzogJ2ltZy9hcGFydG1lbnRzLzUuanBnJyxcclxuICAgICAgICBsb2NhdGlvbjogWzQxLjM5Mjg3NiwgMi4xNjMyNjBdLFxyXG4gICAgICAgIGNvbWZvcnQ6IFsnQ29va2luZyBob2InXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnRWxlZ2FudCBwbGFjZSBpbiBFaXhhbXBsZScsXHJcbiAgICAgICAgcHJpY2U6IDE1MCxcclxuICAgICAgICBpbWc6ICdpbWcvYXBhcnRtZW50cy82LmpwZycsXHJcbiAgICAgICAgbG9jYXRpb246IFs0MS4zOTQ0NzksIDIuMTYzNzk3XSxcclxuICAgICAgICBjb21mb3J0OiBbJ0FpciBjb25kaXRpb25lcicsICdDb21wdXRlcnInLCAnRnJlZSB3aXJlbGVzcyBpbnRlcm5ldCcsICdHYW1lIHJvb20nLCAnVGVycmFjZScsICdGcmlkZ2UnXVxyXG4gICAgfVxyXG5dO1xyXG5cclxudmFyIGRhdGFGaWx0ZXIgPSBbJ0ZyaWRnZScsICdGcmVlemVyJywgJ0Rpc2h3YXNoZXInLCAnQ29va2luZyBob2InLCAnQ29mZmVlIG1ha2VyJywgJ0JsZW5kZXInLFxyXG4gICAgICAgICAgICAgICAgICAnVGVycmFjZScsICdHYW1lIHJvb20nLCAnRmxvb3IgaGVhdGluZycsICdGaXJlcGxhY2UnLCAnQmFsY29ueScsICdHdWFyZGVkIHBhcmtpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAnRnJlZSB3aXJlbGVzcyBpbnRlcm5ldCcsICdGcmVlIFRyYW5zcG9ydGF0aW9uJywgJ0VsZXZhdG9yJywgJ0NvbXB1dGVyJywgJ0FpciBjb25kaXRpb25lcidcclxuXTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmFwYXJ0bWVudHMgPSBkYXRhO1xyXG5tb2R1bGUuZXhwb3J0cy5maWx0ZXJJdGVtcyA9IGRhdGFGaWx0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2RhdGEvaW5kZXguanMiLCIvLy0tLS0tdGFiIGJvb3RzdHJhcFxucmVxdWlyZSgnLi90cmFuc2l0aW9uJyk7XG5yZXF1aXJlKCcuL3RhYicpO1xuXG5pbXBvcnQgQVBQIGZyb20gJy4uL2FwcCc7XG5cbkFQUC50YWIgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy90YWIvaW5kZXguanMiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdHJhbnNpdGlvbi5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI3RyYW5zaXRpb25zXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQ1NTIFRSQU5TSVRJT04gU1VQUE9SVCAoU2hvdXRvdXQ6IGh0dHA6Ly93d3cubW9kZXJuaXpyLmNvbS8pXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25FbmQoKSB7XG4gICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYm9vdHN0cmFwJylcblxuICAgIHZhciB0cmFuc0VuZEV2ZW50TmFtZXMgPSB7XG4gICAgICBXZWJraXRUcmFuc2l0aW9uIDogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxuICAgICAgTW96VHJhbnNpdGlvbiAgICA6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAgIE9UcmFuc2l0aW9uICAgICAgOiAnb1RyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQnLFxuICAgICAgdHJhbnNpdGlvbiAgICAgICA6ICd0cmFuc2l0aW9uZW5kJ1xuICAgIH1cblxuICAgIGZvciAodmFyIG5hbWUgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgICBpZiAoZWwuc3R5bGVbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4geyBlbmQ6IHRyYW5zRW5kRXZlbnROYW1lc1tuYW1lXSB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlIC8vIGV4cGxpY2l0IGZvciBpZTggKCAgLl8uKVxuICB9XG5cbiAgLy8gaHR0cDovL2Jsb2cuYWxleG1hY2Nhdy5jb20vY3NzLXRyYW5zaXRpb25zXG4gICQuZm4uZW11bGF0ZVRyYW5zaXRpb25FbmQgPSBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICB2YXIgY2FsbGVkID0gZmFsc2VcbiAgICB2YXIgJGVsID0gdGhpc1xuICAgICQodGhpcykub25lKCdic1RyYW5zaXRpb25FbmQnLCBmdW5jdGlvbiAoKSB7IGNhbGxlZCA9IHRydWUgfSlcbiAgICB2YXIgY2FsbGJhY2sgPSBmdW5jdGlvbiAoKSB7IGlmICghY2FsbGVkKSAkKCRlbCkudHJpZ2dlcigkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQpIH1cbiAgICBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkdXJhdGlvbilcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gPSB0cmFuc2l0aW9uRW5kKClcblxuICAgIGlmICghJC5zdXBwb3J0LnRyYW5zaXRpb24pIHJldHVyblxuXG4gICAgJC5ldmVudC5zcGVjaWFsLmJzVHJhbnNpdGlvbkVuZCA9IHtcbiAgICAgIGJpbmRUeXBlOiAkLnN1cHBvcnQudHJhbnNpdGlvbi5lbmQsXG4gICAgICBkZWxlZ2F0ZVR5cGU6ICQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxcbiAgICAgIGhhbmRsZTogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKHRoaXMpKSByZXR1cm4gZS5oYW5kbGVPYmouaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG59KGpRdWVyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvdGFiL3RyYW5zaXRpb24uanMiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogdGFiLmpzIHYzLjMuN1xuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdGFic1xuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBDb3B5cmlnaHQgMjAxMS0yMDE2IFR3aXR0ZXIsIEluYy5cbiAqIExpY2Vuc2VkIHVuZGVyIE1JVCAoaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0UpXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuXG4rZnVuY3Rpb24gKCQpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIFRBQiBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIFRhYiA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgLy8ganNjczpkaXNhYmxlIHJlcXVpcmVEb2xsYXJCZWZvcmVqUXVlcnlBc3NpZ25tZW50XG4gICAgdGhpcy5lbGVtZW50ID0gJChlbGVtZW50KVxuICAgIC8vIGpzY3M6ZW5hYmxlIHJlcXVpcmVEb2xsYXJCZWZvcmVqUXVlcnlBc3NpZ25tZW50XG4gIH1cblxuICBUYWIuVkVSU0lPTiA9ICczLjMuNydcblxuICBUYWIuVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIFRhYi5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRoaXMgICAgPSB0aGlzLmVsZW1lbnRcbiAgICB2YXIgJHVsICAgICAgPSAkdGhpcy5jbG9zZXN0KCd1bDpub3QoLmRyb3Bkb3duLW1lbnUpJylcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5kYXRhKCd0YXJnZXQnKVxuXG4gICAgaWYgKCFzZWxlY3Rvcikge1xuICAgICAgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdocmVmJylcbiAgICAgIHNlbGVjdG9yID0gc2VsZWN0b3IgJiYgc2VsZWN0b3IucmVwbGFjZSgvLiooPz0jW15cXHNdKiQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcbiAgICB9XG5cbiAgICBpZiAoJHRoaXMucGFyZW50KCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkgcmV0dXJuXG5cbiAgICB2YXIgJHByZXZpb3VzID0gJHVsLmZpbmQoJy5hY3RpdmU6bGFzdCBhJylcbiAgICB2YXIgaGlkZUV2ZW50ID0gJC5FdmVudCgnaGlkZS5icy50YWInLCB7XG4gICAgICByZWxhdGVkVGFyZ2V0OiAkdGhpc1swXVxuICAgIH0pXG4gICAgdmFyIHNob3dFdmVudCA9ICQuRXZlbnQoJ3Nob3cuYnMudGFiJywge1xuICAgICAgcmVsYXRlZFRhcmdldDogJHByZXZpb3VzWzBdXG4gICAgfSlcblxuICAgICRwcmV2aW91cy50cmlnZ2VyKGhpZGVFdmVudClcbiAgICAkdGhpcy50cmlnZ2VyKHNob3dFdmVudClcblxuICAgIGlmIChzaG93RXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgfHwgaGlkZUV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciAkdGFyZ2V0ID0gJChzZWxlY3RvcilcblxuICAgIHRoaXMuYWN0aXZhdGUoJHRoaXMuY2xvc2VzdCgnbGknKSwgJHVsKVxuICAgIHRoaXMuYWN0aXZhdGUoJHRhcmdldCwgJHRhcmdldC5wYXJlbnQoKSwgZnVuY3Rpb24gKCkge1xuICAgICAgJHByZXZpb3VzLnRyaWdnZXIoe1xuICAgICAgICB0eXBlOiAnaGlkZGVuLmJzLnRhYicsXG4gICAgICAgIHJlbGF0ZWRUYXJnZXQ6ICR0aGlzWzBdXG4gICAgICB9KVxuICAgICAgJHRoaXMudHJpZ2dlcih7XG4gICAgICAgIHR5cGU6ICdzaG93bi5icy50YWInLFxuICAgICAgICByZWxhdGVkVGFyZ2V0OiAkcHJldmlvdXNbMF1cbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIFRhYi5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyLCBjYWxsYmFjaykge1xuICAgIHZhciAkYWN0aXZlICAgID0gY29udGFpbmVyLmZpbmQoJz4gLmFjdGl2ZScpXG4gICAgdmFyIHRyYW5zaXRpb24gPSBjYWxsYmFja1xuICAgICAgJiYgJC5zdXBwb3J0LnRyYW5zaXRpb25cbiAgICAgICYmICgkYWN0aXZlLmxlbmd0aCAmJiAkYWN0aXZlLmhhc0NsYXNzKCdmYWRlJykgfHwgISFjb250YWluZXIuZmluZCgnPiAuZmFkZScpLmxlbmd0aClcblxuICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAkYWN0aXZlXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYWN0aXZlJylcbiAgICAgICAgLmZpbmQoJz4gLmRyb3Bkb3duLW1lbnUgPiAuYWN0aXZlJylcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXG4gICAgICAgIC5lbmQoKVxuICAgICAgICAuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJylcbiAgICAgICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxuXG4gICAgICBlbGVtZW50XG4gICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScpXG4gICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICBlbGVtZW50WzBdLm9mZnNldFdpZHRoIC8vIHJlZmxvdyBmb3IgdHJhbnNpdGlvblxuICAgICAgICBlbGVtZW50LmFkZENsYXNzKCdpbicpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKCdmYWRlJylcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnQucGFyZW50KCcuZHJvcGRvd24tbWVudScpLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50XG4gICAgICAgICAgLmNsb3Nlc3QoJ2xpLmRyb3Bkb3duJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAuZW5kKClcbiAgICAgICAgICAuZmluZCgnW2RhdGEtdG9nZ2xlPVwidGFiXCJdJylcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgdHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgIH1cblxuICAgICRhY3RpdmUubGVuZ3RoICYmIHRyYW5zaXRpb24gP1xuICAgICAgJGFjdGl2ZVxuICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBuZXh0KVxuICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoVGFiLlRSQU5TSVRJT05fRFVSQVRJT04pIDpcbiAgICAgIG5leHQoKVxuXG4gICAgJGFjdGl2ZS5yZW1vdmVDbGFzcygnaW4nKVxuICB9XG5cblxuICAvLyBUQUIgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbikge1xuICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgdmFyICR0aGlzID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgID0gJHRoaXMuZGF0YSgnYnMudGFiJylcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy50YWInLCAoZGF0YSA9IG5ldyBUYWIodGhpcykpKVxuICAgICAgaWYgKHR5cGVvZiBvcHRpb24gPT0gJ3N0cmluZycpIGRhdGFbb3B0aW9uXSgpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLnRhYlxuXG4gICQuZm4udGFiICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4udGFiLkNvbnN0cnVjdG9yID0gVGFiXG5cblxuICAvLyBUQUIgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09XG5cbiAgJC5mbi50YWIubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAkLmZuLnRhYiA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIFRBQiBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT1cblxuICB2YXIgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBQbHVnaW4uY2FsbCgkKHRoaXMpLCAnc2hvdycpXG4gIH1cblxuICAkKGRvY3VtZW50KVxuICAgIC5vbignY2xpY2suYnMudGFiLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cInRhYlwiXScsIGNsaWNrSGFuZGxlcilcbiAgICAub24oJ2NsaWNrLmJzLnRhYi5kYXRhLWFwaScsICdbZGF0YS10b2dnbGU9XCJwaWxsXCJdJywgY2xpY2tIYW5kbGVyKVxuXG59KGpRdWVyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvdGFiL3RhYi5qcyIsIi8vLS0tLS1jb2xsYXBzZSBib290c3RyYXBcbnJlcXVpcmUoJy4vY29sbGFwc2UnKTtcblxuaW1wb3J0IEFQUCBmcm9tICcuLi9hcHAnO1xuXG5BUFAuY29sbGFwc2UgPSB7XG5cbiAgICBpbml0OiBmdW5jdGlvbigpe1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9jb2xsYXBzZS9pbmRleC5qcyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiBjb2xsYXBzZS5qcyB2My4zLjdcbiAqIGh0dHA6Ly9nZXRib290c3RyYXAuY29tL2phdmFzY3JpcHQvI2NvbGxhcHNlXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKiBqc2hpbnQgbGF0ZWRlZjogZmFsc2UgKi9cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDT0xMQVBTRSBQVUJMSUMgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIHZhciBDb2xsYXBzZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgdGhpcy4kZWxlbWVudCAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMub3B0aW9ucyAgICAgICA9ICQuZXh0ZW5kKHt9LCBDb2xsYXBzZS5ERUZBVUxUUywgb3B0aW9ucylcbiAgICB0aGlzLiR0cmlnZ2VyICAgICAgPSAkKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycgKyBlbGVtZW50LmlkICsgJ1wiXSwnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtkYXRhLXRhcmdldD1cIiMnICsgZWxlbWVudC5pZCArICdcIl0nKVxuICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IG51bGxcblxuICAgIGlmICh0aGlzLm9wdGlvbnMucGFyZW50KSB7XG4gICAgICB0aGlzLiRwYXJlbnQgPSB0aGlzLmdldFBhcmVudCgpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkQXJpYUFuZENvbGxhcHNlZENsYXNzKHRoaXMuJGVsZW1lbnQsIHRoaXMuJHRyaWdnZXIpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3B0aW9ucy50b2dnbGUpIHRoaXMudG9nZ2xlKClcbiAgfVxuXG4gIENvbGxhcHNlLlZFUlNJT04gID0gJzMuMy43J1xuXG4gIENvbGxhcHNlLlRSQU5TSVRJT05fRFVSQVRJT04gPSAzNTBcblxuICBDb2xsYXBzZS5ERUZBVUxUUyA9IHtcbiAgICB0b2dnbGU6IHRydWVcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5kaW1lbnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhc1dpZHRoID0gdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnd2lkdGgnKVxuICAgIHJldHVybiBoYXNXaWR0aCA/ICd3aWR0aCcgOiAnaGVpZ2h0J1xuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdpbicpKSByZXR1cm5cblxuICAgIHZhciBhY3RpdmVzRGF0YVxuICAgIHZhciBhY3RpdmVzID0gdGhpcy4kcGFyZW50ICYmIHRoaXMuJHBhcmVudC5jaGlsZHJlbignLnBhbmVsJykuY2hpbGRyZW4oJy5pbiwgLmNvbGxhcHNpbmcnKVxuXG4gICAgaWYgKGFjdGl2ZXMgJiYgYWN0aXZlcy5sZW5ndGgpIHtcbiAgICAgIGFjdGl2ZXNEYXRhID0gYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgICBpZiAoYWN0aXZlc0RhdGEgJiYgYWN0aXZlc0RhdGEudHJhbnNpdGlvbmluZykgcmV0dXJuXG4gICAgfVxuXG4gICAgdmFyIHN0YXJ0RXZlbnQgPSAkLkV2ZW50KCdzaG93LmJzLmNvbGxhcHNlJylcbiAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoc3RhcnRFdmVudClcbiAgICBpZiAoc3RhcnRFdmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICBpZiAoYWN0aXZlcyAmJiBhY3RpdmVzLmxlbmd0aCkge1xuICAgICAgUGx1Z2luLmNhbGwoYWN0aXZlcywgJ2hpZGUnKVxuICAgICAgYWN0aXZlc0RhdGEgfHwgYWN0aXZlcy5kYXRhKCdicy5jb2xsYXBzZScsIG51bGwpXG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbiA9IHRoaXMuZGltZW5zaW9uKClcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UnKVxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylbZGltZW5zaW9uXSgwKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy4kdHJpZ2dlclxuICAgICAgLnJlbW92ZUNsYXNzKCdjb2xsYXBzZWQnKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKVxuXG4gICAgdGhpcy50cmFuc2l0aW9uaW5nID0gMVxuXG4gICAgdmFyIGNvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAucmVtb3ZlQ2xhc3MoJ2NvbGxhcHNpbmcnKVxuICAgICAgICAuYWRkQ2xhc3MoJ2NvbGxhcHNlIGluJylbZGltZW5zaW9uXSgnJylcbiAgICAgIHRoaXMudHJhbnNpdGlvbmluZyA9IDBcbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLnRyaWdnZXIoJ3Nob3duLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdmFyIHNjcm9sbFNpemUgPSAkLmNhbWVsQ2FzZShbJ3Njcm9sbCcsIGRpbWVuc2lvbl0uam9pbignLScpKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eShjb21wbGV0ZSwgdGhpcykpXG4gICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoQ29sbGFwc2UuVFJBTlNJVElPTl9EVVJBVElPTilbZGltZW5zaW9uXSh0aGlzLiRlbGVtZW50WzBdW3Njcm9sbFNpemVdKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudHJhbnNpdGlvbmluZyB8fCAhdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSkgcmV0dXJuXG5cbiAgICB2YXIgc3RhcnRFdmVudCA9ICQuRXZlbnQoJ2hpZGUuYnMuY29sbGFwc2UnKVxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihzdGFydEV2ZW50KVxuICAgIGlmIChzdGFydEV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHZhciBkaW1lbnNpb24gPSB0aGlzLmRpbWVuc2lvbigpXG5cbiAgICB0aGlzLiRlbGVtZW50W2RpbWVuc2lvbl0odGhpcy4kZWxlbWVudFtkaW1lbnNpb25dKCkpWzBdLm9mZnNldEhlaWdodFxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgLmFkZENsYXNzKCdjb2xsYXBzaW5nJylcbiAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2UgaW4nKVxuICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcblxuICAgIHRoaXMuJHRyaWdnZXJcbiAgICAgIC5hZGRDbGFzcygnY29sbGFwc2VkJylcbiAgICAgIC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXG5cbiAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAxXG5cbiAgICB2YXIgY29tcGxldGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25pbmcgPSAwXG4gICAgICB0aGlzLiRlbGVtZW50XG4gICAgICAgIC5yZW1vdmVDbGFzcygnY29sbGFwc2luZycpXG4gICAgICAgIC5hZGRDbGFzcygnY29sbGFwc2UnKVxuICAgICAgICAudHJpZ2dlcignaGlkZGVuLmJzLmNvbGxhcHNlJylcbiAgICB9XG5cbiAgICBpZiAoISQuc3VwcG9ydC50cmFuc2l0aW9uKSByZXR1cm4gY29tcGxldGUuY2FsbCh0aGlzKVxuXG4gICAgdGhpcy4kZWxlbWVudFxuICAgICAgW2RpbWVuc2lvbl0oMClcbiAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsICQucHJveHkoY29tcGxldGUsIHRoaXMpKVxuICAgICAgLmVtdWxhdGVUcmFuc2l0aW9uRW5kKENvbGxhcHNlLlRSQU5TSVRJT05fRFVSQVRJT04pXG4gIH1cblxuICBDb2xsYXBzZS5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXNbdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnaW4nKSA/ICdoaWRlJyA6ICdzaG93J10oKVxuICB9XG5cbiAgQ29sbGFwc2UucHJvdG90eXBlLmdldFBhcmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gJCh0aGlzLm9wdGlvbnMucGFyZW50KVxuICAgICAgLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2RhdGEtcGFyZW50PVwiJyArIHRoaXMub3B0aW9ucy5wYXJlbnQgKyAnXCJdJylcbiAgICAgIC5lYWNoKCQucHJveHkoZnVuY3Rpb24gKGksIGVsZW1lbnQpIHtcbiAgICAgICAgdmFyICRlbGVtZW50ID0gJChlbGVtZW50KVxuICAgICAgICB0aGlzLmFkZEFyaWFBbmRDb2xsYXBzZWRDbGFzcyhnZXRUYXJnZXRGcm9tVHJpZ2dlcigkZWxlbWVudCksICRlbGVtZW50KVxuICAgICAgfSwgdGhpcykpXG4gICAgICAuZW5kKClcbiAgfVxuXG4gIENvbGxhcHNlLnByb3RvdHlwZS5hZGRBcmlhQW5kQ29sbGFwc2VkQ2xhc3MgPSBmdW5jdGlvbiAoJGVsZW1lbnQsICR0cmlnZ2VyKSB7XG4gICAgdmFyIGlzT3BlbiA9ICRlbGVtZW50Lmhhc0NsYXNzKCdpbicpXG5cbiAgICAkZWxlbWVudC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgaXNPcGVuKVxuICAgICR0cmlnZ2VyXG4gICAgICAudG9nZ2xlQ2xhc3MoJ2NvbGxhcHNlZCcsICFpc09wZW4pXG4gICAgICAuYXR0cignYXJpYS1leHBhbmRlZCcsIGlzT3BlbilcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldFRhcmdldEZyb21UcmlnZ2VyKCR0cmlnZ2VyKSB7XG4gICAgdmFyIGhyZWZcbiAgICB2YXIgdGFyZ2V0ID0gJHRyaWdnZXIuYXR0cignZGF0YS10YXJnZXQnKVxuICAgICAgfHwgKGhyZWYgPSAkdHJpZ2dlci5hdHRyKCdocmVmJykpICYmIGhyZWYucmVwbGFjZSgvLiooPz0jW15cXHNdKyQpLywgJycpIC8vIHN0cmlwIGZvciBpZTdcblxuICAgIHJldHVybiAkKHRhcmdldClcbiAgfVxuXG5cbiAgLy8gQ09MTEFQU0UgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICAgIHZhciBkYXRhICAgID0gJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnKVxuICAgICAgdmFyIG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgQ29sbGFwc2UuREVGQVVMVFMsICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PSAnb2JqZWN0JyAmJiBvcHRpb24pXG5cbiAgICAgIGlmICghZGF0YSAmJiBvcHRpb25zLnRvZ2dsZSAmJiAvc2hvd3xoaWRlLy50ZXN0KG9wdGlvbikpIG9wdGlvbnMudG9nZ2xlID0gZmFsc2VcbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuY29sbGFwc2UnLCAoZGF0YSA9IG5ldyBDb2xsYXBzZSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dKClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4uY29sbGFwc2VcblxuICAkLmZuLmNvbGxhcHNlICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4uY29sbGFwc2UuQ29uc3RydWN0b3IgPSBDb2xsYXBzZVxuXG5cbiAgLy8gQ09MTEFQU0UgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmNvbGxhcHNlLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5jb2xsYXBzZSA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIENPTExBUFNFIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLmNvbGxhcHNlLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcblxuICAgIGlmICghJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB2YXIgJHRhcmdldCA9IGdldFRhcmdldEZyb21UcmlnZ2VyKCR0aGlzKVxuICAgIHZhciBkYXRhICAgID0gJHRhcmdldC5kYXRhKCdicy5jb2xsYXBzZScpXG4gICAgdmFyIG9wdGlvbiAgPSBkYXRhID8gJ3RvZ2dsZScgOiAkdGhpcy5kYXRhKClcblxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbilcbiAgfSlcblxufShqUXVlcnkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL2NvbGxhcHNlL2NvbGxhcHNlLmpzIiwiaW1wb3J0IEFQUCBmcm9tICcuLi9hcHAnO1xyXG5cclxuaW1wb3J0IHRlbXBsYXRlIGZyb20gJy4vdGVtcGxhdGUnO1xyXG5cclxuQVBQLmFwYXJ0bWVudHMgPSB7XHJcbiAgICBjb250YWluZXI6ICcuYXBhcnRtZW50cy1saXN0JyxcclxuICAgIGxpbmtUb1JvdzogJyNhcGFydG1lbnRzLXJvdycsXHJcbiAgICBjb3VudGVyRGl2OiAnLmpzLWFwYXJ0bWVudHNfX2NvdW50JyxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgQVBQLmFwYXJ0bWVudHMuJGxpc3QgPSAgJChfdGhpcy5jb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICBfdGhpcy5yZW5kZXIoQVBQLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgJChcImFbaHJlZj0nXCIgKyBfdGhpcy5saW5rVG9Sb3cgKyBcIiddXCIpLm9uKCdzaG93bi5icy50YWInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBBUFAuaXNNYXBWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICAgQVBQLmFwYXJ0bWVudHMuJGxpc3QuYXBwZW5kKHRlbXBsYXRlLmdlbmVyYXRlVGVtcGxhdGUoZWwpKTtcclxuICAgICAgIH0pO1xyXG5cclxuICAgICAgIC8vLS0tLS0tLS1jb3VudGVyXHJcbiAgICAgICB2YXIgY291bnRlciA9IGRhdGEubGVuZ3RoO1xyXG4gICAgICAgdmFyICRjb3VudGVyRGl2ID0gJChfdGhpcy5jb3VudGVyRGl2KTtcclxuICAgICAgIGlmKGNvdW50ZXIgPT09IDEpe1xyXG4gICAgICAgICAgICRjb3VudGVyRGl2LnRleHQoY291bnRlciArICcgb2ZmZXInKTtcclxuICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICRjb3VudGVyRGl2LnRleHQoY291bnRlciArICcgb2ZmZXJzJyk7XHJcbiAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUFwYXJ0bWVudHM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgQVBQLmFwYXJ0bWVudHMuJGxpc3QuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgaWYoIUFQUC5maWx0ZXJMaXN0Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcihBUFAuZGF0YSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZEFwYXJ0bWVudHMgPSBBUFAuZGF0YS5maWx0ZXIoZnVuY3Rpb24oZWwpe1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0YXR1cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgQVBQLmZpbHRlckxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGVsLmNvbWZvcnQuaW5kZXhPZihBUFAuZmlsdGVyTGlzdFtpXSkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXR1cztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIF90aGlzLnJlbmRlcihmaWx0ZXJlZEFwYXJ0bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvYXBhcnRtZW50cy9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzLmdlbmVyYXRlVGVtcGxhdGUgPSBmdW5jdGlvbihkYXRhKXtcclxuICAgIHJldHVybiBgPGxpPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImFwYXJ0bWVudC1pdGVtXCIgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhcGFydG1lbnQtaXRlbV9faW1nXCIgc3JjPVwiJHtkYXRhLmltZ31cIiBhbHQ9XCJpbWdcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXBhcnRtZW50LWl0ZW1fX2JvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXBhcnRtZW50LWl0ZW1fX25hbWVcIj4ke2RhdGEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYXBhcnRtZW50LWl0ZW1fX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24tZXVyb1wiPuKCrDwvc3Bhbj4gJHtkYXRhLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPmBcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2pzL2NvbXBvbmVudHMvYXBhcnRtZW50cy90ZW1wbGF0ZS5qcyIsImltcG9ydCBBUFAgZnJvbSAnLi4vYXBwJztcclxuXHJcblxyXG5BUFAuZmlsdGVyID0ge1xyXG4gICAgY2hlY2tib3g6ICcuanMtY2hlY2tib3gtZmlsdGVyJyxcclxuICAgIGlucHV0RmlsdGVyOiAnLmpzLWZpbHRlci1zZWFyY2hfX2lucHV0JyxcclxuICAgIGZpbHRlckNvbnRyb2w6ICcuZmlsdGVyLXNlYXJjaF9fY29udHJvbCcsXHJcbiAgICBmaWxlclRhZ3M6ICcuanMtZmlsdGVyLXRhZ3MnLFxyXG4gICAgZmlsdGVyVGFnOiAnLmpzLWZpbHRlci10YWcnLFxyXG4gICAgZmlsdGVyU2VhcmNoVGFnczogJy5qcy1maWx0ZXItc2VhcmNoX19saXN0LXRhZ3MnLFxyXG4gICAgZmlsdGVyU2VhcmNoVGFnOiAnLmpzLXNlYXJjaC1maWx0ZXItdGFnJyxcclxuICAgIGZpbHRlclNlYXJjaExpc3Q6ICcuanMtZmlsdGVyLXNlYXJjaF9fbGlzdCcsXHJcbiAgICBmaWx0ZXJTZWFyY2hMaTogJ2pzLXNlYXJjaC1maWx0ZXItbGknLFxyXG4gICAgZmlsdGVyZWRMaXN0OiBbXSxcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgX3RoaXMuY2hlY2tib3hDaGFuZ2UoKTtcclxuICAgICAgICAgICAgX3RoaXMuZmlsdGVyVGFnQ2xpY2soKTtcclxuICAgICAgICAgICAgX3RoaXMuZm9jdXNJbnB1dEZpbHRlcigpO1xyXG4gICAgICAgICAgICBfdGhpcy5jbGlja091dHNpZGVTZWFyY2hMaXN0KCk7XHJcbiAgICAgICAgICAgIF90aGlzLmNsaWNrRmlsdGVyU2VhcmNoTGkoKTtcclxuICAgICAgICAgICAgX3RoaXMua2V5dXBJbnB1dEZpbHRlcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBmb2N1c0lucHV0RmlsdGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyICRmaWx0ZXJTZWFyY2hMaXN0ID0gJChfdGhpcy5maWx0ZXJTZWFyY2hMaXN0KTtcclxuICAgICAgICAkKF90aGlzLmlucHV0RmlsdGVyKS5mb2N1cyhmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAkKHRoaXMpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgICRmaWx0ZXJTZWFyY2hMaXN0LmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlU2VhcmNoRmlsdGVyTGlzdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKF90aGlzLmZpbHRlckNvbnRyb2wpLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICBpZihlLnRhcmdldC5jbGFzc05hbWUgPT0gJ2ZpbHRlci1zZWFyY2hfX2NvbnRyb2wnIHx8IGUudGFyZ2V0LmNsYXNzTmFtZSA9PSAnaWNvbi1zZWFyY2gnKXtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKF90aGlzLmlucHV0RmlsdGVyKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfSwxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xpY2tPdXRzaWRlU2VhcmNoTGlzdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciAkbGlzdCA9ICQoX3RoaXMuZmlsdGVyU2VhcmNoTGlzdCk7XHJcblxyXG4gICAgICAgICQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSAhPT0gX3RoaXMuZmlsdGVyU2VhcmNoTGkpIHtcclxuICAgICAgICAgICAgICAgIGlmKGUudGFyZ2V0LmlkICE9PSAnZmlsdGVyLWlucHV0Jyl7XHJcbiAgICAgICAgICAgICAgICAgICAgJGxpc3QucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNsaWNrRmlsdGVyU2VhcmNoTGk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgJCgnYm9keScpLm9uKCAnY2xpY2snLCAnLicgKyBfdGhpcy5maWx0ZXJTZWFyY2hMaSwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSAkKHRoaXMpLmRhdGEoJ25hbWUnKTtcclxuICAgICAgICAgICAgQVBQLmZpbHRlckxpc3QucHVzaCh0YWdOYW1lKTtcclxuXHJcbiAgICAgICAgICAgICQoX3RoaXMuY2hlY2tib3ggKyBcIlt2YWx1ZT0nXCIgKyB0YWdOYW1lICtcIiddXCIpLnByb3AoXCJjaGVja2VkXCIsdHJ1ZSk7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS1oaWRlIGxpc3RcclxuICAgICAgICAgICAgJChfdGhpcy5maWx0ZXJTZWFyY2hMaXN0KS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLWNsZWFyIGlucHV0XHJcbiAgICAgICAgICAgICQoX3RoaXMuaW5wdXRGaWx0ZXIpLnZhbCgnJyk7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tdXBkYXRlIG5ldyBsaXN0IHRhZ3NcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlRmlsdGVyVGFnKCk7XHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZVNlYXJjaEZpbHRlclRhZygpO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTZWFyY2hGaWx0ZXJMaXN0KCk7XHJcbiAgICAgICAgICAgIC8vLS0tLS0tdXBkYXRlIGFwYXJ0bWVudHNcclxuICAgICAgICAgICAgQVBQLmFwYXJ0bWVudHMudXBkYXRlQXBhcnRtZW50cygpO1xyXG5cclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLWlmIG1hcCBpcyBpbml0IGFuZCB2aXNpYmxlXHJcbiAgICAgICAgICAgIGlmKEFQUC5pc01hcFZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgQVBQLm1hcC51cGRhdGVNYXJrZXJzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAga2V5dXBJbnB1dEZpbHRlcjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciAkaW5wdXRGaWx0ZXIgPSAkKF90aGlzLmlucHV0RmlsdGVyKTtcclxuICAgICAgICB2YXIgJGZpbHRlclNlYXJjaExpc3QgPSAkKF90aGlzLmZpbHRlclNlYXJjaExpc3QpO1xyXG4gICAgICAgIHZhciAkZmlsdGVyQ29udHJvbCA9ICQoX3RoaXMuZmlsdGVyQ29udHJvbCk7XHJcblxyXG4gICAgICAgICRpbnB1dEZpbHRlci5jc3MoJ3dpZHRoJywgJGZpbHRlckNvbnRyb2wud2lkdGgoKSAtIDEzICArICdweCcpO1xyXG5cclxuICAgICAgICAkaW5wdXRGaWx0ZXIua2V5dXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgJGlucHV0RmlsdGVyLmNzcygnd2lkdGgnLCAkaW5wdXRGaWx0ZXIudmFsKCkubGVuZ3RoKjYgKyAxMCArICdweCcpO1xyXG5cclxuICAgICAgICAgICAgJGZpbHRlclNlYXJjaExpc3QuZW1wdHkoKTtcclxuXHJcbiAgICAgICAgICAgIF90aGlzLmZpbHRlcmVkTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgICAgIGlmKGVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZigkaW5wdXRGaWx0ZXIudmFsKCkudG9Mb3dlckNhc2UoKSkgPj0gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAkZmlsdGVyU2VhcmNoTGlzdC5hcHBlbmQoYDxsaSBjbGFzcz1cImpzLXNlYXJjaC1maWx0ZXItbGlcIiBkYXRhLW5hbWU9XCIke2VsfVwiPiR7ZWx9PC9saT5gKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGNoZWNrYm94Q2hhbmdlOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbiggJ2NoYW5nZScsX3RoaXMuY2hlY2tib3gsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciAkZmlsdGVyID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlclZhbCA9ICRmaWx0ZXIudmFsKCk7XHJcblxyXG4gICAgICAgICAgICBpZigkZmlsdGVyLmlzKCc6Y2hlY2tlZCcpKXtcclxuICAgICAgICAgICAgICAgIEFQUC5maWx0ZXJMaXN0LnB1c2goZmlsdGVyVmFsKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBBUFAuZmlsdGVyTGlzdC5zcGxpY2UoQVBQLmZpbHRlckxpc3QuaW5kZXhPZihmaWx0ZXJWYWwpLDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLy0tLS0tLXVwZGF0ZSBuZXcgbGlzdCB0YWdzXHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUZpbHRlclRhZygpO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTZWFyY2hGaWx0ZXJUYWcoKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlU2VhcmNoRmlsdGVyTGlzdCgpO1xyXG4gICAgICAgICAgICAvLy0tLS0tLXVwZGF0ZSBhcGFydG1lbnRzXHJcbiAgICAgICAgICAgIEFQUC5hcGFydG1lbnRzLnVwZGF0ZUFwYXJ0bWVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS1pZiBtYXAgaXMgaW5pdCBhbmQgdmlzaWJsZVxyXG4gICAgICAgICAgICBpZihBUFAuaXNNYXBWaXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIEFQUC5tYXAudXBkYXRlTWFya2VycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbHRlclRhZ0NsaWNrOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICAgICQoJ2JvZHknKS5vbiggJ2NsaWNrJywgX3RoaXMuZmlsdGVyVGFnICsgJywnICsgX3RoaXMuZmlsdGVyU2VhcmNoVGFnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9ICQodGhpcykuZGF0YSgnbmFtZScpO1xyXG4gICAgICAgICAgICBBUFAuZmlsdGVyTGlzdC5zcGxpY2UoQVBQLmZpbHRlckxpc3QuaW5kZXhPZih0YWdOYW1lKSwxKTtcclxuXHJcbiAgICAgICAgICAgICQoX3RoaXMuY2hlY2tib3ggKyBcIlt2YWx1ZT0nXCIgKyB0YWdOYW1lICtcIiddXCIpLnByb3AoXCJjaGVja2VkXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICAvLy0tLS0tLXVwZGF0ZSBuZXcgbGlzdCB0YWdzXHJcbiAgICAgICAgICAgIF90aGlzLnVwZGF0ZUZpbHRlclRhZygpO1xyXG4gICAgICAgICAgICBfdGhpcy51cGRhdGVTZWFyY2hGaWx0ZXJUYWcoKTtcclxuICAgICAgICAgICAgX3RoaXMudXBkYXRlU2VhcmNoRmlsdGVyTGlzdCgpO1xyXG4gICAgICAgICAgICAvLy0tLS0tLXVwZGF0ZSBhcGFydG1lbnRzXHJcbiAgICAgICAgICAgIEFQUC5hcGFydG1lbnRzLnVwZGF0ZUFwYXJ0bWVudHMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS1pZiBtYXAgaXMgaW5pdCBhbmQgdmlzaWJsZVxyXG4gICAgICAgICAgICBpZihBUFAuaXNNYXBWaXNpYmxlKXtcclxuICAgICAgICAgICAgICAgIEFQUC5tYXAudXBkYXRlTWFya2VycygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIHVwZGF0ZUZpbHRlclRhZzogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciAkZmlsdGVyVGFncyA9ICQoX3RoaXMuZmlsZXJUYWdzKTtcclxuXHJcbiAgICAgICAgJGZpbHRlclRhZ3MuZW1wdHkoKTtcclxuICAgICAgICBBUFAuZmlsdGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAkZmlsdGVyVGFncy5hcHBlbmQoYDxsaSBjbGFzcz1cImpzLWZpbHRlci10YWdcIiBkYXRhLW5hbWU9XCIke2VsfVwiPiR7ZWx9PC9saT5gKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgdXBkYXRlU2VhcmNoRmlsdGVyVGFnOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyICRmaWx0ZXJUYWdzID0gJChfdGhpcy5maWx0ZXJTZWFyY2hUYWdzKTtcclxuICAgICAgICB2YXIgJGlucHV0RmlsdGVyID0gJChfdGhpcy5pbnB1dEZpbHRlcik7XHJcbiAgICAgICAgdmFyICRmaWx0ZXJDb250cm9sID0gJChfdGhpcy5maWx0ZXJDb250cm9sKTtcclxuXHJcbiAgICAgICAgJGZpbHRlclRhZ3MuZW1wdHkoKTtcclxuICAgICAgICBBUFAuZmlsdGVyTGlzdC5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgJGZpbHRlclRhZ3MuYXBwZW5kKGA8bGkgY2xhc3M9XCJqcy1zZWFyY2gtZmlsdGVyLXRhZ1wiIGRhdGEtbmFtZT1cIiR7ZWx9XCI+JHtlbH08L2xpPmApXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKEFQUC5maWx0ZXJMaXN0Lmxlbmd0aCAhPSAwKXtcclxuICAgICAgICAgICAgJGlucHV0RmlsdGVyLmNzcygnd2lkdGgnLCAnMTBweCcpO1xyXG4gICAgICAgICAgICAkaW5wdXRGaWx0ZXIuYXR0cihcInBsYWNlaG9sZGVyXCIsIFwiXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAkaW5wdXRGaWx0ZXIuY3NzKCd3aWR0aCcsICRmaWx0ZXJDb250cm9sLndpZHRoKCkgLSAxMyAgKyAncHgnKTtcclxuICAgICAgICAgICAgJGlucHV0RmlsdGVyLmF0dHIoXCJwbGFjZWhvbGRlclwiLCBcImVudGVyIHRoZSBuYW1lcyBvZiBhbWVuaXRpZXMgdGhhdCB5b3UgbmVlZCBpbiBhcGFydG1lbnRcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVTZWFyY2hGaWx0ZXJMaXN0OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgdmFyICRmaWx0ZXJTZWFyY2hMaXN0ID0gJChfdGhpcy5maWx0ZXJTZWFyY2hMaXN0KTtcclxuICAgICAgICAkZmlsdGVyU2VhcmNoTGlzdC5lbXB0eSgpO1xyXG4gICAgICAgIF90aGlzLmZpbHRlcmVkTGlzdC5sZW5ndGggPSAwOztcclxuXHJcbiAgICAgICAgQVBQLmRhdGFGaWx0ZXIuZm9yRWFjaChmdW5jdGlvbihlbCl7XHJcbiAgICAgICAgICAgaWYoQVBQLmZpbHRlckxpc3QuaW5kZXhPZihlbCkgPT0gLTEpe1xyXG4gICAgICAgICAgICAgICBfdGhpcy5maWx0ZXJlZExpc3QucHVzaChlbCk7XHJcbiAgICAgICAgICAgICAgICRmaWx0ZXJTZWFyY2hMaXN0LmFwcGVuZChgPGxpIGNsYXNzPVwianMtc2VhcmNoLWZpbHRlci1saVwiIGRhdGEtbmFtZT1cIiR7ZWx9XCI+JHtlbH08L2xpPmApXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvanMvY29tcG9uZW50cy9maWx0ZXIvaW5kZXguanMiLCJpbXBvcnQgQVBQIGZyb20gJy4uL2FwcCc7XHJcblxyXG5cclxuQVBQLm1hcCA9IHtcclxuICAgIGNvbnRhaW5lcjogJ21hcCcsXHJcbiAgICBsaW5rVG9NYXA6ICcjYXBhcnRtZW50cy1tYXAnLFxyXG4gICAgbWFya2VyczogW10sXHJcblxyXG4gICAgaW5pdDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICAgICAkKFwiYVtocmVmPSdcIiArIF90aGlzLmxpbmtUb01hcCArIFwiJ11cIikub24oJ3Nob3duLmJzLnRhYicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIF90aGlzLmNyZWF0ZU1hcCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0QXBhcnRtZW50czogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZighQVBQLmZpbHRlckxpc3QubGVuZ3RoKXtcclxuICAgICAgICAgICAgcmV0dXJuIEFQUC5kYXRhO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgZmlsdGVyZWRBcGFydG1lbnRzID0gQVBQLmRhdGEuZmlsdGVyKGZ1bmN0aW9uKGVsKXtcclxuICAgICAgICAgICAgICAgIHZhciBzdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IEFQUC5maWx0ZXJMaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZihlbC5jb21mb3J0LmluZGV4T2YoQVBQLmZpbHRlckxpc3RbaV0pID09IC0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRBcGFydG1lbnRzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgZ2V0TWFwUG9zaXRpb246IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICB2YXIgcG9zID0gWzAsMF07XHJcblxyXG4gICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICBwb3NbMF0gKz0gZGF0YVtpXS5sb2NhdGlvblswXTtcclxuICAgICAgICAgIHBvc1sxXSArPSBkYXRhW2ldLmxvY2F0aW9uWzFdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwb3NbMF0gPSBwb3NbMF0vZGF0YS5sZW5ndGg7XHJcbiAgICAgIHBvc1sxXSA9IHBvc1sxXS9kYXRhLmxlbmd0aDtcclxuXHJcbiAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU1hcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBwb3NpdGlvbiA9IF90aGlzLmdldE1hcFBvc2l0aW9uKEFQUC5kYXRhKTtcclxuICAgICAgICBBUFAuaXNNYXBWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAvKlxyXG4gICAgICAgICAqIGNyZWF0ZSBtYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBfdGhpcy5tYXBHb29nbGUgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKF90aGlzLmNvbnRhaW5lciksIHtcclxuICAgICAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKHBvc2l0aW9uWzBdLCBwb3NpdGlvblsxXSksXHJcbiAgICAgICAgICAgIHpvb206IDE4LFxyXG4gICAgICAgICAgICBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLFxyXG4gICAgICAgICAgICBkaXNhYmxlRGVmYXVsdFVJOiB0cnVlLFxyXG4gICAgICAgICAgICBzdHlsZXM6IF90aGlzLnN0eWxlTWFwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBhZGQgbWFya2VycyB0byBtYXBcclxuICAgICAgICAgKi9cclxuICAgICAgICBfdGhpcy51cGRhdGVNYXJrZXJzKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZU1hcmtlcjogZnVuY3Rpb24ob3B0aW9ucywgaHRtbCl7XHJcbiAgICAgICAgdmFyIGluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdygpO1xyXG4gICAgICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGlmIChodG1sKSB7XHJcbiAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93LnNldENvbnRlbnQoaHRtbCk7XHJcbiAgICAgICAgICAgICAgICBpbmZvV2luZG93Lm9wZW4ob3B0aW9ucy5tYXAsIHRoaXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1hcmtlcjtcclxuICAgIH0sXHJcblxyXG4gICAgY2xlYXJNYXBNYXJrZXJzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgQVBQLm1hcC5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIEFQUC5tYXAubWFya2Vyc1tpXS5zZXRNYXAobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGVNYXJrZXJzOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgX3RoaXMuY2xlYXJNYXBNYXJrZXJzKCk7XHJcbiAgICAgICAgQVBQLm1hcC5tYXJrZXJzID0gW107XHJcbiAgICAgICAgdmFyIGFwYXJ0bWVudHMgPSBfdGhpcy5nZXRBcGFydG1lbnRzKCk7XHJcblxyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYXBhcnRtZW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIEFQUC5tYXAubWFya2Vycy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgX3RoaXMuY3JlYXRlTWFya2VyKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhhcGFydG1lbnRzW2ldLmxvY2F0aW9uWzBdLCBhcGFydG1lbnRzW2ldLmxvY2F0aW9uWzFdKSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW1nL3Bpbi5wbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB7dGV4dDogJ+KCrCcgKyBhcGFydG1lbnRzW2ldLnByaWNlLCBjb2xvcjogXCJ3aGl0ZVwifSxcclxuICAgICAgICAgICAgICAgICAgICBtYXA6IF90aGlzLm1hcEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgfSwgXCI8c3Bhbj5cIiArIGFwYXJ0bWVudHNbaV0ubmFtZSArIFwiPC9zcGFuPlwiKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc3R5bGVNYXA6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2YyZjJmMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJsYW5kc2NhcGUubWFuX21hZGVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2Y1ZjVmM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5hdHRyYWN0aW9uXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLmF0dHJhY3Rpb25cIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLmJ1c2luZXNzXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHNcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuZ292ZXJubWVudFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLm1lZGljYWxcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2UyZTZlM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5wYXJrXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM3ZTljODNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGxhY2Vfb2Zfd29yc2hpcFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kuc2Nob29sXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaS5zcG9ydHNfY29tcGxleFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNjOGM4YzdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmhpZ2h3YXlcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJyb2FkLmxvY2FsXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5maWxsXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNkZGRkZGRcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LmxpbmVcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uLmFpcnBvcnRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy5pY29uXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uLmFpcnBvcnRcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0XCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdC5zdGF0aW9uLmJ1c1wiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuc3Ryb2tlXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiNjOGM4YzdcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0LnN0YXRpb24uYnVzXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dFwiLFxyXG4gICAgICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5LmZpbGxcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI2NkZDJkNFwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIFwic2F0dXJhdGlvblwiOiA1XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXHJcbiAgICAgICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeS5zdHJva2VcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHRcIixcclxuICAgICAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9qcy9jb21wb25lbnRzL21hcC9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVhBO0FBQ0E7QUFhQTs7Ozs7Ozs7QUNqQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQVFBO0FBQ0E7QUFJQTs7Ozs7Ozs7O0FDOUNBO0FBQ0E7Ozs7O0FBTEE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFGQTs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUVBOzs7Ozs7OztBQzFEQTs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7Ozs7Ozs7O0FDdkpBO0FBQ0E7Ozs7O0FBSkE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7QUNMQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUNuTkE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXREQTs7Ozs7Ozs7QUNKQTtBQUNBO0FBV0E7Ozs7Ozs7O0FDWkE7QUFDQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbE1BOzs7Ozs7OztBQ0hBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQURBO0FBRkE7QUFRQTtBQUNBO0FBRUE7QUFEQTtBQUhBO0FBU0E7QUFDQTtBQUVBO0FBREE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFFQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSkE7QUFVQTtBQUNBO0FBRUE7QUFEQTtBQUhBO0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUVBO0FBREE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFFQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSkE7QUFVQTtBQUNBO0FBRUE7QUFEQTtBQUlBO0FBREE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBREE7QUFKQTtBQVVBO0FBQ0E7QUFFQTtBQURBO0FBSEE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQURBO0FBSUE7QUFEQTtBQVBBO0FBYUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFEQTtBQUpBO0FBN2JBOzs7Iiwic291cmNlUm9vdCI6IiJ9