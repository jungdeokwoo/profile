let nav = document.getElementsByTagName('li')
let selected;

function clickHandler(){
    if(selected){
        selected.classList.remove("selected")
    }
    this.classList.add("selected")
    selected = this
    console.log(selected.firstChild.innerText)
}

for(let i = 0 ; i < nav.length ; i++){
    nav[i].addEventListener('click',clickHandler)
}




//타이머

let clock = document.getElementById('timer')
let button = document.getElementById('btn')
let isStarted = false;
let timer

function startTimer() {
    
    if(isStarted === false){
        isStarted = true;
        let time = 180
        timer = setInterval(function(){
            clock.innerText = `${String(Math.floor(time/60)).padStart(2,'0')}:${String(time%60).padStart(2,'0')}`
            time -= 1
        },1000)
    } else {
        clearInterval(timer)
        time = 180;
        timer = setInterval(function(){
            clock.innerText = `${String(Math.floor(time/60)).padStart(2,'0')}:${String(time%60).padStart(2,'0')}`
            time -= 1
        },1000)
    }

}

button.addEventListener('click',startTimer)
