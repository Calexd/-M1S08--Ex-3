let elementoPai = document.getElementById('elementoPai');
let button = document.getElementById("button-text");
let textInput = document.getElementById("textInput");

button.addEventListener('click', () => {
    let newText = textInput.value;
    let newElement = document.createElement('p');
    newElement.textContent = newText;
    elementoPai.appendChild(newElement);
    console.log(newElement)
})
