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