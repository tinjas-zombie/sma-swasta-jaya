// sidebar menu
const buttonMenu = document.getElementById("button-menu-mobile");
const kontenSidebar = document.getElementById("sidebar");

buttonMenu.addEventListener("click" , () => {
    kontenSidebar.classList.toggle("active");
});