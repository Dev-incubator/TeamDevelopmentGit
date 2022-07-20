document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#report-created").innerHTML = new Date().toDateString();
    document.querySelector("#estimation-period").innerHTML = `${1901 + Math.floor(Math.random() * 10)} ... ${new Date().getFullYear()}`
});