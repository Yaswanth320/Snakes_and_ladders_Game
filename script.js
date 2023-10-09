const roll = document.querySelector('.rollDice');
const diceValue = document.querySelector('.diceValue'); 

let rollingSound = new Audio("diceroll.mp3");
let winSound = new Audio("win.mp3");


let toggle = 1;

let p1sum = 0
let p2sum = 0


function play(player, psum, correction, num) {
    let sum = 0;
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num;
        }

        if (p1sum == 1) {
            p1sum = 38;
        }
        if (p1sum == 4) {
            p1sum = 14;
        }
        if (p1sum == 8) {
            p1sum = 30;
        }
        if (p1sum == 21) {
            p1sum = 42;
        }
        if (p1sum == 28) {
            p1sum = 76;
        }
        if (p1sum == 32) {
            p1sum = 10;
        }
        if (p1sum == 36) {
            p1sum = 6;
        }
        if (p1sum == 48) {
            p1sum = 26;
        }
        if (p1sum == 50) {
            p1sum = 67;
        }
        if (p1sum == 62) {
            p1sum = 18;
        }
        if (p1sum == 71) {
            p1sum = 92;
        }
        if (p1sum == 80) {
            p1sum = 99;
        }
        if (p1sum == 88) {
            p1sum = 24;
        }
        if (p1sum == 95) {
            p1sum = 56;
        }
        if (p1sum == 97) {
            p1sum = 78;
        }
        sum = p1sum;
    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num;

        if (p2sum > 100) {
            p2sum = p2sum - num;
        }
        if (p2sum == 1) {
            p2sum = 38;
        }
        if (p2sum == 4) {
            p2sum = 14;
        }
        if (p2sum == 8) {
            p2sum = 30;
        }
        if (p2sum == 21) {
            p2sum = 42;
        }
        if (p2sum == 28) {
            p2sum = 76;
        }
        if (p2sum == 32) {
            p2sum = 10;
        }
        if (p2sum == 36) {
            p2sum = 6;
        }
        if (p2sum == 48) {
            p2sum = 26;
        }
        if (p2sum == 50) {
            p2sum = 67;
        }
        if (p2sum == 62) {
            p2sum = 18;
        }
        if (p2sum == 71) {
            p2sum = 92;
        }
        if (p2sum == 80) {
            p2sum = 99;
        }
        if (p2sum == 88) {
            p2sum = 24;
        }
        if (p2sum == 95) {
            p2sum = 56;
        }
        if (p2sum == 97) {
            p2sum = 78;
        }
        sum = p2sum;
    }

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 80}px`
        document.getElementById(`${player}`).style.top = `${-0 * 80 - correction}px`
    }
    else if (sum == 100) {
        winSound.play()
        if (player == 'p1') {
            alert("Blue Won !!");
        }
        else if (player == 'p2') {
            alert("Yellow Won !!");
        }
        location.reload();
    }
    else {

        numarr = Array.from(String(sum))
        n1 = numarr.shift();
        n2 = numarr.pop();

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 80}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 80 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 80}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 80 - correction}px`

            }

        }
        else if (n1 % 2 == 0) {
            if (n2 == 0) {

                document.getElementById(`${player}`).style.left = `${(0) * 80}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 80 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 80}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 80 - correction}px`
            }

        }



    }
}

roll.addEventListener('click', function(){
    
    rollingSound.play();
    
    let randomValue = Math.floor((Math.random() * 6) + 1);
    diceValue.textContent =  randomValue;

    const player = document.querySelector('.player');

    if(toggle % 2 !== 0){
        player.textContent = 'Yellow Turn';
        player.style.color = "#F0E68C";
        roll.style.backgroundColor = "#F0E68C";
        diceValue.style.color = "#F0E68C";

        play('p1', 'p1sum', 0, randomValue)
    }

    if(toggle % 2 === 0){
        player.textContent = 'Blue Trun';
        player.style.color = "blue";
        roll.style.backgroundColor = "blue";
        diceValue.style.color = "blue";

        play('p2', 'p2sum', 60, randomValue)
    }

    toggle = toggle + 1;
});




