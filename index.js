// select button and links
const navBtn = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");
const loadMoreBtn = document.querySelector("#load-more");

let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".project-card")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
// add event listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".nav-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // prevent default
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    //
    let position = element.offsetTop - 62;

    window.scrollTo({
      left: 0,
      // top: element.offsetTop,
      top: position,
      behavior: "smooth",
    });
  });
});
