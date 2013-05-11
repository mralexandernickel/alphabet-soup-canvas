$ = jQuery

config =
  # the plate
  canvas: false
  # number of letters in the soup
  letter_count: 500
  # letters which are used to generate the soup
  alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  # define canvas width
  width: window.innerWidth
  # define canvas height
  height: window.innerHeight
  # we are extending this object with the canvas context on init()
  context: false
  # transitions supported by ???
  #transitions: []
  # defining the initial positions
  #initial_positions: [-100..-5].concat [105..200]
  # defining rudimentary visible_positions to get a more exciting closing today ;-)
  visible_positions_top: [0..window.innerHeight]
  visible_positions_left: [0..window.innerWidth]
  # define possible font-sizes
  font_sizes: [12...128]
  # define rotate possibilities
  degrees: [0..360]

methods =
  init: (options) ->
    config.canvas = this[0]
    config.context = config.canvas.getContext "2d"
    methods.set_canvas_dimensions()
    methods.create_letters()
  
  create_letters: ->
    while config.letter_count -= 1
      config.context.save()
      
      # define the letter configuration
      current_letter =
        letter: methods.get_random_letter()
        position:
          x: methods.get_random_array_item(config.visible_positions_left)
          y: methods.get_random_array_item(config.visible_positions_top)
      
      # set the canvas center to the point where we draw our letter
      config.context.translate current_letter.position.x, current_letter.position.y
      
      config.context.fillStyle = "#fff"
      config.context.font = "#{methods.get_random_array_item(config.font_sizes)}px sans-serif"
      config.context.textBaseline = "middle"
      config.context.rotate methods.degrees_to_radians(methods.get_random_degrees())
      config.context.fillText current_letter.letter, current_letter.position.x, current_letter.position.y
      config.context.restore()
  
  set_canvas_dimensions: ->
    config.canvas.width = config.width
    config.canvas.height = config.height
  
  # 
  #  conversion from degrees to radians
  #  
  #  @author Alexander Nickel <mr.alexander.nickel@gmail.com>
  #  @date 2013-05-11T19:11:46Z
  #
  #  @see http://en.wikipedia.org/wiki/Radian
  # 
  degrees_to_radians: (degrees) -> degrees * (Math.PI / 180)
  
  show_letters: ->
  
  get_random_letter: -> methods.get_random_array_item config.alphabet
  
  get_random_degrees: -> methods.get_random_array_item config.degrees
  
  get_random_array_item: (array) -> array[Math.floor(Math.random()*array.length)]

$.fn.alphabet_soup = (method,options...) ->
  if methods[method]
    methods[method].apply this, options
  else if typeof method is "object" or not method
    methods.init.apply this, arguments
  else
    $.error "Method #{method} doesn't exist in the Alphabet Soup!"