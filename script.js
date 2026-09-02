const button = document.querySelector("#themeButton");
const pigeon = document.querySelector(".pigeon");
const petCounter = document.querySelector("#pet-counter");
let pets = 0;

button.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

pigeon.addEventListener("click", () => {
    pets++;
    petCounter.textContent = `Pets: ${pets}`;
    pigeon.title = `You have petted the pigeon ${pets} time${pets === 1 ? "" : "s"}.`;

    petCounter.classList.remove("pop");
    void petCounter.offsetWidth;
    petCounter.classList.add("pop");
});
