const greetingContainer = document.getElementById('greeting-message');
const currentHour = new Date().getHours();
let greetingText = '';

if (currentHour < 12) {
  greetingText = 'Good morning!';
} else if (currentHour < 18) {
  greetingText = 'Good afternoon!';
} else {
  greetingText = 'Good evening!';
}

if (greetingContainer) {
  greetingContainer.textContent = greetingText + ' Welcome to my portfolio.';
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });
}

const hobbies = ['Photography', 'Skiing', 'Piano'];
const listContainer = document.getElementById('hobby-list');

if (listContainer) {
  const ul = document.createElement('ul');

  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement('li');
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }

  listContainer.appendChild(ul);
}

const galleryImages = [
  'https://picsum.photos/id/10/600/400',
  'https://picsum.photos/id/250/600/400',
  'https://picsum.photos/id/1062/600/400'
];

let currentIndex = 0;
const galleryImg = document.getElementById('gallery-img');
const galleryCaption = document.getElementById('gallery-caption');
const nextPhotoBtn = document.getElementById('next-photo-btn');

if (galleryImg && galleryCaption) {
  galleryImg.src = galleryImages[currentIndex];
  galleryCaption.textContent = hobbies[currentIndex];
}

if (nextPhotoBtn && galleryImg && galleryCaption) {
  nextPhotoBtn.addEventListener('click', function () {
    currentIndex++;

    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    galleryImg.src = galleryImages[currentIndex];
    galleryCaption.textContent = hobbies[currentIndex];
  });
}