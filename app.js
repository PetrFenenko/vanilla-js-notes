import notesArray from "./notesArray.js";

const notesTable = document.getElementById("notes-table");
const addNoteButton = document.getElementById("addNoteButton");
const displayArchived = document.getElementById("displayArchived");
const displayActive = document.getElementById("displayActive");

const renderActiveNotes = () => {
  // Removing currently displayed entries

  Array.from(notesTable.getElementsByClassName("entry")).map((childElement) =>
    childElement.remove(),
  );

  //   Rendering active entries

  notesArray.map((noteData, noteIndex) => {
    !noteData.archived &&
      notesTable.appendChild(createNoteElement(noteData, noteIndex));
  });

  displayActive.style = "display: none;";
  displayArchived.style = "display: box;";
};

const renderArchivedNotes = () => {
  // Removing currently displayed entries

  Array.from(notesTable.getElementsByClassName("entry")).map((childElement) =>
    childElement.remove(),
  );

  //   Rendering archived entries

  notesArray.map((noteData, noteIndex) => {
    noteData.archived &&
      notesTable.appendChild(createNoteElement(noteData, noteIndex));
  });

  displayArchived.style = "display: none;";
  displayActive.style = "display: box;";
};

//  Rendering a list entry
const createNoteElement = (noteData, noteIndex) => {
  const dateOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const noteElement = document.createElement("tr");
  noteElement.classList.add("entry");
  noteElement.id = `note-${noteIndex}`;

  const name = document.createElement("td");
  name.textContent = noteData.name;
  name.classList.add("entry__name");
  noteElement.appendChild(name);

  const createdOn = document.createElement("td");
  createdOn.textContent = noteData.created.toLocaleDateString(
    "en-US",
    dateOptions,
  );
  noteElement.appendChild(createdOn);

  const category = document.createElement("td");
  category.textContent = noteData.category;
  noteElement.appendChild(category);

  const content = document.createElement("td");
  content.textContent = noteData.content;
  noteElement.appendChild(content);

  const dates = document.createElement("td");
  dates.textContent = noteData.dates;
  noteElement.appendChild(dates);

  return noteElement;
};
displayArchived.addEventListener("click", renderArchivedNotes);

displayActive.addEventListener("click", renderActiveNotes);

renderActiveNotes();
