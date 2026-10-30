// create button var
function createButton(textButton){
  var crBtn = document.createElement("button");
  crBtn.textContent = textButton;
  document.body.appendChild(crBtn);
  return crBtn;
}

// set size method 

HTMLElement.prototype.setSize = function(width,height){
  this.style.width = width;
  this.style.height = height;
}

// font Size method 
HTMLElement.prototype.setFontSize = function(fontSizeValue){
  this.style.fontSize = fontSizeValue;
}

// set text widget 
HTMLElement.prototype.setTextWeight = function(setTextWeightValue){
  this.style.fontWeight = setTextWeightValue;
}

// set aColor method 

HTMLElement.prototype.aColor = function(backgroundColor,color) {
  this.style.backgroundColor = backgroundColor;
  this.style.color = color;
}

// set border redius method 

HTMLElement.prototype.setBorderRadius = function(setBorderRadiusValue){
  this.style.borderRadius = setBorderRadiusValue;
}

// space letter method 

HTMLElement.prototype.spaceLetter = function(spaceLetterValue){
  this.style.letterSpacing = spaceLetterValue;
}

// set coursor method 

HTMLElement.prototype.setCursor = function(setCursorValue){
  this.style.cursor = setCursorValue;
}

// set border method 

HTMLElement.prototype.setBorder = function(setBorderValue){
  this.style.border = setBorderValue;
}

// letter Spacing method (=> new <=)

HTMLElement.prototype.letterSpacing = function(letterSpacingValue){
  this.style.letterSpacing = letterSpacingValue;
}

// bold text method (=> new <=)

HTMLElement.prototype.boldText = function(){
  this.style.fontWeight = "bold";
}

// set size Px method (=> new <=)

HTMLElement.prototype.setSizePx = function(width,height){
  this.style.width = typeof width == "number" ? width + "px": width;
  this.style.height = typeof height == "number" ? height + "px": height;
}

// testing a all function and method 

var x = createButton("myButton");
x.setSize("130px","50px");
x.setFontSize("16px");
x.boldText();
x.aColor("blue","white");
x.setBorderRadius("8px");
x.letterSpacing("2px")
x.setCursor("pointer")
x.setBorder("none");
