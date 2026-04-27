let guessInput =document.getElementById('num');
let check =document.getElementById('check');
let restart =document.getElementById('restart');
let result =document.getElementById('result');

let randomnum = Math.floor(Math.random()*100)+1;
check.addEventListener('click' , ()=>{
    let guess = Number(guessInput.value);
    if(guess <1 || guess>100){
        result.textContent = 'Enter a number b/w 1 till 100';
        result.style.color = 'black';
    }
    else if(guess === randomnum){
        result.textContent = 'Congratulations🎉, You guess it right💗';
        result.style.color = 'green';
        check.disabled = true;
        restart.style.display = 'block';
    }
    else{
        result.textContent = guess < randomnum ? "Too low! Try Again👎" : "Too High! Try Again👎";
        result.style.color = 'purple';
    }

    guessInput.value = "";
    guessInputfocus();
})

restart.addEventListener('click' , ()=>{
    randomnum = Math.floor(Math.random()*100)+1;
    result.textContent = "";
    check.disabled = false;
    restart.style.display = 'none';
    guessInput.focus();
})
