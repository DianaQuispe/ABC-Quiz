"use strict";

function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}
const app = {
    item: {
        free: [],
        wee: [],
        num: 0,
        src: ["images/plane.svg", "images/ship.svg", "images/bycicle.svg", "images/bus.svg", "images/car.svg"],
        questions: ["Which is the oldest airline in the world?", "Which is the largest port in the world?", "What is the longest distance cycling backwards?", "What is the highest speed ever reached by a school bus?", "What is the longest car trip on one tank of gas?"],
        answers: [["Avianca", 'KLM', 'Qantas'], ['Port of Shanghai', ' Port of Singapore', 'Port of Rotterdam'], ['89.30km', '675.10km', '337.60km'], ['590 km/h', '320 km/h', '245 km/h'], ['2617 km', '3568 km', '1732 km']],
        goods: ["'KLM'", "'Port of Shanghai'", "'337.60km'", "'590 km/h'", "'2617 km'"],

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
            if (app.item.goods[app.item.num] == app.item.free[app.item.num]) {
                app.item.wee.push($(this).text())
                $(this).addClass("colorGreen");
            }
            console.log($(this).text());
            app.item.src.shift();
            app.item.questions.shift();
            app.item.answers.shift();
            app.init();
            app.item.num++;

        });
        if (app.item.num == 3) {
            app.finish();

        }
    },
    finish: function () {
        $('.contenedor').empty();
        $('#imagenes').attr('src', "images/truck.svg");
        $('.contenedor').append('<h1>Here are you answers: </h1>');
        $('.contenedor').append(`<div class="col-md-12">Which is the oldest airline in the world?<b> '${app.item.free[0]}'</b> </br> Which is the largest port in the world? <b>'${app.item.free[1]}</b>'</br> What is the longest distance cycling backwards? <b>'${app.item.free[2]}'</b></br> What is the highest speed ever reached by a school bus? <b>'${app.item.free[3]}'</b> </br> What is the longest car trip on one tank of gas? <b>590 km/h</b></div> `);
        $('.contenedor').append(`<button id="submit" type="submit" class="btn btn-primary" name="B1"> <span class="glyphicon glyophicon-shopping-cart"></span>Submit </button>`);

        app.submit();
    },
    submit: function () {
        $('#submit').click(function () {
            $('.contenedor').empty();
            $('.contenedor').attr('id', 'divInterno');


            $('.contenedor').append(`<h1>${app.item.wee.length} out of 5 correct!</h1>\
            <li>\
                <ul>Which is the oldest airline in the world?<b> TU RESPUESTA: <font color="blue">'${app.item.free[0]}'</b></font><b>RESPUESTA CORRECTA: <font color="green">'${app.item.goods[0]}'</b></font>  </ul>\
                <ul>Which is the largest port in the world? <b> TU RESPUESTA: <font color="blue">'${app.item.free[1]}'</b></font>><b>RESPUESTA CORRECTA: <font color="green">'${app.item.goods[1]}'</b></font></ul>\
                <ul>What is the longest distance cycling backwards? <b> TU RESPUESTA: <font color="blue">'${app.item.free[2]}'</b></font><b>RESPUESTA CORRECTA: <font color="green">'${app.item.goods[2]}'</b></font></ul>\
                <ul>What is the highest speed ever reached by a school bus? <b> TU RESPUESTA: <font color="blue">'${app.item.free[3]}'</b></font><b>RESPUESTA CORRECTA: <font color="green">'${app.item.goods[3]}'</b></font></ul>\
                <ul>What is the longest car trip on one tank of gas? <b> TU RESPUESTA: <font color="blue">'${app.item.free[4]}'</b></font></b><b>RESPUESTA CORRECTA:S <font color="green">'${app.item.goods[4]}'</b></font></ul>\

            </li>`);
            $('body').append(`<button id="play" type="submit" class="center-block btn btn-primary" name="B1"> <span class="glyphicon glyophicon-shopping-cart"></span>PLAY AGAIN </button>`);
            $('#play').click(function () {
                $('.contenedor').empty();
                app.init();


            })



        })
    }

}

$(document).ready(app.init);
