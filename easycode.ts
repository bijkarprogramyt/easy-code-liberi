interface HTMLStyleString extends HTMLButtonElement {
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
  setTextWeight: (fontWeightValue:string) => void;
  // letterSpacing type decleretion
  spaceLetter: (spaceLetterValue:string) => void;
}

// create button function 

function createButton(text: string) {
  var crBtn = document.createElement("button") as HTMLStyleString;
  crBtn.textContent = text;
  document.body.appendChild(crBtn);
  // button style
  
  crBtn.sizeWh = function(width: string, height: string) {
    crBtn.style.width = width;
    crBtn.style.height = height;
  }
  // button txtColor ans background color 
  crBtn.aColor = function(bgCol: string, txtCol: string) {
    crBtn.style.backgroundColor = bgCol;
    crBtn.style.color = txtCol;
  }
  crBtn.setFontSize = function(fntSize: string) {
    crBtn.style.fontSize = fntSize;
  }
  crBtn.setBorderRadius = function(borderrRadius: string) {
    crBtn.style.borderRadius = borderrRadius;
  }
  crBtn.setTextWeight = function(fontWeightValue:string) {
    crBtn.style.fontWeight = fontWeightValue;
  }
  crBtn.spaceLetter = function(spaceLetterValue:string){
    crBtn.style.letterSpacing = spaceLetterValue;
  }
  return crBtn;
}