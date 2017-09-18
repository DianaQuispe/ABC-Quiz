"use strict";
function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
}
 const app = { 
  item: {
    num : 0,
    src : [ "images/plane.svg","images/ship.svg","images/bycicle.svg","images/bus.svg","images/car.svg"],
     questions : ["Which is the oldest airline in the world?","Which is the largest port in the world?","What is the longest distance cycling backwards?","What is the highest speed ever reached by a school bus?","What is the longest car trip on one tank of gas?"],
     answers : [['Avianca','KLM', 'Qantas'],['A Port of Shanghai',' Port of Singapore', 'Port of Rotterdam'],['89.30km','675.10km', '337.60km'],['590 km/h','320 km/h','245 km/h'],['2617 km','3568 km', '1732 km']],
    // question: "undefined",
    // answer:  undefined
  },
  init: function() {
   
    // var src = [ "images/plane.svg","images/ship.svg","images/bycicle.svg","images/bus.svg","images/car.svg","images/truck.svg"];
    // var questions = ["Which is the oldest airline in the world?","Which is the largest port in the world?","What is the longest distance cycling backwards?","What is the highest speed ever reached by a school bus?","What is the longest car trip on one tank of gas?"];
    // var answers = [['Avianca','KLM', 'Qantas'],['89.30km','675.10km', '337.60km'],['A Port of Shanghai',' Port of Singapore', 'Port of Rotterdam'],['590 km/h','320 km/h', '245 km/h'],['2617 km','3568 km', '1732 km']];
    
    $('#questions').empty();
    $('.answers').empty();
     $('#imagenes').attr('src', app.item.src[0]);
     $('#questions').append('<h1>'+ app.item.questions[0]+ '</h1>');
     
     for(var j=0; j< app.item.answers[0].length; j++) {
       $('.answers').append(`<div class="col-md-4">\
       <a href="#" id='${j}' class="'${j}'btn btnQuiz btn-default btn-block"><i class="fa fa-user"></i>'${app.item.answers[0][j]}'</a></div> ` );
      
     };
     app.setup();
 
  },
  setup: ()=>{
    $('.btnQuiz').click(function() {
      $(this).attr('id',app.item.num);
      console.log( $(this).id)
      app.item.src.shift();
      app.item.questions.shift();
      app.item.answers.shift();

     
      console.log("wss:"+app.item.num);
      

      app.init(); 
      app.item.num++;
         
    })
  },
  finish: function() {
    $('#questions').append('<h1>Here are you answers: </h1>');
    $('.answers').append(`<div class="col-md-4">\
     '${app.questions}'</div> ` );
   
    
    alert('fu');
  }
}

$(document).ready ( app.init );
