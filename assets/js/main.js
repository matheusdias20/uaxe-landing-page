const menuBtn = document.getElementById("menu__hamburguer")
const menuList = document.querySelector(".navbar__list")


menuBtn.addEventListener("click", () => {
    if (menuBtn.classList.contains("ri-menu-fill")) {
        menuBtn.classList.remove("ri-menu-fill")
        menuBtn.classList.add("ri-close-fill")
        menuList.classList.add("active")
    } else {
        menuBtn.classList.remove("ri-close-fill")
        menuBtn.classList.add("ri-menu-fill")
        menuList.classList.remove("active")
    }
})