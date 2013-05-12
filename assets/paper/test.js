var get_random_array_item = function(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var degrees, _i, _results;

degrees = (function() {
  _results = [];
  for (_i = 0; _i <= 360; _i++){ _results.push(_i); }
  return _results;
}).apply(this);

// The amount of circles we want to make:
var count = 150;

var symbols = [];

for (var i = 0; i < letters.length; i++) {
  var letter = new PointText({
    point: Point.random() * view.size,
    justification: 'center',
    fontSize: 30,
    fillColor: 'white',
    content: get_random_array_item(letters)
  });
  var symbol = new Symbol(letter);
  symbols.push(symbol);
}

// Place the instances of the symbol:
for (var i = 0; i < count; i++) {
    // The center position is a random point in the view:
    var center = Point.random() * view.size;
    var placedSymbol = get_random_array_item(symbols).place(center);
    placedSymbol.scale(i / count);
    placedSymbol.rotate(get_random_array_item(degrees));
}

// The onFrame function is called up to 60 times a second:
function onFrame(event) {
    // Run through the active layer's children list and change
    // the position of the placed symbols:
    for (var i = 0; i < count; i++) {
        var item = project.activeLayer.children[i];
        
        if (!(item.bounds.top)) {
          
        }
        // Move the item 1/20th of its width to the right. This way
        // larger circles move faster than smaller circles:
        item.position.y += item.bounds.width / 10;
        // If the item has left the view on the right, move it back
        // to the left:
        if (item.bounds.top > view.size.height) {
            item.position.y = -item.bounds.height;
        }
        
        item.rotate(item.bounds.width / 100);
    }
}
/*
var config = {
  letter_count: 10,
  letters: []
}

while (config.letter_count -= 1) {
  // Create a centered text item at the center of the view:
  var letter = new PointText({
    point: Point.random() * view.size,
    justification: 'center',
    fontSize: 30,
    fillColor: 'white',
    content: "A"
  });
  config.letters.push(letter);
}
var destination = Point.random() * view.size;
function onFrame(event) {
  $.each(config.letters, function(key,value){
    var vector = destination - value.position
    value.position += vector / 30;
    value.rotate(3);
    if (vector.length < 5) {
      destination = Point.random() * view.size;
      value.rotate(3);
    }
  })
}*/