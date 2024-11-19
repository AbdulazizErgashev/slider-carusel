let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");
let caruselDom = document.querySelector(".carusel");
let listItemDom = document.querySelector(".carusel .list");
let thumbnailDom = document.querySelector(".carusel .thumbnail");

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let timeRuninng = 3000;
let timeAutoNext = 7000;
let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll(".carusel .list .item");
  let itemThumbnail = document.querySelectorAll(".carusel .thumbnail .item");

  if (type === "next") {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    caruselDom.classList.add("next");
  } else {
    let positionLastItem = itemSlider.length - 1;
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    caruselDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    caruselDom.classList.remove("next");
    caruselDom.classList.remove("prev");
  }, timeRuninng);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
}
