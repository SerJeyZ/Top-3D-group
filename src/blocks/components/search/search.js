const search = document.querySelector('.search');
const form = document.querySelector('.search__form');
const auth = document.querySelector('.auth');
const formInput = form.querySelector('input');
const sendBth = document.querySelector('.search__btn');
const coloseBtn = document.querySelector('.search__close-btn');

const openSearchPanel = () => {
    search.classList.add('search__vs');
    search.classList.remove('search__icon-search');
    form.classList.add('show');
    coloseBtn.classList.add('show');
}
const closeSearchPanel = () => {
    form.classList.remove('show');
    coloseBtn.classList.remove('show');
    search.classList.remove('search__vs');
    search.classList.add('search__icon-search');
    formInput.value = "";
}
search.addEventListener('click',(e)=>{
    if (document.body.clientWidth<450) {
        openSearchPanel()
    }
    if (e.target.classList.contains('search__close-btn') || e.target.classList.contains('search__btn')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        closeSearchPanel();
    }
});