"use strict ";
window.onload = function (){

// default declarations:
 let seconds = 00;
 let tens = 00;
 var time = 00 ;
 
// setting up seconds:
var secondsTimer =document.getElementById("seconds");
// setting up tens:
var tensTimer =document.getElementById("tens");




 
 
// start button when clicked
 const startCounter = document.getElementById("start-button");
 startCounter.onclick = function(){

clearInterval(time);
time = setInterval(startTimer,10);
 

 }

// stop button when clicked
 const stopCounter = document.getElementById("stop-button");
 stopCounter.onclick = function(){
 
    clearInterval(time);


 }

// reset button when clicked
 const resetCounter =document.getElementById("reset-button");
 resetCounter.onclick = function(){

    clearInterval(time);
    seconds = "00";
    tens = "00";
    secondsTimer.innerHTML = seconds;
    tensTimer.innerHTML = tens;
    console.log(seconds);
    console.log(seconds);





 }


 // declared functions:

 // 1. start timer:
 function startTimer(){
    tens++;

if (seconds > 9){

secondsTimer.innerHTML = seconds;


}


if ( tens <=9){
tensTimer.innerHTML= "0" + tens;

}


if( tens >9){

    tensTimer.innerHTML = tens;
}


 

if( tens > 99){
seconds++;
secondsTimer.innerHTML = "0" + seconds;
tens = 0;
tensTimer.innerHTML = "0" + 0;

}


}
} // end of window obj
