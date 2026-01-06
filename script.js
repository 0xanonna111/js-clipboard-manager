const textarea = document.getElementById("text");
const status = document.getElementById("status");

function copyText() {
  navigator.clipboard.writeText(textarea.value)
    .then(() => {
      status.innerText = "Text copied to clipboard!";
    });
}

function pasteText() {
  navigator.clipboard.readText()
    .then(text => {
      textarea.value = text;
      status.innerText = "Text pasted from clipboard!";
    });
}

function clearText() {
  textarea.value = "";
  status.innerText = "Text cleared!";
}
