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
    document.querySelector(".progress-bar").classList.remove('hidden')
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".progress-bar").style.width = scrolled + "%";
    document.querySelector(".progress-svg").style.strokeDashoffset = 100 - scrolled
}