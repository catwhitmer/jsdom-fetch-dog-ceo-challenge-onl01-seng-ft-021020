console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchImages() {
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(resp => resp.json())
  .then(json => renderImages(json));
}

function renderImages(json) {
  const div = document.getElementById("dog-image-container");
  json.forEach(image => {
    let newImage = document.createElement('img');
    newImage.src = image;
    div.appendChild(newImage);
  })
}






document.addEventListener('DOMContentLoaded', function() {
  fetchImages()
})
