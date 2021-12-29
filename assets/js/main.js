var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// var myModal = new bootstrap.Modal(document.getElementById('myModal'), {});

// setTimeout(() => {
//     myModal.show();
// }, 1000);

// setTimeout(() => {
//     myModal.hide();
// }, 3000);

var idBtnUp = "#btn-up";
var btnUp = document.querySelector(idBtnUp);

/* Escuchador para el scroll de la ventana */
window.addEventListener("scroll", function () {
    // Cada vez que el scrollY sea mayor o igual a 20 se agrega la clase "nuevaClase" al elemento con id "#elemento"
    /* Clases del navbar */
    document.querySelector("nav").classList.toggle("bg-light", window.scrollY < 20);
    document.querySelector("nav").classList.toggle("bg-warning", window.scrollY >= 20);

    /* Boton To Top */
    btnUp.classList.toggle("d-none", window.scrollY <= 50);
})

document.querySelector("#btn-up").addEventListener("click", function () {
    window.scrollTo(0, 0);
})