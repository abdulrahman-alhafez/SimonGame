var buttonColours = ["red","blue","green","yellow"];

var gamePattern = [];

var userClickedPattern = [];
var started = false ;

var level = 0;




$(document).keypress(function(){
    if (!started){
        $("h1").text("Level "+ level);
        nextSequence();
        started = true
    }
    
});


$(".btn").click(function(){
    var usreChoseColour = this.id;
    playSound(usreChoseColour)
    userClickedPattern.push(usreChoseColour);
    animatePress(usreChoseColour)
    
checkAnswer(userClickedPattern.length-1);
   })



function checkAnswer(currentLevel){
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log(userClickedPattern[currentLevel])
        console.log(gamePattern[currentLevel])
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else{
        console.log(userClickedPattern[currentLevel])
        console.log(gamePattern[currentLevel])
        
        new Audio("sounds/wrong.mp3").play();
        $("body").addClass("game-over");
        setTimeout(function(){
        $("body").removeClass("game-over");
    }, 200)
    $("h1").text("Game Over, Press Any Key to Restart");
         startOver();
    }
}


function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}


    


function nextSequence(){
    userClickedPattern = [];
    level++;
    $("h1").text("Level " + level)
    

    var randomNumber = Math.floor(Math.random() * 4);

    var randomChoseColour = buttonColours[randomNumber];

    gamePattern.push(randomChoseColour);

    
    $("#" + randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);

    
    playSound(randomChoseColour)



    

  


};
function playSound(name){
    
    var audio = new Audio("sounds/"+ name +".mp3");
    audio.play();
    

   };

function animatePress(currentColour){
    var theButton = $("#"+currentColour);
    theButton.addClass("pressed");
    setTimeout(function(){
        theButton.removeClass("pressed");
    }, 100)
    
    

}


