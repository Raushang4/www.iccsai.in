
var images = document.querySelectorAll(".myImg");
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var modalCaption = document.getElementById("modalCaption");
var prevButton = document.getElementById("prevBtn");
var nextButton = document.getElementById("nextBtn");
var closeButton = modal.querySelector(".close");
var currentIndex = 0;

function updateModal(index) {
  modalImg.src = images[index].src;
  modalCaption.innerHTML = images[index].alt;
}

function showImage(index) {
  if (index >= 0 && index < images.length) {
    currentIndex = index;
    updateModal(currentIndex);
  }
}

images.forEach(function (img, index) {
  img.onclick = function () {
    currentIndex = index;
    updateModal(currentIndex);
    modal.style.display = "flex"; // Change display to "flex" to center content
  };
});

prevButton.onclick = function () {
  showImage(currentIndex - 1);
};

nextButton.onclick = function () {
  showImage(currentIndex + 1);
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};




// Image Gallery js code
var images = document.querySelectorAll(".myImg");

// Get the modal and its components
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var modalCaption = document.getElementById("modalCaption");

// Get the close button
var closeButton = modal.querySelector(".close");

// Loop through each image and set up the click event
images.forEach(function (img) {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalCaption.innerHTML = this.alt;
  };
});

// Set up the click event for the close button
closeButton.onclick = function () {
  modal.style.display = "none";
};
