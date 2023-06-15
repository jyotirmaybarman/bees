let theme = 'dark';

function init(){
    let storedTheme = localStorage.getItem('theme');
    if(storedTheme) theme = storedTheme;
    document.body.classList.add(theme);
    showIcon(theme);

    // listen for theme change
    let themeBtns = document.querySelectorAll('.theme-btn');
    console.log(themeBtns);
    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("btn clicked");
            toggleDark();
        })
    })
}

function isDark(){
    return localStorage.getItem('theme') === 'dark';
}

function toggleDark(){
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme === 'dark') theme = 'light';
    else theme = 'dark';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
    showIcon(theme);
}

function showIcon(theme){
    const lightIcons = document.querySelectorAll('.light-icon');
    const darkIcons = document.querySelectorAll('.dark-icon');

    console.log(lightIcons);

    if(theme == 'dark'){
        lightIcons.forEach(icon => icon.style.display = "none");
        darkIcons.forEach(icon => icon.style.display = "block");
    }else{
        lightIcons.forEach(icon => icon.style.display = "block");
        darkIcons.forEach(icon => icon.style.display = "none");
    }
}

export default {
    init,
    isDark,
    toggleDark
}