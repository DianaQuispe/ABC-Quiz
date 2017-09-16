function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}

let plane = ["images/plane.svg","Which is the oldest airline in the world?",['Avianca','KLM', 'Qantas']];
let male = ["images/ship.svg","Which is the largest port in the world?",['A Port of Shanghai',' Port of Singapore', 'Port of Rotterdam']];
let s = ["images/bycicle.svg","What is the longest distance cycling backwards?",['89.30km','675.10km', '337.60km']];
for( var i =0; i < plane.length; i++) {
  $('#imagenes').append('<h1>'+ plane[1]+ '</h1>')
  $('#questions').append('<h1>'+ plane[1]+ '</h1>')
}


