function calculateRectangleArea(){
    // get rectangle length
    const lengthInput = document.getElementById('rectangle-length').value;
    const length = parseFloat(lengthInput);
    console.log(length);

    // get rectangle width 
    const widthInput = document.getElementById('rectangle-width').value;
    const width = parseFloat(widthInput);
    console.log(width);

    // calculate area 
    const area = length * width;
    console.log('area of the rectangle', area);

    // display triangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}