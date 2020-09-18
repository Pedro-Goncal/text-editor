//Update text
function updateText(){
  let text = document.getElementById("text-input").value;
  document.getElementById('text-output').innerText = text;
}

//Make Text Bold
function makeBold(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('bold');
}

//Make text Italic
function makeItalic(elem){
  elem.classList.toggle('active');
  document.getElementById('text-output').classList.toggle('italic');
}

//Make text Underlined
function makeUnderline(elem){
  // Slightly more complex logic just for the porpouse of learning
  elem.classList.toggle('active');
  let formatedText = document.getElementById('text-output');

  if(formatedText.classList.contains('underline')){
    formatedText.classList.remove('underline');
  } else {
    formatedText.classList.add('underline')
  } 
  
}


//Toggle between the diferent alignments
function alignText(elem, alignType){
  
  document.getElementById('text-output').style.textAlign = alignType;
  
  let buttonsList = document.getElementsByClassName('align');

  for(let i = 0; i < buttonsList.length; i++){
    buttonsList[i].classList.remove('active')
  }

  elem.classList.add('active');
}