window.onload = function () {
    let basket = document.querySelector("#basket");
    let modal = document.querySelector(".modal");
    let close = document.querySelector(".close");

    function toggleModal() {
        modal.classList.toggle("isOpen");
    };

    /* после функций не ставим скобки */
    basket.addEventListener("click", toggleModal);
    close.addEventListener("click", toggleModal);

    /* новый скрипт */
    new WOW().init();
}
