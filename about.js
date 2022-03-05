let images = document.querySelector('.img')
function imageSlide() {
    let marginVal = 0;
    setInterval(function(){
            if (marginVal === -1500){
                images.classList.remove('trans')
                images.style.marginLeft = '0px'
                marginVal = 0
                setTimeout(function(){
                    images.classList.add('trans')
                    marginVal -= 500
                    images.style.marginLeft = `${marginVal}px`
                },200)
            }else{
                // images.classList.add('trans')
                marginVal -= 500
                images.style.marginLeft = `${marginVal}px`
            }
    }, 5000);
}

imageSlide()
