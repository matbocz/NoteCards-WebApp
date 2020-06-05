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

/* --------------------Create note-------------------- */
const createNote = () => {
    const noteText = textarea.value;

    if (noteText === "") alert("You must enter the note!");
    else {
        const note = document.createElement("div");

        note.className = "note";
        note.innerHTML = "<span>&times;</span><br /><br />" + noteText;
        note.querySelector("span").addEventListener("click", removeNote);

        noteList.push(note);
        renderList();

        clearElement(textarea);
        hideElement(bottomModalDiv);
    }
};

createNoteButton.addEventListener("click", createNote);
/* ---------------------------------------- */

/* --------------------Remove note-------------------- */
const removeNote = (e) => {
    // e.target.parentNode.remove();
    const noteKey = e.target.parentNode.dataset.key;

    noteList.splice(noteKey, 1);
    renderList();
};
/* ---------------------------------------- */

/* --------------------Render note list-------------------- */
const renderList = () => {
    section.innerHTML = ""; // clear section
    noteList.forEach((note, key) => {
        note.dataset.key = key; // set the correct key for each note (the same as in array)
        section.appendChild(note); // add notes to section
    });
};
/* ---------------------------------------- */

/* --------------------Search note-------------------- */
const searchNote = (e) => {
    const searchText = e.target.value.toLowerCase();
    let searchedNotes = [];

    searchedNotes = noteList.filter((note) =>
        note.textContent.toLowerCase().includes(searchText)
    );

    section.innerHTML = ""; // clear section
    searchedNotes.forEach((note) => section.appendChild(note)); // add searched notes to section
};

input.addEventListener("input", searchNote);
/* ---------------------------------------- */
