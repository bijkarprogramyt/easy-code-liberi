export {};

declare global {
interface HTMLElement {
  // method type decleration
  // size width and height type decleretion 
  sizeWh: (width: string, height: string) => void;
  // textColor type decleration 
  aColor: (bgCol: string, txtCol: string) => void;
  // setFontSize type decleration 
  setFontSize: (fntSize: string) => void;
  //setBorderRadius type decleration 
  setBorderRadius: (borderrRadius: string) => void;
  //setTextWeight type decleration
  setTextWeight: (fontWeightValue: string) => void;
  // letterSpacing type decleretion
  spaceLetter: (spaceLetterValue: string) => void;
  setCursor: (cursorValue: string) => void;
  setBorder: (borderValue:string) => void;

}
}
  // element ka size 
HTMLElement.prototype.sizeWh = function(width: string, height: string) {
    this.style.width = width;
    this.style.height = height;
  }
  // button txtColor ans background color 
HTMLElement.prototype.aColor = function(bgCol: string, txtCol: string) {
    this.style.backgroundColor = bgCol;
    this.style.color = txtCol;
  }
  // elemet ka font size 
HTMLElement.prototype.setFontSize = function(fntSize: string) {
    this.style.fontSize = fntSize;
  }
  //element border redius 
HTMLElement.prototype.setBorderRadius = function(borderrRadius: string) {
    this.style.borderRadius = borderrRadius;
  }
  // element font weight 
HTMLElement.prototype.setTextWeight = function(fontWeightValue: string) {
    this.style.fontWeight = fontWeightValue;
  }
  // space elemet letter 
HTMLElement.prototype.spaceLetter = function(spaceLetterValue: string) {
    this.style.letterSpacing = spaceLetterValue;
  }
  // elemet corusor
HTMLElement.prototype.setCursor = function(cursorValue: string) {
    this.style.cursor = cursorValue;
  }
  // elemet border 
HTMLElement.prototype.setBorder = function(borderValue:string){
    this.style.border = borderValue;
  }

  
  // create button function 
function createButton(text: string) {
  var crBtn = document.createElement("button");
  crBtn.textContent = text;
  document.body.appendChild(crBtn);
  return crBtn;
}