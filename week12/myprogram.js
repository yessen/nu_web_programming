console.log(document);

// print the initial document object
console.log(document);

// create an HTML element - h1
let h1 = document.createElement("h1");
h1.innerHTML = "<i>Header Text</i>";

// create an HTML element - a
let a1 = document.createElement("a");
a1.setAttribute("href", "https://w3schools.com");
a1.innerText = "W3Schools";

// append the h1-element to the body-element
document.body.appendChild(h1);
document.body.appendChild(a1);

// print the final document object
console.log(document);

function generateContent() {
  let ch = document.body.children;

  if (ch.length < 6) {
    // create an HTML element - h1
    let h1 = document.createElement("h1");
    // change the property of the element
    // assign some text content to the element
    h1.innerText = "Hello, World!";
    // change the style of the element
    h1.style.color = "blue";
    // append the h1-element to the body-element
    document.body.appendChild(h1);

    let p1 = document.createElement("p");
    p1.innerText = "This is the first paragraph!";
    p1.style.color = "red";
    p1.style.backgroundColor = "yellow";
    document.body.appendChild(p1);

    let p2 = document.createElement("p");
    p2.innerHTML = "<strong>This is the second paragraph!</strong>";
    p2.style.color = "white";
    p2.style.backgroundColor = "black";
    p2.style.fontSize = "18pt";
    document.body.appendChild(p2);

    let p3 = document.createElement("p");
    p3.innerHTML = "<i>This is the third paragraph!</i>";
    p3.style.backgroundColor = "lime";
    p3.style.fontSize = "20pt";
    document.body.appendChild(p3);

    let btn1 = document.getElementById("btn1");
    console.log(btn1.classList);
    btn1.classList.add("btn");
    console.log(btn1.classList);
    btn1.classList.remove("btn");
    console.log(btn1.classList);

    let btn2 = document.getElementById("btn2");
    btn2.setAttribute("onclick", "clearContent()");
    btn2.disabled = false;
  }
  console.log(ch);
}

function clearContent() {
  let ch = document.body.children;
  console.log(ch);

  if (ch.length > 2) {
    while (ch.length > 2) {
      document.body.removeChild(ch[ch.length - 1]);
      console.log(ch);
    }
  }
  let btn2 = document.getElementById("btn2");
  btn2.disabled = true;
}
