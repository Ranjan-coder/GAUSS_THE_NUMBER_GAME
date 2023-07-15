var initialvalue = 100;
var randomNumber = random(100);
console.log(randomNumber);

function reset(){
    document.body.style.backgroundColor = "aqua";
    document.querySelector("#message").textContent = "Start Guessing....."
    document.querySelector(".chances").textContent = "100"//initialvalue
    document.querySelector("#box_2").textContent = "?"
    document.getElementById("guess").value = ""
    randomNumber = random(100);
    console.log(randomNumber);
    document.querySelector(".btn").style.visibility = "visible";
}

// random number function
function random(n){
    return Math.floor(Math.random()*n)+1
}

function check(){
   let inputnumber = document.getElementById("guess").value

   if(initialvalue !==0){
   if(inputnumber > randomNumber){
    document.querySelector("#message").innerHTML ="Your Guess is High"
    document.querySelector(".chances").textContent = --initialvalue
   }
   else if(inputnumber < randomNumber){
    document.querySelector("#message").innerHTML="Your Guess is Low"
    document.querySelector(".chances").textContent = --initialvalue
   }
   else{
    document.body.style.backgroundColor = "green"
    document.querySelector("#message").textContent = "Hurray you won 🤩🤩";
    document.querySelector(".chances").textContent = --initialvalue
    document.querySelector("#box_2").textContent = randomNumber


    highscore = initialvalue;
    document.querySelector(".highscore").textContent = highscore
    document.querySelector(".btn").style.visibility = "hidden";
   }
}
else{
    document.querySelector("#message").textContent="Game Over 😥😥"
}
}