let scores, roundScore, activePlayer,isPlaying;
init();

document.querySelector('.btn-roll').addEventListener('click' , function () {
    if(isPlaying){

    document.querySelector('.dice').style.display = 'block';    
    let dice = Math.floor(Math.random()*6) +1;
    document.querySelector('.dice').src  = './photos/dice-' + dice + '.png'
    if (dice!==1){
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else {
        nextPlayer();


    }}
});
 
// next player function
 
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = '0';
        document.querySelector('#current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active'); 
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
    
}
document.querySelector('.btn-hold').addEventListener('click' , function () {
   if(isPlaying){
    scores[activePlayer] += roundScore;

    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   };
    if (scores[activePlayer] > 50){
        isPlaying = false;
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
//        document.querySelector('.dice').style.display = 'none';
//        document.querySelector('.btn-hold').style.display = 'none';
        document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
     
    } else {
        nextPlayer();
    }
    
})

document.querySelector('.btn-new').addEventListener('click', init );

function init() {
    isPlaying = true;
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';  
    document.querySelector('#name-0').textContent = 'Player 1';
    document.querySelector('#name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
