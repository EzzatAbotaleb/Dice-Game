

var randomNumer1 = Math.floor(Math.random()*6)+1;
var randomNumer2 = Math.floor(Math.random()*6)+1;

    if (randomNumer1 === 1){
        document.querySelector(".img1").setAttribute("src","images/dice1.png");
    }
    if (randomNumer1 === 2){
        document.querySelector(".img1").setAttribute("src","images/dice2.png");
    }
    if (randomNumer1 === 3){
        document.querySelector(".img1").setAttribute("src","images/dice3.png");
    }
    if (randomNumer1 === 4){
        document.querySelector(".img1").setAttribute("src","images/dice4.png");
    }
    if (randomNumer1 === 5){
            document.querySelector(".img1").setAttribute("src","images/dice5.png");
        
    }
    if (randomNumer2 === 1){
        document.querySelector(".img2").setAttribute("src","images/dice1.png");
    }
    if (randomNumer2 === 2){
        document.querySelector(".img2").setAttribute("src","images/dice2.png");
    }
    if (randomNumer2 === 3){
        document.querySelector(".img2").setAttribute("src","images/dice3.png");
    }
    if (randomNumer2 === 4){
        document.querySelector(".img2").setAttribute("src","images/dice4.png");
    }
    if (randomNumer2 === 5){
            document.querySelector(".img2").setAttribute("src","images/dice5.png");
        
    }
if(randomNumer1 > randomNumer2){
    document.querySelector("h1").textContent="Player 1 Wins!";
}
if(randomNumer2 > randomNumer1){
    document.querySelector("h1").textContent="Player 2 Wins!";
}
if(randomNumer1 === randomNumer2){
    document.querySelector("h1").textContent="Draw!";
}
