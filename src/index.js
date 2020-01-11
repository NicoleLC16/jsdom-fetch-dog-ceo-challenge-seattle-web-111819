//urls
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

//fetches
function fetchDogImage() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => addImageArray(json.message))
}

fetchDogBreed = () => {
  fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreedCollection(json.message))
}

addDogImage = dogImage => {
  let img = document.createElement("img")
  img.src = dogImage
  img.style.width = "25%";
  img.style.height = "400px";
  document.getElementById("dog-image-container").appendChild(img)
}

addImageArray = imageArray => {
  imageArray.forEach(image => { 
    addDogImage(image)
  });
}

addBreedName = breedName => {
  let breed = document.createElement("li")
  breed.innerText = breedName
  document.getElementById("dog-breeds").appendChild(breed)

  breed.addEventListener("click", function(e) {
    e.target.style.color = "fuchsia"
  })
}

function addBreedCollection(breedsArray) {
  Object.keys(breedsArray).forEach(breed => {
    addBreedName(breed);
  });
}

//PAGE LOAD
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded!")
  fetchDogImage();
  fetchDogBreed();
})