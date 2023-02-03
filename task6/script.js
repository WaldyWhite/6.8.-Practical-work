const trafLightRed = document.querySelector('#lightRed');
const trafLightYellow = document.querySelector('#lightYellow');
const trafLightGreen = document.querySelector('#lightGreen');

let count = 0; // переменная для счета

// смена цвета 
function lightChange() {
    if (count == 0){
        trafLightRed.style.background = ('red');
        trafLightYellow.style.background = ('black');
        trafLightGreen.style.background = ('black');
        count +=1;

    }
    else if (count == 1){
        trafLightYellow.style.background = ('yellow');
        trafLightRed.style.background = ('black');
        trafLightGreen.style.background = ('black');
        count +=1;
        
    }
    else if ( count == 2){
        trafLightGreen.style.background = ('green');
        trafLightRed.style.background = ('black');
        trafLightYellow.style.background = ('black');
        count = 0;
    }
};

//добавление функции по событию
let manuel = true;

trafLightRed.addEventListener('click', ()=>{
    if (manuel == 1){
        lightChange();
    }
});
trafLightYellow.addEventListener('click', ()=>{
    if (manuel == true){
        lightChange();
    }
});
trafLightGreen.addEventListener('click', ()=>{
    if (manuel == true){
        lightChange();
    }
});

// работа в автоматическом режиме 

let setInt;
function start(){
    setInt = setInterval(()=>{
        lightChange();
        }, 1000);
    document.querySelector('#mode').textContent = 'Работа в автоматическом режиме.';
    document.querySelector('#start').removeEventListener('click', start);
    manuel = false;
};

function stop() {
    clearInterval(setInt);

    document.querySelector('#mode').textContent = 'Работа в ручном  режиме.';
    document.querySelector('#start').addEventListener('click', start);

    manuel = true;
};

function reset(){
    clearInterval(setInt);

    document.querySelector('#mode').textContent = 'Работа в ручном  режиме.';
    document.querySelector('#start').addEventListener('click', start);

    trafLightGreen.style.background = ('black');
    trafLightRed.style.background = ('black');
    trafLightYellow.style.background = ('black');

    count = 0;
    manuel = true;
    console.log(count)
};

document.querySelector('#start').addEventListener('click', start);

document.querySelector('#stop').addEventListener('click', stop);

document.querySelector('#reset').addEventListener('click', reset);


