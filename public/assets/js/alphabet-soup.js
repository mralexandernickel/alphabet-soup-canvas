(function() {
  $(function() {
    return $("#alphabet-soup").alphabet_soup();
  });

}).call(this);
(function() {
  var $, config, methods, _i, _j, _k, _l, _ref, _ref1, _results, _results1, _results2, _results3,
    __slice = [].slice;

  $ = jQuery;

  config = {
    canvas: false,
    letter_count: 500,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    width: window.innerWidth,
    height: window.innerHeight,
    context: false,
    visible_positions_top: (function() {
      _results = [];
      for (var _i = 0, _ref = window.innerHeight; 0 <= _ref ? _i <= _ref : _i >= _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this),
    visible_positions_left: (function() {
      _results1 = [];
      for (var _j = 0, _ref1 = window.innerWidth; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; 0 <= _ref1 ? _j++ : _j--){ _results1.push(_j); }
      return _results1;
    }).apply(this),
    font_sizes: (function() {
      _results2 = [];
      for (_k = 12; _k < 128; _k++){ _results2.push(_k); }
      return _results2;
    }).apply(this),
    degrees: (function() {
      _results3 = [];
      for (_l = 0; _l <= 360; _l++){ _results3.push(_l); }
      return _results3;
    }).apply(this)
  };

  methods = {
    init: function(options) {
      config.canvas = this[0];
      config.context = config.canvas.getContext("2d");
      methods.set_canvas_dimensions();
      return methods.create_letters();
    },
    create_letters: function() {
      var current_letter, _results4;

      _results4 = [];
      while (config.letter_count -= 1) {
        config.context.save();
        current_letter = {
          letter: methods.get_random_letter(),
          position: {
            x: methods.get_random_array_item(config.visible_positions_left),
            y: methods.get_random_array_item(config.visible_positions_top)
          }
        };
        config.context.translate(current_letter.position.x, current_letter.position.y);
        config.context.fillStyle = "#fff";
        config.context.font = "" + (methods.get_random_array_item(config.font_sizes)) + "px sans-serif";
        config.context.textBaseline = "middle";
        config.context.rotate(methods.degrees_to_radians(methods.get_random_degrees()));
        config.context.fillText(current_letter.letter, current_letter.position.x, current_letter.position.y);
        _results4.push(config.context.restore());
      }
      return _results4;
    },
    set_canvas_dimensions: function() {
      config.canvas.width = config.width;
      return config.canvas.height = config.height;
    },
    degrees_to_radians: function(degrees) {
      return degrees * (Math.PI / 180);
    },
    show_letters: function() {},
    get_random_letter: function() {
      return methods.get_random_array_item(config.alphabet);
    },
    get_random_degrees: function() {
      return methods.get_random_array_item(config.degrees);
    },
    get_random_array_item: function(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };

  $.fn.alphabet_soup = function() {
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
