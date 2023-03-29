const burgerMenu = document.querySelector(".burger-menu");

burgerMenu.addEventListener("click", function() {
    document.getElementById("activated-burger-id").classList.toggle("activation-burger-menu");
});