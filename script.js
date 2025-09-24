 
let globalFacts = [
  "CSS can animate using keyframes and transitions.",
  "JavaScript functions can return values!",
  "You can combine CSS and JS for amazing effects.",
  "Animations make UI more engaging.",
  "Scope determines where variables are accessible in JS."
];

 
function getRandomItem(itemsArray) {
  let index = Math.floor(Math.random() * itemsArray.length);
  return itemsArray[index];
}

 
function showRandomFact() {
  const fact = getRandomItem(globalFacts);
  document.getElementById('fact-display').textContent = fact;
}

 

 
function triggerBoxAnimation() {
  const box = document.getElementById('magic-box');
  box.classList.remove('animated');
  void box.offsetWidth;
  box.classList.add('animated');
}

 
function toggleModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay.classList.contains('modal-hidden')) {
    overlay.classList.remove('modal-hidden');
  } else {
    overlay.classList.add('modal-hidden');
  }
}

 

function setBoxColor(boxId, colorName) {
  const el = document.getElementById(boxId);
  if (el) el.style.background = colorName;
}

 

 