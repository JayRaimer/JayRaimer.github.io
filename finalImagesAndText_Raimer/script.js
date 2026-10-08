// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');

// Array of slides (10 images)
const slides = [
{ src: 'images/image01.jpg', 
  alt: 'fisherman on water with a sunset',
  caption: 'Just good enough or something more'
},
{ src: 'images/image02.jpg', 
  alt: 'snowy landscape',
  caption: 'Always comparing and never appreciating'
},
{ src: 'images/image03.jpg', 
  alt: 'person on a hill',
  caption: 'The joy of creation, buried under expectations'
},
{ src: 'images/image04.jpg', 
  alt: 'cactus in a desert',
  caption: 'Letting go is always the hardest part'
},
{ src: 'images/image05.jpg', 
  alt: 'cat outside',
  caption: 'Changes happen, but go unnoticed'
},
{ src: 'images/image06.jpg', 
  alt: 'character in different poses',
  caption: 'Blind to your creation. Unable to see progress'
},
{ src: 'images/image07.jpg', 
  alt: 'person sitting under a tree',
  caption: 'They say ‘trust the process’ but saying is easier than doing'
},
{ src: 'images/image08.png', 
  alt: 'sketch of a campground',
  caption: 'Its better to try then not try at all'
},
{ src: 'images/image09.png', 
  alt: 'cowboy at a campfire',
  caption: 'Practice makes perfect, a simple truth that can be hard to believe'
},
{ src: 'images/image10.png', 
  alt: 'charcter sheet of two guys',
  caption: 'Even if unnoticed, progress happens still'
}
];

let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; //replaces the image
mainImage.alt = slide.alt; //replaces the alt of the image
	caption.textContent=slide.caption; //updates caption text
}
// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);