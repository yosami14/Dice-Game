let dislpayPlayer1Img = document.querySelector('.img1');
let dislpayPlayer2Img = document.querySelector('.img2');


let player1Img =["./Player 1(BW)/1.png"
                ,"./Player 1(BW)/2.png"
                ,"./Player 1(BW)/3.png"
                ,"./Player 1(BW)/4.png"
                ,"./Player 1(BW)/5.png"
                ,"./Player 1(BW)/6.png"];

let player2Img = ["./Player 2(RW)/1 (1).png"
                ,"./Player 2(RW)/1 (2).png"
                ,"./Player 2(RW)/1 (3).png"
                ,"./Player 2(RW)/1 (4).png"
                ,"./Player 2(RW)/1 (5).png"
                ,"./Player 2(RW)/1 (6).png"];




function randomNumber(){
  return Math.floor(Math.random()*6);
}

function setRandomDiceImage(){
  let player1Value = randomNumber();
  let player2Value = randomNumber();

  dislpayPlayer1Img.setAttribute('data-src',player1Img[player1Value]);
  dislpayPlayer1Img.setAttribute('src',player1Img[player1Value]);

  dislpayPlayer2Img.setAttribute('data-src',player2Img[player2Value]);
  dislpayPlayer2Img.setAttribute('src',player2Img[player2Value]);

  let header = document.querySelector('h1');
    if(player1Value>player2Value){
        header.textContent = "Player 1 Wins";
        header.style.color = "#a3333d";
        header.style.font= "bolder";
    }
      else if(player1Value<player2Value) {
        header.textContent = "Player 2 Wins";
        header.style.color= "#291f1e";
        header.style.font= "bolder";
      }
        else {
          header.textContent = "Draw";
          header.style.color= "#fff";
        }
}



setRandomDiceImage();

// Add an event listener to the "Refresh Me" heading to update the dice images on click
let refresh = document.querySelector('.btn');
refresh.addEventListener('click', setRandomDiceImage);


