(function() {
  $(function() {});

}).call(this);
(function() {
  var $, config, methods, _i, _j, _k, _l, _m, _n, _o, _p, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _results, _results1, _results2, _results3, _results4, _results5, _results6, _results7,
    __slice = [].slice;

  $ = jQuery;

  config = {
    paper: false,
    letter_count: 400,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    width: window.innerWidth,
    height: window.innerHeight,
    context: false,
    initial_positions_x: (function() {
      _results1 = [];
      for (_j = -300; _j <= -30; _j++){ _results1.push(_j); }
      return _results1;
    }).apply(this).concat((function() {
      _results = [];
      for (var _i = _ref = window.innerWidth + 30, _ref1 = window.innerWidth + 300; _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; _ref <= _ref1 ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this)),
    initial_positions_y: (function() {
      _results3 = [];
      for (_l = -300; _l <= -30; _l++){ _results3.push(_l); }
      return _results3;
    }).apply(this).concat((function() {
      _results2 = [];
      for (var _k = _ref2 = window.innerHeight + 30, _ref3 = window.innerHeight + 300; _ref2 <= _ref3 ? _k <= _ref3 : _k >= _ref3; _ref2 <= _ref3 ? _k++ : _k--){ _results2.push(_k); }
      return _results2;
    }).apply(this)),
    visible_positions_x: (function() {
      _results4 = [];
      for (var _m = 0, _ref4 = window.innerWidth; 0 <= _ref4 ? _m <= _ref4 : _m >= _ref4; 0 <= _ref4 ? _m++ : _m--){ _results4.push(_m); }
      return _results4;
    }).apply(this),
    visible_positions_y: (function() {
      _results5 = [];
      for (var _n = 0, _ref5 = window.innerHeight; 0 <= _ref5 ? _n <= _ref5 : _n >= _ref5; 0 <= _ref5 ? _n++ : _n--){ _results5.push(_n); }
      return _results5;
    }).apply(this),
    font_sizes: (function() {
      _results6 = [];
      for (_o = 12; _o < 128; _o++){ _results6.push(_o); }
      return _results6;
    }).apply(this),
    degrees: (function() {
      _results7 = [];
      for (_p = 0; _p <= 360; _p++){ _results7.push(_p); }
      return _results7;
    }).apply(this),
    letters: []
  };

  methods = {
    init: function(options) {
      config.paper = Raphael(0, 0, config.width, config.height);
      return methods.create_letters();
    },
    create_letters: function() {
      var letter;

      while (config.letter_count -= 1) {
        letter = config.paper.text(methods.get_random_array_item(config.initial_positions_x), methods.get_random_array_item(config.initial_positions_y), methods.get_random_letter());
        letter.attr("fill", "#000");
        letter.attr("font", "" + (methods.get_random_font_size()) + "px Arial");
        config.letters.push(letter);
      }
      return methods.animate_letters();
    },
    animate_letters: function() {
      var letter, _len, _q, _ref6, _results8;

      _ref6 = config.letters;
      _results8 = [];
      for (_q = 0, _len = _ref6.length; _q < _len; _q++) {
        letter = _ref6[_q];
        _results8.push(letter.animate({
          x: methods.get_random_array_item(config.visible_positions_x),
          y: methods.get_random_array_item(config.visible_positions_x)
        }, 3000));
      }
      return _results8;
    },
    get_random_letter: function() {
      return methods.get_random_array_item(config.alphabet);
    },
    get_random_degrees: function() {
      return methods.get_random_array_item(config.degrees);
    },
    get_random_font_size: function() {
      return methods.get_random_array_item(config.font_sizes);
    },
    get_random_array_item: function(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };

  $.alphabet_soup = function() {
    var method, options;

    method = arguments[0], options = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (methods[method]) {
      return methods[method].apply(this, options);
    } else if (typeof method === "object" || !method) {
      return methods.init.apply(this, arguments);
    } else {
      return $.error("Method " + method + " doesn't exist in the Alphabet Soup!");
    }
  };

}).call(this);
