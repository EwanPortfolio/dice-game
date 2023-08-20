let gameOver = false;
let roundScore = 0;


const roll = document.getElementById('roll');
const reset = document.getElementById('reset');
const score = document.getElementById('score');
const diceImage = document.getElementById('diceimage');


roll.addEventListener('click', () => {
    let dice1 = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `./diceimages/${dice1}.gif`;
        
    if(!gameOver){
        if(dice1 == 1) {
            roundScore = 0;
            score.innerHTML = 'Game Over';
            gameOver = true;
            roll.Disabled = true;
       } else {
            roundScore += dice1;
            score.innerHTML = 'Total score :' + roundScore;
            if (roundScore >= 20){
                score.innerHTML = 'you win';
                gameOver = true;
                roll.disabled = true;

            }

       }
    }
})

reset.addEventListener('click', () => {
    roundScore = 0;
    score.innerHTML = 'Total Score 0';
    diceImage.src = './diceimages/11.png';
     gameOver = false; // Reset game over state
    roll.disabled = false;


})