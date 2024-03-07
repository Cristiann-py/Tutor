document.addEventListener('DOMContentLoaded', function() {
  const tutoringReadMore = document.getElementById('tutoring-read-more');
  const tutoringContent = document.getElementById('tutoring-content');
  const tutoringFormIframe = document.getElementById('tutoring-form');
  const backFromTutoring = document.getElementById('back-from-tutoring');
  const aboutMeReadMore = document.getElementById('about-me-read-more');
  const aboutMeContent = document.getElementById('about-me-content');
  const backFromAboutMe = document.getElementById('back-from-about-me');
  const container = document.querySelector('.container');

  tutoringReadMore.addEventListener('click', function(event) {
    event.preventDefault();
    tutoringContent.classList.add('visible');
    tutoringFormIframe.classList.remove('hidden');
    container.style.display = 'none';
  });

  backFromTutoring.addEventListener('click', function() {
    tutoringContent.classList.remove('visible');
    tutoringFormIframe.classList.add('hidden');
    container.style.display = 'flex';
  });

  aboutMeReadMore.addEventListener('click', function(event) {
    event.preventDefault();
    aboutMeContent.classList.add('visible');
    container.style.display = 'none';
  });

  backFromAboutMe.addEventListener('click', function() {
    aboutMeContent.classList.remove('visible');
    container.style.display = 'flex';
  });
  const buttons = document.querySelectorAll('.tab-button');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-for-tab');
      const tabToShow = document.getElementById(`tab-${tabId}`);

      contents.forEach(content => {
        content.classList.remove('visible');
      });

      tabToShow.classList.add('visible');
    });
  });

  // Back button logic to show the collage again and hide content boxes
  const backButton = document.getElementById('back-from-about-me');
  backButton.addEventListener('click', function() {
    contentBoxes.forEach(box => {
      box.classList.add('hidden');
    });
    collageImage.classList.remove('hidden');
  });
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
