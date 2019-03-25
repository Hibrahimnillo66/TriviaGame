$(document).ready(function(){

$("#Start").on("click", function(){
    game.start();
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
    questions: questions,
    currentQuestion: 0,
    correct: 0,
    incorrect: 0,
    counter: 20,
    countdown: function(){
        game.counter --;
        $("#counter").html(game.counter);
            if(game.counter <=0){
                console.log("Time is up!");
                game.timeUp();
            }
    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $("#subwrapper").html('<h2>'+ questions[game.currentQuestion].question + '</h2>');
    },
    nextQuestion: function(){

    },

    timeUp: function(){

    },

    results: function(){

    },
    clicked: function(){

    },
    answeredCorrectly: function(){

    },

    answeredIncorrectly: function(){

    },

    result: function (){

    },

}



















});