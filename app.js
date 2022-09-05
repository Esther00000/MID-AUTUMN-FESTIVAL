let searchBtn = document.querySelector('#search-btn')
let searchForm = document.querySelector('.header .search-form')

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times')
    searchForm.classList.toggle('active')

    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')

    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active')
}

window.onscroll = () => {
    searchBtn.classList.remove('fa-times')
    searchForm.classList.remove('active')
    menuBtn.classList.remove('fa-times')
    navbar.classList.remove('active')

    if(window.scrollY > 650){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }

    // home page animation
    let val = window.scrollY / 10;
    document.querySelector('.home .mountain').style.bottom = `${-val}%`
    document.querySelector('.home .content').style.bottom = `${val}%`
    document.querySelector('.home .moon').style.bottom = `${-val}%`
    document.querySelector('.home .cloud-1').style.right = `${-val}%`
    document.querySelector('.home .cloud-2').style.left = `${-val}%`

}





















