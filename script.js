const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const scissor = document.querySelector('.scissor');
const content = document.querySelector('#demo');
const content2 = document.querySelector('#demo2');
const result = document.querySelector('.result');
const playerr = document.querySelector('span');

let playertotal = 0;
let computertotal = 0;


function playRound(player, Computer) {
    // let playertotal = 0;
    // let computertotal = 0;

    if (player === Computer) {
        playertotal += 1;
        computertotal += 1;
    } else if (player == 'Rock') {
        if (Computer == 'Scissor') {
            playertotal += 1;
        } else {
            computertotal += 1;
        }
    } else if (player == 'Paper') {
        if (Computer == 'Rock') {
            playertotal += 1;
        } else {
            computertotal += 1;
        }
    } else if (player == 'Scissor') {
        if (Computer == 'Paper') {
            playertotal += 1;
        } else {
            computertotal += 1;
        }
    }



    // console.log(`${player} and ${Computer}`);
    // console.log(`${playertotal} & ${computertotal}`);
    content.innerHTML = playertotal;
    content2.innerHTML = computertotal;


}



function getComputerChoice() {
    const generatedNo = Math.floor(Math.random() * 3);
    let choice;
    if (generatedNo === 0) {

        choice = 'Rock';
        result.innerHTML = `<img src="rock.png" alt="" class="rock">`
    } else if (generatedNo === 1) {

        choice = 'Scissor';
        result.innerHTML = `<img src="scissors.png" alt="" class="scissor">`
    } else {
        choice = 'Paper';
        result.innerHTML = `<img src="paper.png" alt="" class="paper">`
    }

    return choice;
}




function Gamepame() {
    let playerchoice;
    paper.addEventListener('click', () => {
        playerchoice = 'Paper';
        console.log(playerchoice);
        playRound(playerchoice, getComputerChoice());
    });

    rock.addEventListener('click', () => {
        playerchoice = 'Rock';
        console.log(playerchoice);
        playRound(playerchoice, getComputerChoice());
    });

    scissor.addEventListener('click', () => {
        playerchoice = 'Scissor';
        console.log(playerchoice);
        playRound(playerchoice, getComputerChoice());
    });
    console.log(playertotal);

}

Gamepame();




// const playerSection = 'rock';

// const getcomputerChoice = () => {

//     //0 = rock,1 = scissor 2 = paper
//     let number = Math.floor((Math.random() * 3));
//     return number;

// }

// const playRound = (playerSection, ComputerSection) => {
//     console.log(playerSection, ComputerSection);
// }

// const ComputerSection = getcomputerChoice();
// playRound();

// if (playerchoice === 'Rock') {
//     RPS = 'Rock';
// } else if (playerchoice === 'Scissor') {
//     RPS = 'Scissor';
// } else if (playerchoice === 'Paper') {
//     RPS = 'Paper';
// } else {
//     console.log('hi');
// }
// return RPS;

// function playerSection() {
//     const player = prompt('Enter Rock , Paper , Scissor');
//     console.log(player);
//     return player;
// }
// const ComputerSection = getcomputerChoice();

// let playerchoice;

// paper.addEventListener('click', () => {
//     playerchoice = 'Paper';
//     console.log(playerchoice);
//     playRound(playerchoice, getComputerChoice());
// });

// rock.addEventListener('click', () => {
//     playerchoice = 'Rock';
//     console.log(playerchoice);
//     playRound(playerchoice, getComputerChoice());
// });

// scissor.addEventListener('click', () => {
//     playerchoice = 'Scissor';
//     console.log(playerchoice);
//     playRound(playerchoice, getComputerChoice());
// });



// let playerSection = player();
// let ComputerSection = getComputerChoice();



// function getInput() {
//     playerSection = player();
//     ComputerSection = getComputerChoice();
// }