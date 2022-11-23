/// NAVIGATION BAR ///
// Add nav-bar dynamically (programmatically)
function insertNavBar() {
  // create header for name
  let nav = document.getElementById("nav");
  let logo = document.createElement("a");
  logo.setAttribute("href", "index.html");
  logo.innerHTML = "John&nbsp;Smith";
  logo.setAttribute("id", "logo");
  nav.appendChild(logo);

  // elements for hambeger menu
  let div = document.createElement("div");
  div.classList.add("hamburger");

  let lab = document.createElement("label");
  lab.classList.add("hamburger-icon");
  lab.setAttribute("for", "hamburger-checkbox");
  div.appendChild(lab);

  let chk = document.createElement("input");
  chk.setAttribute("type", "checkbox");
  chk.setAttribute("class", "checkbox");
  chk.setAttribute("id", "hamburger-checkbox");
  div.appendChild(chk);

  // create menu list
  let ul = document.createElement("ul");
  ul.setAttribute("class", "nav-set");
  ul.setAttribute("id", "menu");

  let li = document.createElement("li");
  let a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Projects";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/projects.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "<span id='me'>My</span>Thoughts";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/thoughts.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "About<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/about.html");
  li.appendChild(a);
  ul.appendChild(li);

  li = document.createElement("li");
  a = document.createElement("a");
  a.innerHTML = "Contact<span id='me'>Me</span>";
  a.classList.add("a-nav");
  a.setAttribute("href", "pages/contacts.html");
  li.appendChild(a);
  ul.appendChild(li);

  div.appendChild(ul);
  nav.appendChild(div);
}

insertNavBar();
////////////////////////////////////////////////

/// FOOTER ///
// Add footer dynamically (programmatically)
function insertFooter() {
  // create header for name
  let ft = document.getElementById("footer");
  ft.classList.add("footer");

  let fol = document.createElement("div");
  fol.innerHTML = "Follow Me";
  fol.classList.add("follow");
  ft.appendChild(fol);

  // create social buttons
  let soc = document.createElement("div");
  let a = document.createElement("a");
  let fb = "<i class='fa-brands fa-facebook fa-inverse fa-2xl'></i>";
  a.innerHTML = fb;
  a.classList.add("social");
  a.classList.add("fb");
  a.setAttribute("href", "https://facebook.com");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let insta = "<i class='fa-brands fa-instagram fa-inverse fa-2xl'></i>";
  a.innerHTML = insta;
  a.classList.add("social");
  a.classList.add("insta");
  a.setAttribute("href", "https://instagram.com");
  soc.appendChild(a);
  ft.appendChild(soc);

  // create social buttons
  soc = document.createElement("div");
  a = document.createElement("a");
  let git = "<i class='fa-brands fa-github-square fa-inverse fa-2xl'></i>";
  a.innerHTML = git;
  a.classList.add("social");
  a.classList.add("git");
  a.setAttribute("href", "https://github.com");
  soc.appendChild(a);
  ft.appendChild(soc);
}

insertFooter();
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

/* Scroll animation of Blue Grid */
window.addEventListener("scroll", gapAnimate);

function gapAnimate() {
  let bgrid = document.querySelectorAll(".grid-container")[0];
  let wh = window.innerHeight;
  let top = bgrid.getBoundingClientRect().top;
  let show_point = 10;
  if (bgrid) {
    if (show_point < wh - top) {
      bgrid.classList.add("active");
    } else {
      bgrid.classList.remove("active");
    }
  }
}

/* Scroll animation of Green Grid */
window.addEventListener("scroll", rainFall);

function rainFall() {
  let reveals = document.querySelectorAll(".grid-container2");
  let wh = window.innerHeight;
  let top = reveals[0].getBoundingClientRect().top;
  let show_point = 150;
  let items = document.querySelectorAll(".rain-fall");
  for (let i = 0; i < items.length; i++) {
    if (show_point < wh - top) {
      items[i].classList.add("active");
    } else {
      items[i].classList.remove("active");
    }
  }
}
