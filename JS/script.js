document.addEventListener("DOMContentLoaded", function() {

    const meuElemento = document.querySelector('.faq');
    const meuLink = document.querySelector('.link');
    const meuBody = document.querySelector('body');

    meuElemento.addEventListener("click", function() {
        meuLink.classList.toggle("show");
    });
});

