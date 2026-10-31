// html selector (=> new <=)

function $(selector){
  var htmlElemet = selector.charAt(0);
  var element = selector.substring(1);
  if (htmlElemet == "#") {
    return document.getElementById(element)
  }
  if (htmlElemet == ".") {
    return document.getElementsByClassName(element);
  }
  return document.getElementsByTagName(selector);
}

// create button function 

function createButton(textButton){
  var crBtn = document.createElement("button");
  crBtn.textContent = textButton;
  document.body.appendChild(crBtn);
  return crBtn;
}

// html tag function (=> new <=)

function renderHTML(tag){
  var fragment = document.createRange().createContextualFragment(tag);
  var HtmlElement = fragment.firstElementChild;
  document.body.appendChild(HtmlElement);
  return HtmlElement;
}
// set size method 

HTMLElement.prototype.setSize = function(width,height){
  this.style.width = width;
  this.style.height = height;
  return this;
}

// font Size method 
HTMLElement.prototype.setFontSize = function(fontSizeValue){
  this.style.fontSize = fontSizeValue;
  return this;
}

// set text widget 
HTMLElement.prototype.setTextWeight = function(setTextWeightValue){
  this.style.fontWeight = setTextWeightValue;
  return this;
}

// set aColor method 

HTMLElement.prototype.aColor = function(backgroundColor,color) {
  this.style.backgroundColor = backgroundColor;
  this.style.color = color;
  return this;
}

// set border redius method 

HTMLElement.prototype.setBorderRadius = function(setBorderRadiusValue){
  this.style.borderRadius = setBorderRadiusValue;
  return this;
}

// space letter method 

HTMLElement.prototype.spaceLetter = function(spaceLetterValue){
  this.style.letterSpacing = spaceLetterValue;
  return this;
}

// set coursor method 

HTMLElement.prototype.setCursor = function(setCursorValue){
  this.style.cursor = setCursorValue;
  return this;
}

// set border method 

HTMLElement.prototype.setBorder = function(setBorderValue){
  this.style.border = setBorderValue;
  return this;
}

// letter Spacing method 

HTMLElement.prototype.letterSpacing = function(letterSpacingValue){
  this.style.letterSpacing = letterSpacingValue;
  return this;
}

// bold text method 

HTMLElement.prototype.boldText = function(){
  this.style.fontWeight = "bold";
  return this;
}

// get margin method 

HTMLElement.prototype.setMargin = function(oneValue,towValue,threeValue,fourValue) {
  this.style.margin = oneValue;
  this.style.margin = towValue;
  this.style.margin = threeValue;
  this.style.margin = fourValue;
  return this;
}

//center align methid 

HTMLElement.prototype.centerAlign = function(centerAlignValue){
  this.style.textAlign = "center";
  return this;
}

// set padding method 

HTMLElement.prototype.setPadding = function(oneValue,towValue,threeValue,fourValue) {
  this.style.padding = oneValue;
  this.style.padding = towValue;
  this.style.padding = threeValue;
  this.style.padding = fourValue;
  return this;
}

// set background color method 

HTMLElement.prototype.setBackgroundColor = function(setBackgroundColorValue){
  this.style.backgroundColor = setBackgroundColorValue;
  return this;
}

// setColor method (=> new <=)

HTMLElement.prototype.setColor = function(setColorValue){
  this.style.color = setColorValue;
  return this;
}
// setId method (=> new <=)

HTMLElement.prototype.setId = function(setIdValue){
  this.id = setIdValue;
  return this;
}

// margin left method 

HTMLElement.prototype.setMarginLeft = function (setMarginLeftValue) {
  this.style.marginLeft = setMarginLeftValue;
  return this;
}
// set size Px method 

HTMLElement.prototype.setSizePx = function(width,height){
  this.style.width = typeof width == "number" ? width + "px": width;
  this.style.height = typeof height == "number" ? height + "px": height;
  return this;
}

// set Margin Px method 

HTMLElement.prototype.setMarginPx = function(oneValue,towValue,towValue,fourValue) {
  
  this.style.margin = typeof oneValue == "number" ? oneValue + "px": oneValue;
  
  this.style.margin = typeof towValue == "number" ? towValue + "px": towValue;
  
  this.style.margin = typeof towValue == "number" ? towValue + "px": towValue;
  
  this.style.margin = typeof fourValue == "number" ? fourValue + "px": fourValue;
  
  return this;
} 

// set font size px method 

HTMLElement.prototype.setFontSizePx = function(setFontSizePxValue){
  this.style.fontSize = typeof setFontSizePxValue == "number" ? setFontSizePxValue + "px" : setFontSizePxValue;
  return this;
}


// set width and height method 

HTMLElement.prototype.sizeWh = HTMLElement.prototype.setSize;

// set width and height px method 

HTMLElement.prototype.sizeWhPx = HTMLElement.prototype.setSizePx;

// testing a all function and method 
