const button = document.querySelector("#themeButton");

button.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});