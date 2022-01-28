const text = document.querySelector('.title');

const textcont = text.textContent;

const splitText = textcont.split("");

text.textContent = ""


for(let i=0; i<splitText.length; i++){
    text.innerHTML+= "<span>" + splitText[i] + "</span>"; 
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick(){
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade');
    char++;
    if(char === splitText.length){
        complete();
    }
}

function complete(){
    clearInterval(timer);
    timer = null;
}

