// html selector 

function $(selector) {
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

function createButton(textButton) {
  var crBtn = document.createElement("button");
  crBtn.textContent = textButton;
  document.body.appendChild(crBtn);
  return crBtn;
}

// html tag function 

function renderHTML(tag) {
  var fragment = document.createRange().createContextualFragment(tag);
  var HtmlElement = fragment.firstElementChild;
  document.body.appendChild(HtmlElement);
  return HtmlElement;
}
// set size method 

HTMLElement.prototype.setSize = function(width, height) {
  this.style.width = width;
  this.style.height = height;
  return this;
}

// font Size method 
HTMLElement.prototype.setFontSize = function(fontSizeValue) {
  this.style.fontSize = fontSizeValue;
  return this;
}

// set text widget 
HTMLElement.prototype.setTextWeight = function(setTextWeightValue) {
  this.style.fontWeight = setTextWeightValue;
  return this;
}

// set aColor method 

HTMLElement.prototype.aColor = function(backgroundColor, color) {
  this.style.backgroundColor = backgroundColor;
  this.style.color = color;
  return this;
}

// set border redius method 

HTMLElement.prototype.setBorderRadius = function(setBorderRadiusValue) {
  this.style.borderRadius = setBorderRadiusValue;
  return this;
}

// space letter method 

HTMLElement.prototype.spaceLetter = function(spaceLetterValue) {
  this.style.letterSpacing = spaceLetterValue;
  return this;
}

// set coursor method 

HTMLElement.prototype.setCursor = function(setCursorValue) {
  this.style.cursor = setCursorValue;
  return this;
}

// set border method 

HTMLElement.prototype.setBorder = function(setBorderValue) {
  this.style.border = setBorderValue;
  return this;
}

// letter Spacing method 

HTMLElement.prototype.letterSpacing = function(letterSpacingValue) {
  this.style.letterSpacing = letterSpacingValue;
  return this;
}

// bold text method 

HTMLElement.prototype.boldText = function() {
  this.style.fontWeight = "bold";
  return this;
}

// get margin method 

HTMLElement.prototype.setMargin = function(oneValue) {
  this.style.margin = oneValue;
  return this;
}

//center align methid 

HTMLElement.prototype.centerAlign = function(centerAlignValue) {
  this.style.textAlign = "center";
  return this;
}

// set padding method

HTMLElement.prototype.setPadding = function(oneValue) {
  this.style.padding = oneValue;
  return this;
}

// set background color method 

HTMLElement.prototype.setBackgroundColor = function(setBackgroundColorValue) {
  this.style.backgroundColor = setBackgroundColorValue;
  return this;
}

// setColor method 

HTMLElement.prototype.setColor = function(setColorValue) {
  this.style.color = setColorValue;
  return this;
}
// setId method 

HTMLElement.prototype.setId = function(setIdValue) {
  this.id = setIdValue;
  return this;
}

// margin left method 

HTMLElement.prototype.setMarginLeft = function(setMarginLeftValue) {
  this.style.marginLeft = setMarginLeftValue;
  return this;
}


// margin right method (=> new <=)

HTMLElement.prototype.setMarginRight = function(setMarginRightValue) {
  this.style.marginRight = setMarginRightValue;
  return this;
}


// margin top method (=> new <=)

HTMLElement.prototype.setMarginTop = function(setMarginTopValue) {
  this.style.marginTop = setMarginTopValue;
  return this;
}


// margin bottom method (=> new <=)

HTMLElement.prototype.setMarginBottom = function(setMarginBottomValue) {
  this.style.marginBottom = setMarginBottomValue;
  return this;
}


// set display proparty 
HTMLElement.prototype.setDisplay = function(setDisplayValue) {
  this.style.display = setDisplayValue;
  return this;
}

// set none display method 

HTMLElement.prototype.setNoneDisplay = function() {
  this.style.display = "none";
  return this;
}

// set event method 

HTMLElement.prototype.setEvent = function(myEvent, callBack) {
  this.addEventListener(myEvent, callBack);
  return this;
}

// set bone border method 

HTMLElement.prototype.setNoneBorder = function() {
  this.style.border = "none";
  return this;
}

// set Text Transform  method 

HTMLElement.prototype.setTextTransform = function(setTextTransformValue){
  this.style.textTransform = setTextTransformValue;
  return this;
}

// set position method (=> new <=)


HTMLElement.prototype.setPosition = function(setPositionValue){
  this.style.position = setPositionValue;
  return this;
}

// setTextAlign method (=> new <=)

HTMLElement.prototype.setTextAlign = function(setTextAlignValue) {
  this.style.textAlign = setTextAlignValue;
  return this;
}
// set size Px method 

HTMLElement.prototype.setSizePx = function(width, height) {
  this.style.width = typeof width == "number" ? width + "px" : width;
  this.style.height = typeof height == "number" ? height + "px" : height;
  return this;
}

// set Margin Px method 

HTMLElement.prototype.setMarginPx = function(oneValue) {
  
  this.style.margin = typeof oneValue == "number" ? oneValue + "px" : oneValue;
  return this;
}

// set font size px method 

HTMLElement.prototype.setFontSizePx = function(setFontSizePxValue) {
  this.style.fontSize = typeof setFontSizePxValue == "number" ? setFontSizePxValue + "px" : setFontSizePxValue;
  return this;
}

// set border redius px method 

HTMLElement.prototype.setBorderRadiusPx = function(setBorderRadiusPxValue) {
  this.style.borderRadius = typeof setBorderRadiusPxValue == "number" ? setBorderRadiusPxValue + "px" : setBorderRadiusPxValue;
  return this;
}
// set width and height method 

HTMLElement.prototype.sizeWh = HTMLElement.prototype.setSize;

// set width and height px method 

HTMLElement.prototype.sizeWhPx = HTMLElement.prototype.setSizePx;

// set center align method 

HTMLElement.prototype.setCenterAlign = HTMLElement.prototype.centerAlign;

// set font weight method 

HTMLElement.prototype.setFontWeight = HTMLElement.prototype.setTextWeight;

// new function keyword 

// easycode.js में सबसे ऊपर जोड़ दो
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then(function(reg) {
    // अगर पहली बार रजिस्टर हुआ है, तो एक बार पेज रीलोड ताकि सर्विस वर्कर कंट्रोल ले ले
    if (!navigator.serviceWorker.controller) {
      window.location.reload();
    }
  });
}



// testing a all function and method (v0.10a)


var h1 = renderHTML("<h1>hello</h1>");
h1.setTextAlign("center");
h1.setTextTransform("uppercase");
