// What's the name of Gru's dog? - Kyle
// What's the name of Gru's twin brother? - Dru
// Name the scientist that creates all Gru's inventions - Dr. Nefario
// Who was the main villian in Despicable Me 2? - El Macho
// What's the minion's favorite food? - Bananas

// PSEUDOCODE

// Set a timer of 120 seconds

// Set events and values to the radio inputs

// When user clicks submit or timer goes off
// Increment correct or incorrect answers accordingly

$(document).ready(function() {
    var timerIntervalId;
    var timeLeft = 10;

    function calculateAnswers () {
        
        var correct = 0;
        var wrong = 0;

        $("#questions").hide();
        $("#time-left").hide();
        
        clearInterval(timerIntervalId);
        //Checking number of questions in the form, 
        //TO DO create a FOR loop based on this
        for ( j = 0 ; j < document.forms.length ; j++ ) {

            // Gets the first form in the document and stores it in the variable
            // TO DO = do it with all questions (forms)
            var answers = document.forms[j];
            
            for (var i = 0 ; i < answers.length ; i++) {
                if (answers[i].checked && answers[i].value === 'correct') {
                    console.log("CORRECT!!")
                    correct++;
                    break;
                } else if (answers[i].checked && answers[i].value === 'wrong')  {
                    console.log("FALSE")
                    wrong++;
                }
            }
        }
        
        $(".results").text(correct + " correct answers and " + wrong + " wrong answers.");

    }

    function runTimer () {
        timeLeft--;
        if (timeLeft <= 0) {
            clearInterval(timerIntervalId);
            $("#time-left").text("TIME'S UP");
            $("#questions").hide();
            calculateAnswers();
            return;
        }
        $("#time-left").text(timeLeft);
    }

    
    $("#questions").hide();
    $("#time-left").hide();


    $("#start-quiz").on("click", function() {

        $("#time-left").show();

        timerIntervalId = setInterval(runTimer, 1000);
        
        $("#start-quiz").hide();
        $("#questions").show();
        
    });

    $("#submit").on("click", calculateAnswers);
});