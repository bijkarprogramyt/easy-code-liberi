// create button function 

function createButton(text){
  var crBtn = document.createElement("button");
  crBtn.textContent = text;
  document.body.appendChild(crBtn);
  
  // button style
  
  crBtn.buttonWh = function(width, height) {
    crBtn.style.width = width;
    crBtn.style.height = height;
  }
  // button txtColor ans background color 
  crBtn.aColor = function(bgCol,txtCol){
    crBtn.style.backgroundColor = bgCol;
    crBtn.style.color = txtCol;
  }
  crBtn.setFontSize = function(fntSize){
    crBtn.style.fontSize = fntSize;
  }
  crBtn.setBorderRadius = function(borderrRadius){
    crBtn.style.borderRadius = borderrRadius;
  }
  return crBtn;
}