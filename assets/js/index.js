import darkMode from './darkMode';

darkMode.init();


document.body.addEventListener('click', (e)=>{
    const clickFields = document.querySelectorAll('.click-field')
    if(clickFields){
        clickFields.forEach((field)=>{
            if(!field.contains(e.target)){
                const fieldToggle = field.querySelectorAll(`[data-show]`)
                fieldToggle.forEach((f)=>{
                    f.setAttribute('data-show', false)
                })
            }
        })
    }
})

window.onscroll = () => {
    const progressBar = document.querySelector(".progress-bar")
    const progressBarSvg = document.querySelector(".progress-svg")
    if(progressBar) progressBar.classList.remove('hidden')
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if(progressBar) progressBar.style.width = scrolled + "%";
    if(progressBarSvg) progressBarSvg.style.strokeDashoffset = 100 - scrolled
}