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
    frame.setAttribute('src',`/profile/${src}.html`
    )
}


for(let i = 0 ; i < button.length ; i++){
    button[i].addEventListener('click',clickHandler)
}
