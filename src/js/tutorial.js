/* -------------------------------- */
/*    Start drag visual feedback    */
/* -------------------------------- */
export function onStartDrag(ev) {
  // Set data for transfer
  ev.dataTransfer.setData("text", ev.target.id);
}

/* -------------------------------- */
/*        Handle drop action        */
/* -------------------------------- */
export function onDrop(ev) {
  ev.preventDefault();
  // Retrieve data from drag
  const id = ev.dataTransfer.getData("text");

  if (id == "source" && ev.target.id == "destination") {
    const nodeCopy = document.getElementById(id).cloneNode(true);
    nodeCopy.id = "newId";
    ev.target.appendChild(nodeCopy);
  }

  ev.currentTarget.style.background = "";
}

/* -------------------------------- */
/*         Allow drop action        */
/* -------------------------------- */
export function onDragOver(ev) {
  ev.preventDefault();
}

/* -------------------------------- */
/*      Highlight on drag enter     */
/* -------------------------------- */
export function onDragEnter(ev) {
  ev.currentTarget.style.background = "#0a0a15";
}

/* -------------------------------- */
/*        Reset on drag leave       */
/* -------------------------------- */
export function onDragLeave(ev) {
  ev.currentTarget.style.background = "#2b002b";
}

/* -------------------------------- */
/*       End drag reset styles      */
/* -------------------------------- */
export function onEndDrag(ev) {
  ev.target.style.border = "3px dashed #ff00ff";
}
