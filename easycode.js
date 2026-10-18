"use strict";
// create button function 
function createButton(text) {
    var crBtn = document.createElement("button");
    crBtn.textContent = text;
    document.body.appendChild(crBtn);
    // button style
    crBtn.sizeWh = function (width, height) {
        crBtn.style.width = width;
        crBtn.style.height = height;
    };
    // button txtColor ans background color 
    crBtn.aColor = function (bgCol, txtCol) {
        crBtn.style.backgroundColor = bgCol;
        crBtn.style.color = txtCol;
    };
    crBtn.setFontSize = function (fntSize) {
        crBtn.style.fontSize = fntSize;
    };
    crBtn.setBorderRadius = function (borderrRadius) {
        crBtn.style.borderRadius = borderrRadius;
    };
    crBtn.setTextWeight = function (fontWeightValue) {
        crBtn.style.fontWeight = fontWeightValue;
    };
    crBtn.spaceLetter = function (spaceLetterValue) {
        crBtn.style.letterSpacing = spaceLetterValue;
    };
    return crBtn;
}
