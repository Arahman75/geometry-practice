function calculateTriangleArea() {
    // triangle base
    const baseField = document.getElementById('triangle-base');
    const baseFieldText = baseField.value;
    const base = parseFloat(baseFieldText)
    // console.log(base);
    // console.log('rectangle button clicked');
    // rectangle height
    const heightField = document.getElementById('triangle-height');
    const heightFieldText = heightField.value;
    const height = parseFloat(heightFieldText);
    // console.log(height);

    const area = 0.5 * base * height;
    // console.log(area);

    const areaField = document.getElementById('triangle-area');
    areaField.innerText = area;
}

function calculateRectangleArea() {
    const rectangleWithField = document.getElementById('rectangle-with');
    const rectangleFieldText = rectangleWithField.value;
    const rectangleWith = parseFloat(rectangleFieldText);
    // console.log(rectangleWith);

    const rectangleLengthField = document.getElementById('rectangle-length');
    const rectangleWithText = rectangleLengthField.value;
    const rectangleLength = parseFloat(rectangleWithText);
    // console.log(rectangleLength);

    const area = rectangleWith * rectangleLength;

    const rectangleAreaField = document.getElementById('rectangle-area');
    rectangleAreaField.innerText = area;

}

// functional code without reuse

function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')
    const height = getInputValue('parallelogram-height')

    const area = base * height;
    setElementInnerText('parallelogram-area', area)
}

// EllipseArea

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius');
    const minorRadius = getInputValue('ellipse-minor-radius');
    const ellipse = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', ellipse)

}


function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area) {
    const elementFieldText = document.getElementById(elementId);
    elementFieldText.innerText = area;

}