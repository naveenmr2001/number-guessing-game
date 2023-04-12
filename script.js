let user = 0;
let computer_guess = 0;
let turn = 0;
let score = 0;
let valuelow = 0;
let valuemedium = 0;
let valuehigh = 0;
let flag = true;
let userinputlow = document.querySelector('#low')
let userinputhmedium = document.querySelector('#medium')
let userinputhigh = document.querySelector('#high')
let congrulation = document.querySelectorAll('.congrulation')
let next_level = document.querySelectorAll('.next-level')
let play = document.querySelectorAll('.play') 
let guess = document.querySelectorAll('.greater')
let life = document.querySelectorAll('.life')
let playagain = document.querySelectorAll('.playagain')
let score_value = document.querySelectorAll('.score')
let computer = document.querySelectorAll('.computer')
let guessbutton = document.querySelectorAll('.guess_button')
let arrow = document.querySelectorAll('.arrow')
console.log(arrow)
console.log(guessbutton)
console.log(computer)

for(let i=0;i<3;i++){
    congrulation[i].style.display = 'none';
    next_level[i].style.display = 'none';
    play[i].style.display = 'none';    
}

for(let i=0;i<2;i++){
    arrow[i].style.display='none';
}

score_value.innerHTML = score;


userinputlow.addEventListener('change',(event)=>{
    valuelow = `${event.target.value}`;
})

userinputhmedium.addEventListener('change',(event)=>{
    valuemedium = `${event.target.value}`;
})

userinputhigh.addEventListener('change',(event)=>{
    valuehigh = `${event.target.value}`;
})


const lowassign = () =>{
    computer_guess = Math.ceil(Math.random()*10);
    turn = 3;
}

const mediumassign = () =>{  
    computer_guess = Math.ceil(Math.random()*50);
    turn = 5;
}

const highassign = () => {
    computer_guess = Math.ceil(Math.random()*100);
    turn = 10;
}

const low = () =>{
    
    if(flag){
        lowassign();
        flag = false;
    }
    turn--;
    console.log(computer_guess)
    console.log(turn)
    if(valuelow == computer_guess){
        guess[0].innerHTML = '=';
        congrulation[0].style.display = 'flex';
        next_level[0].style.display = 'flex';
        play[0].style.display = 'flex';
        guessbutton[0].style.opacity = 0;
        guessbutton[0].style.cursor = 'arrow';
        arrow[0].style.display = 'grid';
        computer[0].placeholder = computer_guess
        flag = true;
        if(turn == 3){
            score+=300;
        }else{
            score+=100;
        }
        console.log(score);
        score_value[0].innerHTML = score;
        for(let i=0;i<turn;i++){
            let d_nested = document.getElementsByClassName("fa");
            life[0].removeChild(d_nested[0])
        }
    }else if(valuelow<computer_guess){
        guess[0].innerHTML = '<';
    }else if(valuelow>computer_guess){
        guess[0].innerHTML = '>';
    }
    let d_nested = document.getElementsByClassName("fa");
    life[0].removeChild(d_nested[0])
    score_value[0].innerHTML = score;
    if(turn==0){
        congrulation[0].innerHTML = "TRY AGAIN";
        congrulation[0].style.display = "flex";
        play[0].style.display = "flex";
        computer[0].placeholder = computer_guess
    }
}

const medium = () =>{
    console.log(flag)
    if(flag){
        mediumassign();
        flag = false;
    }
    turn--;
    console.log(computer_guess)
    console.log(turn)
    if(valuemedium == computer_guess){
        guess[1].innerHTML = '=';
        congrulation[1].style.display = 'flex';
        next_level[1].style.display = 'flex';
        play[1].style.display = 'flex';
        guessbutton[1].style.opacity = 0;
        guessbutton[1].style.cursor = 'arrow';
        arrow[1].style.display = 'grid';
        computer[1].placeholder = computer_guess
        flag = true;
        if(turn == 3){
            score+=300;
        }else{
            score+=100;
        }
        score_value[1].innerHTML = score;
        for(let i=0;i<turn;i++){
            let d_nested = document.getElementsByClassName("fa");
            life[1].removeChild(d_nested[0])
        }
    }else if(valuemedium<computer_guess){
        guess[1].innerHTML = '<';
    }else if(valuemedium>computer_guess){
        guess[1].innerHTML = '>';
    }
    let d_nested = document.getElementsByClassName("fa");
    console.log(d_nested)
    life[1].removeChild(d_nested[0])
    score_value[1].innerHTML = score;
    if(turn==0){
        congrulation[1].innerHTML = "TRY AGAIN";
        congrulation[1].style.display = "flex";
        play[1].style.display = "flex";
        computer[1].placeholder = computer_guess
    }
}

const high = () =>{
    if(flag){
        highassign();
        flag = false;
    }
    turn--;
    console.log(computer_guess)
    console.log(turn)
    if(valuehigh == computer_guess){
        guess[2].innerHTML = '=';
        congrulation[2].style.display = 'flex';
        next_level[2].style.display = 'flex';
        play[2].style.display = 'flex';
        guessbutton[2].style.opacity = 0;
        guessbutton[2].style.cursor = 'arrow';
        computer[2].placeholder = computer_guess
        flag = true;
        if(turn == 3){
            score+=300;
        }else{
            score+=100;
        }
        score_value[2].innerHTML = score;
    }else if(valuehigh<computer_guess){
        guess[2].innerHTML = '<';
    }else if(valuehigh>computer_guess){
        guess[2].innerHTML = '>';
    }
    let d_nested = document.getElementsByClassName("fa");
    life[2].removeChild(d_nested[0])
    score_value[2].innerHTML = score;
    if(turn==0){
        congrulation[2].innerHTML = "TRY AGAIN";
        congrulation[2].style.display = "flex";
        play[2].style.display = "flex";
        computer[2].placeholder = computer_guess
    }
}