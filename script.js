
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".services-container");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    leftBtn.addEventListener("click", () => {
        container.scrollBy({ left: -150, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        container.scrollBy({ left: 150, behavior: "smooth" });
    });
});




