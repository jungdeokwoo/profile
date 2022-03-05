let frame = document.getElementsByTagName('iframe')[0]
let button = document.querySelectorAll('.nav div')
let curBtn;

function clickHandler() {
    if(curBtn){
        curBtn.classList.remove('active')
    }
    this.classList.add('active')
    curBtn = this
    let src = curBtn.textContent.toLowerCase()
    frame.setAttribute('src',`/새소개/세부/${src}.html`
    )
}


for(let i = 0 ; i < button.length ; i++){
    button[i].addEventListener('click',clickHandler)
}