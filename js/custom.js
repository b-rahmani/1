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

const{ searchbar, iconsearch }=elements;
// console.log(iconsearch);
// searchbar.addEventListener(onfocus, () => {
//   alert("onfocused");
// });
