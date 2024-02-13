function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-redius');
    const minorRadius = getInputValueById('ellipse-minor-redius');
    const area = 3.14 * majorRadius * minorRadius;

    setInnerText('ellipse-area', area);
}