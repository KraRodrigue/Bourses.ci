const toggleBtn = document.getElementById("toggleBtn");
const iconUp = document.getElementById("iconUp");

toggleBtn.addEventListener("click", () => {
    iconUp.classList.toggle("show");
});