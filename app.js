const newNoteButton = document.getElementById("newNoteButton");
const createNoteButton = document.getElementById("createNoteButton");
const bottomModalDiv = document.getElementById("bottomModalDiv");
const section = document.querySelector("section");
const textarea = document.querySelector("textarea");

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
