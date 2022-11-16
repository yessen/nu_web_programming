/// NAVIGATION BAR ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {
  // create header for name
  let nav = document.getElementById("nav");
  let h1 = document.createElement("h1");
  h1.innerHTML = "JavaScript Events";
  h1.setAttribute("id", "topic");
  nav.appendChild(h1);

  // create menu list
  let ul = document.createElement("ul");

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "Inline Events";
  a.classList.add("a-nav");
  a.setAttribute("href", "index.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "Event Listeners";
  a.classList.add("a-nav");
  a.setAttribute("href", "listeners.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "Event Object";
  a.classList.add("a-nav");
  a.setAttribute("href", "drawing.html");
  li.appendChild(a);
  ul.appendChild(li);

  nav.appendChild(ul);
}

insertNavBar();
////////////////////////////////////////////////

/// EVENT LISTENERS ///
// h1 style
let h = document.getElementById("title");
if (h) {
  h.addEventListener("click", function (e) {
    this.style.color = "red";
  });
}

// text3 style
let t = document.getElementById("text3");
if (t) {
  t.addEventListener("mouseenter", function (e) {
    this.style.backgroundColor = "yellow";
  });
  t.addEventListener("mouseout", function (e) {
    this.style.backgroundColor = "white";
  });
  /*
  t.addEventListener("mouseenter", function (e) {
    this.style.fontSize = "16pt";
  });
  t.addEventListener("mouseout", function (e) {
    this.style.fontSize = "12pt";
  });
  */
}

// text4 style
let t4 = document.getElementById("text4");
if (t4) {
  t4.addEventListener("click", changeFont);
}

function changeFont() {
  let p = this;
  p.style.fontSize = "26pt";
  p.style.color = "red";
  p.style.backgroundColor = "black";
}

// uppercase
let caps = document.getElementById("caps");
if (caps) {
  caps.addEventListener("keyup", upperCase);
}

function upperCase() {
  let x = this;
  x.value = x.value.toUpperCase();
}
////////////////////////////////////////////////

/// DRAWING ///
const canvas = document.getElementById("canvas");

if (canvas) {
  canvas.addEventListener("mousemove", function (e) {
    draw(this, e);
  });
}

function draw(c, e) {
  const ctx = c.getContext("2d");
  console.log(e);

  let xMax = canvas.width;
  let yMax = canvas.height;

  console.log(xMax, yMax, e.offsetX, e.offsetY);
  x = e.offsetX;
  y = e.offsetY;
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.ellipse(x, y, 2, 2, 0, 0, Math.PI * 2);
  ctx.fill();
}

let btn = document.getElementById("clear");
if (btn) {
  btn.addEventListener("click", function (e) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
////////////////////////////////////////////////

window.addEventListener("resize", function () {
  let t = document.getElementById("topic");
  t.innerHTML = "Resized";
});
