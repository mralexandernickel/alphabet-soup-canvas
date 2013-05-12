$ = jQuery

config =
  # the paper to draw
  paper: false
  # number of letters in the soup
  letter_count: 400
  # letters which are used to generate the soup
  alphabet: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  # define canvas width
  width: window.innerWidth
  # define canvas height
  height: window.innerHeight
  # we are extending this object with the canvas context on init()
  context: false
  # transitions supported by Raphael
  #transitions: []
  # defining the initial positions
  initial_positions_x: [-300..-30].concat [window.innerWidth+30..window.innerWidth+300]
  initial_positions_y: [-300..-30].concat [window.innerHeight+30..window.innerHeight+300]
  # defining rudimentary visible_positions
  visible_positions_x: [0..window.innerWidth]
  visible_positions_y: [0..window.innerHeight]
  # define possible font-sizes
  font_sizes: [12...128]
  # define rotate possibilities
  degrees: [0..360]
  # will hold the generated letters
  letters: []

methods =
  init: (options) ->
    config.paper = Raphael 0, 0, config.width, config.height
    methods.create_letters()
  
  create_letters: ->
    while config.letter_count -= 1
      # define the letter
      letter = config.paper.text methods.get_random_array_item(config.initial_positions_x), methods.get_random_array_item(config.initial_positions_y), methods.get_random_letter()
      letter.attr "fill", "#000"
      letter.attr "font", "#{methods.get_random_font_size()}px Arial"
      # push letter to config.letters
      config.letters.push letter
    methods.animate_letters()
  
  animate_letters: ->
    for letter in config.letters
      letter.animate
        #transform: "r#{methods.get_random_degrees()}"
        x: methods.get_random_array_item(config.visible_positions_x)
        y: methods.get_random_array_item(config.visible_positions_x)
      , 3000
  
  get_random_letter: -> methods.get_random_array_item config.alphabet
  
  get_random_degrees: -> methods.get_random_array_item config.degrees
  
  get_random_font_size: -> methods.get_random_array_item config.font_sizes
  
  get_random_array_item: (array) -> array[Math.floor(Math.random()*array.length)]

$.alphabet_soup = (method,options...) ->
  if methods[method]
    methods[method].apply this, options
  else if typeof method is "object" or not method
    methods.init.apply this, arguments
  else
    $.error "Method #{method} doesn't exist in the Alphabet Soup!"