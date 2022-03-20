const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const body = document.body;

const theme = localStorage.getItem("theme");

if (theme) {
    body.classList.add(theme);
}
if (theme === "dark") {
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
}
else if (theme === "light") {
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
else {
    body.classList.add("light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
}
const removeAllClasses = () => {
    body.classList.remove(...body.classList.value.split(" "));
};

darkButton.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllClasses();
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");
    darkButton.classList.add("dispn");
    lightButton.classList.remove("dispn");
});

lightButton.addEventListener("click", function (e) {
    e.preventDefault();
    removeAllClasses();
    body.classList.add("light");
    localStorage.setItem("theme", "light");
    lightButton.classList.add("dispn");
    darkButton.classList.remove("dispn");
});
