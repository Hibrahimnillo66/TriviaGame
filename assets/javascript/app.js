$(document).ready(function(){

    $("#Start").on("click", function(){
        game.start();
    })

    $(document).on("click", "#end", function(){
        game.done();
    })

    var questions = [{
        question: "Who is the Highest Goal Scorer of All time?",
        answers:["Cristiano Ronaldo", "Leonel Messi", "Raúl González Blanco"],
        correctAnswer: "Cristiano Ronaldo"
    }, {
        question: "Who is the Team with more UCL Trophies?",
        answers:["Real Madrid", "Manchester United", "AC Milan"],
        correctAnswer: "Real Madrid",
    }, {
        question: "Who is the player with more Matches played in UCL history?",
        answers:["Leonel Messi", "Iker Casillas", "Gianluigi Buffon"],
        correctAnswer: "Iker Casillas"
    }, {
        question:"Clubs with most appearances in the UEFA Champions League",
        answers:["AFC Ajax", "Celtic FC", "Real Madrid"],
        correctAnswer:"Real Madrid"
    }, {
        question:"Player with more Assist in the history of the League",
        answers:["Ryan Giggs", "Cristiano Ronaldo","Zlatan Ibrahimovic"],
        correctAnswer: "Cristiano Ronaldo"
    }, {
        question: "Team with more lost Final in the History of the League ",
        answers:["Atlético Madrid", "Juventis", "Luverpool"],
        correctAnswer: "Atlético Madrid"
    }]

    var game = {
        correct: 0,
        incorrect: 0,
        counter: 20,
        countdown: function(){
            game.counter--;
            $("#counter").html(game.counter);
            if(game.counter <=0){
                console.log("Time is up!");
                game.done();
            }
        },
        start: function(){
            timer = setInterval(game.countdown, 1000);
            $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">20</span> Seconds </h2>');
            $("#Start").remove();
            for(var i = 0; i <questions.length; i++){
                $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
                for(var j = 0; j < questions[i].answers.length; j++){
                    $("#subwrapper").append("<input type='radio' name='question-"+ i +"' value='"+ questions[i].answers[j] + "'>" + questions[i].answers[j] + " ");
                }
            }
            $("#subwrapper").append('<br><button id= "end"> Done</button>');
        },
        done: function(){
            $.each($('input[name="question-0"]:checked'), function(){
                if($(this).val()==questions[0].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });
            $.each($('input[name="question-1"]:checked'), function(){
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            $.each($('input[name="question-2"]:checked'), function(){
                if($(this).val()==questions[2].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            $.each($('input[name="question-3"]:checked'), function(){
                if($(this).val()==questions[3].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            $.each($('input[name="question-4"]:checked'), function(){
                if($(this).val()==questions[4].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            $.each($('input[name="question-5"]:checked'), function(){
                if($(this).val()==questions[5].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            });

            this.result();

        },

        result: function(){
            clearInterval(timer);
            $('#subwrapper h2').remove();

            $("#subwrapper").html("<h2>All done!</h2>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.correct+"</h3>");
            $("#subwrapper").append("<h3>Correct Answers: "+this.incorrect+"</h3>");
            $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>")
        }
    }


});

