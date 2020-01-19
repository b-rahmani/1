const shaked = () => {
  iconsearch.classList.add("shake");
};
const reset = () => {
  iconsearch.classList.remove("shake");
};

const elements = {
  searchbar: document.querySelector(".searchbar"),
  iconsearch: document.querySelector(".icon-search")
};

const { searchbar, iconsearch } = elements;
// console.log(iconsearch);
// searchbar.addEventListener(onfocus, () => {
//   alert("onfocused");
// });
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
