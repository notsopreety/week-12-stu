// 1. Time-Based Greeting & Dark Mode (Existing Features)
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
  greetingContainer.textContent = `${greetingText} Welcome to my portfolio.`;
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});


// 2. Step 1: Hobby/Skill List Rendering (Required)
const hobbies = ['Photography', 'Skiing', 'Piano', 'Cooking'];
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


// 3. Step 2: Hobby Gallery Extension (Optional Challenge)
const galleryImages = [
  'https://picsum.photos/id/10/600/400',
  'https://picsum.photos/id/250/600/400',
  'https://picsum.photos/id/1062/600/400'
];

let currentIndex = 0;
const galleryImageTag = document.getElementById('gallery-image');
const nextPhotoBtn = document.getElementById('next-photo-btn');

if (nextPhotoBtn && galleryImageTag) {
  nextPhotoBtn.addEventListener('click', function() {
    currentIndex++;

    // Crucial Step: Reset index to 0 when it reaches the end to prevent undefined errors
    if (currentIndex >= galleryImages.length) {
      currentIndex = 0;
    }

    galleryImageTag.src = galleryImages[currentIndex];
  });
}