document.getElementById('tutoring-read-more').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('tutoring-content').classList.add('visible');
  document.querySelector('.container').style.display = 'none';
});

document.getElementById('about-me-read-more').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('about-me-content').classList.add('visible');
  document.querySelector('.container').style.display = 'none';
});

document.getElementById('back-from-tutoring').addEventListener('click', function() {
  document.getElementById('tutoring-content').classList.remove('visible');
  document.querySelector('.container').style.display = 'flex'; // Adjust display as per your layout
});

document.getElementById('back-from-about-me').addEventListener('click', function() {
  document.getElementById('about-me-content').classList.remove('visible');
  document.querySelector('.container').style.display = 'flex'; // Adjust display as per your layout
});
const unsplashAccessKey = 'iZ3RKNcSAZWBg9SuRkZH8mHQchjFkHNlX4SWvd4dEoU';
const natureImageUrl = `https://api.unsplash.com/photos/random?query=nature&client_id=${unsplashAccessKey}`;
const classroomImageUrl = `https://api.unsplash.com/photos/random?query=classroom&client_id=${unsplashAccessKey}`;
/*
// Function to set background image for a given element
function setBackgroundImage(element, url) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      element.style.backgroundImage = `url('${data.urls.regular}')`;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center center';
    })
    .catch(error => console.error('Error fetching Unsplash image:', error));
}

// Select the elements to change background images
const leftSplit = document.querySelector('.split.left');
const rightSplit = document.querySelector('.split.right');

// Set the background images from Unsplash on page load
document.addEventListener('DOMContentLoaded', () => {
  setBackgroundImage(leftSplit, classroomImageUrl);
  setBackgroundImage(rightSplit, natureImageUrl);
});
*/
