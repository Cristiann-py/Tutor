const tutoringReadMore = document.getElementById('tutoring-read-more');
const tutoringContent = document.getElementById('tutoring-content');
const tutoringFormIframe = document.getElementById('tutoring-form');
const backFromTutoring = document.getElementById('back-from-tutoring');
const aboutMeReadMore = document.getElementById('about-me-read-more');
const aboutMeContent = document.getElementById('about-me-content');
const backFromAboutMe = document.getElementById('back-from-about-me');
const container = document.querySelector('.container');

// Event listener for "Read More" on Tutoring
tutoringReadMore.addEventListener('click', function(event) {
  event.preventDefault();
  tutoringContent.classList.add('visible');
  tutoringFormIframe.classList.remove('hidden'); // Make the iframe visible
  container.style.display = 'none'; // Hide the split view
});

// Event listener for "Back" on Tutoring content
backFromTutoring.addEventListener('click', function() {
  tutoringContent.classList.remove('visible');
  tutoringFormIframe.classList.add('hidden'); // Hide the iframe again
  container.style.display = 'flex'; // Show the split view
});

// Event listener for "Read More" on About Me
aboutMeReadMore.addEventListener('click', function(event) {
  event.preventDefault();
  aboutMeContent.classList.add('visible');
  container.style.display = 'none'; // Hide the split view
});

// Event listener for "Back" on About Me content
backFromAboutMe.addEventListener('click', function() {
  aboutMeContent.classList.remove('visible');
  container.style.display = 'flex'; // Show the split view
});

/*
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

document.getElementById('tutoring-read-more').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('tutoring-content').classList.add('visible');
  // Remove the 'hidden' class to display the iframe
  const tutoringFormIframe = document.querySelector('#tutoring-content iframe');
  tutoringFormIframe.classList.remove('hidden');
  document.querySelector('.container').style.display = 'none';
});

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
