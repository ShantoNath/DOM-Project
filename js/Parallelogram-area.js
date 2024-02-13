function calculateParallelogramArea() {
    const base = getInputValueById('Parallelogram-base');
    console.log('Parallelogram base is',base);

    const height = getInputValueById('Parallelogram-height');
    console.log('Parallelogram-height is',height);

    const area = base * height;
    console.log('area of the Parallelogram is ', area);

    setInnerTextById('Parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

