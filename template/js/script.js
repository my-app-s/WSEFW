document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".div-for-size");
    const widthSlider = document.querySelector("#range-width");
    const heightSlider = document.querySelector("#range-height");

    const widthDisplay = document.querySelector(".div-for-size-width");
    const heightDisplay = document.querySelector(".div-for-size-height");

    function updateSize() {
        const widthValue = widthSlider.value + "px";
        const heightValue = heightSlider.value + "px";

        div.style.width = widthValue;
        div.style.height = heightValue;

        widthDisplay.textContent = "Width: " + widthValue;
        heightDisplay.textContent = "Height: " + heightValue;
    }

    widthSlider.addEventListener("input", updateSize);
    heightSlider.addEventListener("input", updateSize);
});


document.addEventListener("DOMContentLoaded", function() {
    const div = document.querySelector(".div-for-size");
    const textWidth = document.querySelector("#text-width");
    const textHeight = document.querySelector("#text-height");

    const widthDisplay = document.querySelector(".div-for-size-width");
    const heightDisplay = document.querySelector(".div-for-size-height");
    const updateButton = document.querySelector("#update-button");

    function updateSize() {
        widthValue = textWidth.value + "px";
        heightValue = textHeight.value + "px";

        div.style.width = widthValue;
        div.style.height = heightValue;

        widthDisplay.textContent = "Width: " + widthValue;
        heightDisplay.textContent = "Height: " + heightValue;
    }

    // Обновление по нажатию кнопки
    updateButton.addEventListener("click", updateSize);
});

// By download file for background
document.getElementById("background-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    console.log("Файл загружен:", file);

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log("Файл загружен как URL:", e.target.result);
            document.body.style.backgroundImage = `url('${e.target.result}')`;
        };
        reader.readAsDataURL(file);
    }
});

// By перемешению
const draggableDiv = document.getElementById("div-size");

let offsetX, offsetY, isDragging = false;

draggableDiv.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - draggableDiv.getBoundingClientRect().left;
    offsetY = event.clientY - draggableDiv.getBoundingClientRect().top;
    draggableDiv.style.cursor = "grabbing";

    // Убираем transition во время перетаскивания, чтобы не было задержек
    draggableDiv.style.transition = "none";
});

document.addEventListener("mousemove", (event) => {
    if (isDragging) {
        draggableDiv.style.left = event.clientX - offsetX + "px";
        draggableDiv.style.top = event.clientY - offsetY + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    draggableDiv.style.cursor = "grab";

    // Возвращаем transition после завершения перетаскивания
    draggableDiv.style.transition = "top 0.2s ease, left 0.2s ease";
});

document.addEventListener("keydown", function (e) {
    if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault();
        alert("Открытие панели разработчика запрещено.");
    }
});