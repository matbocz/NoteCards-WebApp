const noteList = [];

const newNoteButton = document.getElementById("newNoteButton");
const createNoteButton = document.getElementById("createNoteButton");
const bottomModalDiv = document.getElementById("bottomModalDiv");
const section = document.querySelector("section");
const textarea = document.querySelector("textarea");
const input = document.querySelector("input");

/* --------------------Basic-------------------- */
const hideElement = function (element) {
    element.style.display = "none";
};

const showElement = function (element) {
    element.style.display = "block";
};

const clearElement = function (element) {
    element.value = "";
};
/* ---------------------------------------- */

/* --------------------Modal-------------------- */
newNoteButton.addEventListener("click", () => showElement(bottomModalDiv));

window.addEventListener("click", (e) => {
    if (e.target == bottomModalDiv) {
        hideElement(bottomModalDiv);
    }
});
/* ---------------------------------------- */
