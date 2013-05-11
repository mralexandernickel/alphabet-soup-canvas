$ = jQuery

config =
  # the plate
  canvas: false
  # number of letters in the soup
  letter_count: 100
  # letters which are used to generate the soup
  alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  # define canvas width
  width: 600
  # define canvas height
  height: 400
  # we are extending this object with the canvas context on init()
  context: false
  # transitions supported by ???
  #transitions: []
  # defining the initial positions
  #initial_positions: [-100..-5].concat [105..200]
  # defining rudimentary visible_positions to get a more exciting closing today ;-)
  visible_positions_top: [0..400]
  visible_positions_left: [0..600]
  # define possible font-sizes
  #font_sizes: [12...128]
  # define rotate possibilities
  #rotate_degrees: [0..360]

methods =
  init: (options) ->
    config.canvas = this[0]
    config.context = config.canvas.getContext "2d"
    methods.set_canvas_dimensions()
    methods.create_letters()
  
  create_letters: ->
    while config.letter_count -= 1
      config.context.fillStyle = "#fff"
      config.context.font = "30px sans-serif"
      config.context.textBaseline = "bottom"
      config.context.fillText methods.get_random_letter(), methods.get_random_array_item(config.visible_positions_left), methods.get_random_array_item(config.visible_positions_top)
  
  set_canvas_dimensions: ->
    config.canvas.width = config.width
    config.canvas.height = config.height    
  
  show_letters: ->
  
  get_random_letter: -> methods.get_random_array_item config.alphabet
  
  get_random_rotate: -> methods.get_random_array_item config.rotate_degrees
  
  get_random_array_item: (array) -> array[Math.floor(Math.random()*array.length)]

$.fn.alphabet_soup = (method,options...) ->
  if methods[method]
    methods[method].apply this, options
  else if typeof method is "object" or not method
    methods.init.apply this, arguments
  else
    $.error "Method #{method} doesn't exist in the Alphabet Soup!"