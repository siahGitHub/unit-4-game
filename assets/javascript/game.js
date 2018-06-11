$(document).ready(function () {

    //Declaration of scope variables
    var randomNumber;
    var redCrystal;
    var totalScore =0;
    var wins =0;
    var losses=0;

    //Calling intialize function to set scope variables
    intializeGame();
   
    //console.log(randomNumber);

    function getRandNum(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("button").on("click", function (event) {
        
        event.preventDefault();
        var value = $(this).attr("crystal-value")
        totalScore = parseInt(totalScore) + parseInt(value);
        
        $("#total-score").text(totalScore);
        if (parseInt(totalScore) === parseInt(randomNumber)){
            wins++;
            $("#wins").text(wins);
            $("#win").show();
            $("#loose").hide();
            intializeGame();
        }
        if (parseInt(totalScore) > parseInt(randomNumber)){
            losses++;
            $("#losses").text(losses);
            $("#loose").show();
            $("#win").hide();
            intializeGame();
        }
        //console.log(value);
    });

    //Function that sets scope variables and sets the value of the crystals to an attribute
    function intializeGame(){
        $("#total-score").empty();
        randomNumber = getRandNum(19, 120);
        redCrystal = getRandNum(1, 12);
        $("#random-num").text(randomNumber);
        $("#red").attr("crystal-value", redCrystal);
        var blueCrystal = getRandNum(1, 12);
        $("#blue").attr("crystal-value", blueCrystal);
        var yellowCrystal = getRandNum(1, 12);
        $("#yellow").attr("crystal-value", yellowCrystal);
        var greenCrystal = getRandNum(1, 12);
        $("#green").attr("crystal-value", greenCrystal);
        totalScore = 0;
    }

});