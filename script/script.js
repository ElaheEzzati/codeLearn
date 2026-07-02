

const navToggleIcon = document.querySelector('.nav__btn')
const menu = document.querySelector('.navigation')
const exitMenu = document.querySelector('.navigation__exit')
const showGlass = document.querySelectorAll('.glass')
const changeThemeBtn = document.querySelectorAll(".change-mode");
const lightIcon = `<svg width="40" height="40" fill=currentColor xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
                            <g>
                                <path d="M50,25.43c-13.526,0-24.53,11.004-24.53,24.53S36.474,74.49,50,74.49c13.525,0,24.529-11.004,24.529-24.53   S63.525,25.43,50,25.43z M50,71.49c-11.872,0-21.53-9.658-21.53-21.53c0-11.872,9.658-21.53,21.53-21.53   c11.871,0,21.529,9.658,21.529,21.53C71.529,61.832,61.871,71.49,50,71.49z"/>
                                <path d="M50,20.494c0.828,0,1.5-0.671,1.5-1.5v-7.16c0-0.829-0.672-1.5-1.5-1.5s-1.5,0.671-1.5,1.5v7.16   C48.5,19.823,49.172,20.494,50,20.494z"/>
                                <path d="M50,80.006c-0.828,0-1.5,0.671-1.5,1.5v7.161c0,0.829,0.672,1.5,1.5,1.5s1.5-0.671,1.5-1.5v-7.161   C51.5,80.677,50.828,80.006,50,80.006z"/>
                                <path d="M26.839,29.21c0.293,0.292,0.677,0.439,1.061,0.439s0.768-0.146,1.061-0.439c0.586-0.586,0.586-1.536,0-2.122l-5.064-5.063   c-0.586-0.585-1.535-0.585-2.121,0s-0.586,1.536,0,2.122L26.839,29.21z"/>
                                <path d="M73.162,71.291c-0.586-0.586-1.535-0.586-2.121,0c-0.586,0.585-0.586,1.535,0,2.121l5.063,5.063   c0.293,0.293,0.677,0.439,1.061,0.439s0.768-0.146,1.061-0.439c0.586-0.585,0.586-1.535,0-2.121L73.162,71.291z"/>
                                <path d="M18.746,48.75l-7.162,0c-0.828,0-1.5,0.672-1.5,1.5c0,0.829,0.672,1.5,1.5,1.5l7.162,0c0.828,0,1.5-0.672,1.5-1.5   C20.246,49.421,19.574,48.75,18.746,48.75z"/>
                                <path d="M88.417,48.75h-7.161c-0.828,0-1.5,0.671-1.5,1.5s0.672,1.5,1.5,1.5h7.161c0.828,0,1.5-0.671,1.5-1.5   S89.245,48.75,88.417,48.75z"/>
                                <path d="M26.839,71.289l-5.064,5.065c-0.586,0.586-0.586,1.536,0,2.121c0.293,0.293,0.677,0.439,1.061,0.439   s0.768-0.146,1.061-0.439l5.064-5.065c0.586-0.586,0.586-1.536,0-2.121C28.374,70.703,27.425,70.703,26.839,71.289z"/>
                                <path d="M76.104,22.024l-5.063,5.063c-0.586,0.586-0.586,1.536,0,2.121c0.293,0.293,0.677,0.439,1.061,0.439   s0.768-0.146,1.061-0.439l5.063-5.063c0.586-0.586,0.586-1.536,0-2.121C77.639,21.438,76.689,21.438,76.104,22.024z"/>
                            </g>
                        </svg>`;
const darkIcon = `<svg width="20" height="21" class=" change-mode__dark" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9358 14.3652C20.0691 14.0415 19.9906 13.6679 19.7389 13.4276C19.4872 13.1873 19.115 13.1308 18.8051 13.2857C17.7584 13.8091 16.5801 14.1034 15.3317 14.1034C10.9835 14.1034 7.45846 10.5246 7.45846 6.1098C7.45846 4.32254 8.0352 2.67449 9.01033 1.34372C9.21644 1.06244 9.22917 0.680892 9.04229 0.386091C8.85541 0.0912907 8.50809 -0.054977 8.17055 0.0189828C3.50017 1.04235 2.17361e-07 5.25905 0 10.3077C-2.50276e-07 16.1208 4.64155 20.8333 10.3672 20.8333C14.6778 20.8333 18.372 18.1625 19.9358 14.3652Z" fill="currentColor"></path>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0928 3.67116L13.7596 1.84183C13.9751 1.25035 14.4797 0.939795 14.9987 0.910156C15.5177 0.939795 16.0222 1.25035 16.2378 1.84183L16.9045 3.67116L18.7063 4.34807C19.9329 4.8089 19.9329 6.57032 18.7063 7.03114L16.9045 7.70806L16.2378 9.53738C16.0222 10.1289 15.5177 10.4394 14.9987 10.4691C14.4797 10.4394 13.9751 10.1289 13.7596 9.53738L13.0928 7.70806L11.2911 7.03114C10.0644 6.57032 10.0644 4.8089 11.2911 4.34807L13.0928 3.67116Z" fill="currentColor" fill-opacity="0.4"></path>
                         </svg>` ;



changeThemeBtn.forEach(changeTheme => {
    if (window.localStorage.getItem("theme") === "dark-theme"){
        document.documentElement.classList.add("dark-theme")
        changeTheme.innerHTML = lightIcon;
    } else {
        changeTheme.innerHTML = darkIcon;
    }
})

navToggleIcon.addEventListener('click',function (){
    menu.classList.toggle('navigation--open')
    showGlass.forEach(showGlass =>{
        showGlass.classList.toggle('show-glass')
    })
})

exitMenu.addEventListener('click',function (){
    menu.classList.toggle('navigation--open')
    showGlass.forEach(showGlass =>{
        showGlass.classList.toggle('show-glass')
    })
})


changeThemeBtn.forEach(changeTheme => {
    changeTheme.addEventListener('click',function (){
        document.documentElement.classList.toggle("dark-theme")
        if (document.documentElement.classList.contains("dark-theme")){
            window.localStorage.setItem("theme", "dark-theme")
            this.innerHTML = lightIcon;
        } else {
            window.localStorage.setItem("theme", "light-theme")
            this.innerHTML = darkIcon;
        }
    })
})



showGlass.forEach(showGlass =>{
    showGlass.addEventListener('click',function (){
        menu.classList.remove('navigation--open')
        showGlass.classList.remove('show-glass')
        profileBox.classList.remove('profile-box--open')
    })
})


const menuItemNav =document.querySelectorAll('.navigation__item');
const itemNav =document.querySelectorAll('.item__nav-menu--show')


menuItemNav.forEach(menuItemNav =>{
    menuItemNav.addEventListener('click',function (){
        let contentId = this.getAttribute('data-content-id')
        document.querySelector(contentId).classList.toggle('item__nav-menu--show')
    })
})






const studentIconshow = document.querySelectorAll('.course__students')

studentIconshow.forEach(studentIconshow =>{
    studentIconshow.addEventListener('click',function (){
        let contentId1= this.getAttribute('data-content-id')
        document.querySelector(contentId1).classList.toggle('students_showcount')
        

    })
})
