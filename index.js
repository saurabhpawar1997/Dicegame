document.querySelector("button").addEventListener("click", myFunction);


function myFunction(event) {
    event.preventDefault();
    document.querySelector("#member-1").innerHTML = "";
    document.querySelector("#member-2").innerHTML = "";
    document.querySelector("#member-3").innerHTML = "";
let randomNum1 = Math.floor(Math.random()*6)+1;
let randomNum2 = Math.floor(Math.random()*6)+1;
let randomNum3 = Math.floor(Math.random()*6)+1;
let member1 = document.createElement("div");
let member2 = document.createElement("div");
let member3 = document.createElement("div");
    
(member1).append(randomNum1);
document.querySelector("#member-1").append(randomNum1);
(member2).append(randomNum2);
document.querySelector("#member-2").append(randomNum2);
(member3).append(randomNum3);
document.querySelector("#member-3").append(randomNum3);

if(randomNum1>randomNum2 && randomNum1>randomNum3){
    document.querySelector("#winner").innerHTML = "WINNER :- The Winner is Member 1";
    document.getElementById("member-1").style.color= "green" ;
    if(randomNum2>randomNum3){
        document.getElementById("member-2").style.color = "yellow";
        document.getElementById("member-3").style.color = "red";
    }else if(randomNum3>randomNum2){
        document.getElementById("member-3").style.color = "yellow";
        document.getElementById("member-2").style.color = "red";
    }
}
if(randomNum2>randomNum1 && randomNum2>randomNum3){
    document.querySelector("#winner").innerHTML = "WINNER :- The Winner is Member 2";
    document.getElementById("member-2").style.color= "green" ;
    if(randomNum1>randomNum3){
        document.getElementById("member-1").style.color = "yellow";
        document.getElementById("member-3").style.color = "red";
    }else if(randomNum3>randomNum1){
        document.getElementById("member-3").style.color = "yellow";
        document.getElementById("member-1").style.color = "red";
    }
}
if(randomNum3>randomNum1 && randomNum3>randomNum2){
    document.querySelector("#winner").innerHTML = "WINNER :- The Winner is Member 3";
    document.getElementById("member-3").style.color= "green" ;
    if(randomNum1>randomNum2){
        document.getElementById("member-1").style.color = "yellow";
        document.getElementById("member-2").style.color = "red";
    }else if(randomNum2>randomNum1){
        document.getElementById("member-2").style.color = "yellow";
        document.getElementById("member-1").style.color = "red";
    }
}
if(randomNum1===randomNum2 || randomNum1===randomNum3 || randomNum2===randomNum3){
    document.querySelector("#winner").innerHTML = "WINNER :- Match Draw";
    document.getElementById("member-1").style.color= "blue" ;
    document.getElementById("member-2").style.color= "blue" ;
    document.getElementById("member-3").style.color= "blue" ;
}
}
