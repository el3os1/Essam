// Array of food names used for IDs and image paths
let names = ['tortilla' , 'paella' , 'churros'];

// Array of 3 facts
let facts = ["Mexico has more Spanish speakers than Spain itself",
  "Spanish is an official language in more than 20 countries.",
  "The Spanish word for 'sugar' azúcar, is very similar to the Arabic word (sukkar)."
]

//function that toggle between two images on clicking
function changePhoto(x) {
  const image1 = document.getElementById(`${names[x]}-photo`);
  if(image1.src.includes(`images/${names[x]}-main1.jpg`)) {
    image1.src = `images/${names[x]}-main2.jpg`;
  } else {
    image1.src = `images/${names[x]}-main1.jpg`;
  }
}

// a loop that adds event listeners to all the 'change' buttons
for(let i = 0; i <= 2; i++){
  document.getElementById(`change-button-${names[i]}`).addEventListener('click', () => changePhoto(i));
}

// function that revels a hidden fact and hide its button
function revel (n) {
  document.getElementById(`${names[n]}-fact`).style.display = 'block';
  document.getElementById(`rand-fact-button-${names[n]}`).style.display = 'none';
}

// a loop that adds click event listeners to all 'random fact' buttons
for(let i = 0; i <=2; i++){
  document.getElementById(`rand-fact-button-${names[i]}`).addEventListener('click', () => revel(i));
}