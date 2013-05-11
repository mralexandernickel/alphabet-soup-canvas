(function() {
  var $, config, methods, _i, _j, _results, _results1,
    __slice = [].slice;

  $ = jQuery;

  config = {
    canvas: false,
    letter_count: 100,
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    width: 600,
    height: 400,
    context: false,
    visible_positions_top: (function() {
      _results = [];
      for (_i = 0; _i <= 400; _i++){ _results.push(_i); }
      return _results;
    }).apply(this),
    visible_positions_left: (function() {
      _results1 = [];
      for (_j = 0; _j <= 600; _j++){ _results1.push(_j); }
      return _results1;
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
      var _results2;

      _results2 = [];
      while (config.letter_count -= 1) {
        config.context.fillStyle = "#fff";
        config.context.font = "30px sans-serif";
        config.context.textBaseline = "bottom";
        _results2.push(config.context.fillText(methods.get_random_letter(), methods.get_random_array_item(config.visible_positions_left), methods.get_random_array_item(config.visible_positions_top)));
      }
      return _results2;
    },
    set_canvas_dimensions: function() {
      config.canvas.width = config.width;
      return config.canvas.height = config.height;
    },
    show_letters: function() {},
    get_random_letter: function() {
      return methods.get_random_array_item(config.alphabet);
    },
    get_random_rotate: function() {
      return methods.get_random_array_item(config.rotate_degrees);
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
