const navMobile = document.querySelector('.navbar__mobile')
const nav = document.querySelector('.navbar')

navMobile.addEventListener('click', () =>
    nav.classList.toggle('--active'))

const itens = document.querySelectorAll('.--itens')

itens.forEach(item => item.addEventListener('click', () => 
    nav.classList.toggle('--active')))
