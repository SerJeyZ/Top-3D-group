
const body = document.querySelector('body');
const productsMenuOpen = document.querySelector('#products-menu');
const mobileProdMenu = document.querySelector('.mobile-product-menu');
const mobileProdClose = document.querySelector('.mobile-product-menu__close-btn');
const overlay = document.querySelector('.overlay');
const sendBtn = mobileProdMenu.querySelector('.search__btn');
const input = mobileProdMenu.querySelector('input');

productsMenuOpen.addEventListener('click', () => {
  mobileProdMenu.classList.add('show');
  overlay.classList.add('show');
  body.classList.add('lock')
})
mobileProdClose.addEventListener('click', () => {
  mobileProdMenu.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('lock')
})
sendBtn.addEventListener('click',(e)=> {
  e.preventDefault();
  mobileProdMenu.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('lock')
  input.value='';
})
window.addEventListener('resize',()=>{
  if(window.innerWidth>900) {
    mobileProdMenu.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('lock')
    input.value = '';
  }
})