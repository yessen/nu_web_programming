function popup() {
  alert("This is a popup");
  document.getElementById("demo").innerHTML = "My text";

  //Variables
  var x = 3 + 2; // x is 5
  let y = "hello"; // y stores 10
  const PI = 3.14;
  z = "Tom";
  var x = "stop";
  console.log(x, y, z, PI);

  // Arrays
  const A = ["Tom", 25, 30];
  x = A[0]; // x stores “Tom”
  A[1] = 20; // A = [”Tom”, 20, 3]
  let n = A.length;
  let k = A[n - 1];
  A.push("John");
  A[10] = 100;

  console.log(A, n, k);
}

// objects
const car = {
  name: "Fiat", // note ending comma
  color: "white",
};

// lab
let lab1 = [5, 5, 5, 5, 5, 5, 10];
let sum1 = lab1[0] + lab1[1];
let sum2 = lab1[2] + lab1[3];
let sums = [sum1, sum2];
console.log(sums);
