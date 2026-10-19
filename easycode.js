
// element ka size 
HTMLElement.prototype.sizeWh = function (width, height) {
    this.style.width = width;
    this.style.height = height;
};
// button txtColor ans background color 
HTMLElement.prototype.aColor = function (bgCol, txtCol) {
    this.style.backgroundColor = bgCol;
    this.style.color = txtCol;
};
// elemet ka font size 
HTMLElement.prototype.setFontSize = function (fntSize) {
    this.style.fontSize = fntSize;
};
//element border redius 
HTMLElement.prototype.setBorderRadius = function (borderrRadius) {
    this.style.borderRadius = borderrRadius;
};
// element font weight 
HTMLElement.prototype.setTextWeight = function (fontWeightValue) {
    this.style.fontWeight = fontWeightValue;
};
// space elemet letter 
HTMLElement.prototype.spaceLetter = function (spaceLetterValue) {
    this.style.letterSpacing = spaceLetterValue;
};
// elemet corusor
HTMLElement.prototype.setCursor = function (cursorValue) {
    this.style.cursor = cursorValue;
};
// elemet border 
HTMLElement.prototype.setBorder = function (borderValue) {
    this.style.border = borderValue;
};
// create button function 
function createButton(text) {
    var crBtn = document.createElement("button");
    crBtn.textContent = text;
    document.body.appendChild(crBtn);
    return crBtn;
}

//export {};