"use strict";

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
const app = {
    item: {
        letras: ['a', 'b', 'c'],
        free: [],
        wee: [],
        num: 0,
        src: ["images/plane.svg", "images/ship.svg", "images/bycicle.svg", "images/bus.svg", "images/car.svg"],
        questions: ["Which is the oldest airline in the world?", "Which is the largest port in the world?", "What is the longest distance cycling backwards?", "What is the highest speed ever reached by a school bus?", "What is the longest car trip on one tank of gas?"],
        answers: [["Avianca", 'KLM', 'Qantas'], ['A Port of Shanghai', ' Port of Singapore', 'Port of Rotterdam'], ['89.30km', '675.10km', '337.60km'], ['590 km/h', '320 km/h', '245 km/h'], ['2617 km', '3568 km', '1732 km']],
        goods: ["'KLM'", "'A Port of Shanghai'", "'337.60km'", "'590 km/h'", "'2617 km'"],

    },
    init: function () {

        $('#questions').empty();
        $('.answers').empty();
        $('#imagenes').attr('src', app.item.src[0]);
        $('#questions').append('<h1>' + app.item.questions[0] + '</h1>');

        for (var j = 0; j < app.item.answers[0].length; j++) {
            $('.answers').append(`<div class="col-md-4">\
       <a href="#" id='${j}' class="'${j}'btn btnQuiz btn-default btn-block"><i class="fa fa-user"></i>'${app.item.answers[0][j]}'</a></div> `);

        };
        app.setup();

    },
    setup: () => {
        $('.btnQuiz').click(function () {
            app.item.free.push($(this).text());
            if (app.item.goods[app.item.num] == app.item.free) {
                app.item.wee.push($(this).text())
            }
            console.log($(this).text());
            app.item.src.shift();
            app.item.questions.shift();
            app.item.answers.shift();
            app.init();
            app.item.num++;

        })
        if (app.item.num == 3) {
            app.finish();

        }
    },
    finish: function () {
        $('.contenedor').empty();
        $('#imagenes').attr('src', "images/truck.svg");
        $('.contenedor').append('<h1>Here are you answers: </h1>');
        $('.contenedor').append(`<div class="col-md-12">Which is the oldest airline in the world? '${app.item.free[0]}' </br> Which is the largest port in the world? '${app.item.free[1]}'</br> What is the longest distance cycling backwards? '${app.item.free[2]}'</br> What is the highest speed ever reached by a school bus? '${app.item.free[3]}'</br> What is the longest car trip on one tank of gas? '${app.item.free[4]}'</div> `);
        $('.contenedor').append(`<button id="submit" type="submit" class="btn btn-primary" name="B1"> <span class="glyphicon glyophicon-shopping-cart"></span>Submit </button>`);


    },
    submit: function {
        $('#submit').click(function () {

        })
    }


}

$(document).ready(app.init);
