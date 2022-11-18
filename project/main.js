/// NAVIGATION BAR ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {
  // create header for name
  let nav = document.getElementById("nav");
  let logo = document.createElement("a");
  logo.setAttribute("href", "index.html");
  logo.innerHTML = "John Smith";
  logo.setAttribute("id", "logo");
  nav.appendChild(logo);

  // create menu list
  let ul = document.createElement("ul");

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Projects";
  a.classList.add("a-nav");
  a.setAttribute("href", "projects.html");
  li.appendChild(a);
  ul.appendChild(li);
  nav.appendChild(ul);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Thoughts";
  a.classList.add("a-nav");
  a.setAttribute("href", "thoughts.html");
  li.appendChild(a);
  ul.appendChild(li);
  nav.appendChild(ul);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "About<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "about.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "Contact<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "contacts.html");
  li.appendChild(a);
  ul.appendChild(li);
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

window.addEventListener("scroll", rainFall);

function rainFall() {
  let reveals = document.querySelectorAll(".reveal");
  let wh = window.innerHeight;
  let top = reveals[0].getBoundingClientRect().top;
  let show_point = 150;
  console.log(wh, top, reveals[0]);
  let items = document.querySelectorAll(".rain-fall");
  for (let i = 0; i < items.length; i++) {
    if (show_point < wh - top) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}
