const LIST = document.querySelector("#infinitelist");
let currentElement = 1;

function initial(n) {
  for (let i = 0; i < n; i++) {
    LIST.innerHTML += `<div class="box" id="box${currentElement}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>`;
    addColor(`box${currentElement}`);
    currentElement++;
  }
}

function loadData(n) {
  for (let i = 0; i < n; i++) {
    LIST.innerHTML += `<div class="box" id="box${currentElement}">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>`;
    addColor(`box${currentElement}`);
    currentElement++;
  }
}

function infiniteScrollHandler() {
  const relativeBottomPosition = document.body.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  if (relativeBottomPosition - windowHeight < 30) {
    loadData(60);
  }
}

function addColor(id) {
  let shades = Math.round(Math.random() * 360);
  let div = document.getElementById(id);
  const spans = div.querySelectorAll("span");
  let dull = 50;
  Array.from(spans).forEach(function (ev) {
    ev.style.backgroundColor = `hsl(${shades}, 60%, ${dull}%)`;
    dull += 10;
  });
}

window.addEventListener("scroll", infiniteScrollHandler);
initial(70);