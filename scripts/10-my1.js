let myscore=JSON.parse(localStorage.getItem('myscore'))||
{wins:0,
  ties:0,
  loss:0,
};

console.log(myscore);

function updateScoreElement(){
document.querySelector('.js-score').innerHTML=`<p>Wins:${myscore.wins}  Ties:${myscore.ties}  Loss:${myscore.loss} <p>`;
}

updateScoreElement();

function choice(){
  let c =Math.random();
  if (c<1/3){ return "rock";}
  else if (c>=1/3 && c<2/3){return "paper";}
  else if(c>=2/3 && c<1){return "scissors";}
}

function play(move){
  let result=0;
let computer=choice();

document.querySelector('.js-moves').innerHTML=`you <img class="emojis" src="images/${move}-emoji.png"> Computer <img class="emojis" src="images/${computer}-emoji.png">`


if (move===computer){myscore.ties+=1; result=0;}
else{

  if (computer==="rock"){
    if (move==="paper"){
      myscore.wins+=1;result=1;
    }
    else{myscore.loss+=1;result=-1;}
  }

  if (computer==="scissors"){
    if (move==="rock"){
      myscore.wins+=1;result=1;
    }
    else{myscore.loss+=1;result=-1;}
  }

  if (computer==="paper"){
    if (move==="scissors"){
      myscore.wins+=1;result=1;
    }
    else{myscore.loss+=1;result=-1;}
    }
  }
updateScoreElement();
updateResultElement(result);
localStorage.setItem('myscore',JSON.stringify(myscore));
}

function updateResultElement(result){
  if (result===1){document.querySelector('.js-result').innerHTML=`You Win!!`}
  else  if (result===-1){document.querySelector('.js-result').innerHTML=`You Lose`}
  else  if (result===0){document.querySelector('.js-result').innerHTML=`Tie`}
}

function reset(){
  myscore={wins:0,
    ties:0,
    loss:0,
  };

  updateScoreElement();
  document.querySelector('.js-result').innerHTML=`Scores are Reset`;
  document.querySelector('.js-moves').innerHTML=``;

}




