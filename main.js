var inputtext = document.getElementById("full-name");
var h1 = document.getElementById("h1");

{
  function showborder() {
    inputtext.style.border = "5px solid blue";
  }
}
 function check(event) {
   if (inputtext.value.length > 3 && password.value == repassword.value) {
     event.target.submit();
   } else {
     event.preventDefault();
     inputtext.focus();
   }
 }
 
function remove() {
  inputtext.style.border = "1px solid black";
  if (inputtext.value.length == "" && inputtext.value.length < 3) {
    document.getElementById("invalid").innerText = "invalid name";
    inputtext.focus();
  } else {
    document.getElementById("invalid").innerText = "";
  }
  h1.innerHTML = "thank you......" + inputtext.value;
}
function checkpassword() {
  var password = document.getElementById("password");
  var repassword = document.getElementById("repassword");
  if (password.value != repassword.value) {
    document.getElementById("validatepassword").innerText =
      " password and repeat password should be the same";
  } else {
    document.getElementById("validatepassword").innerText = " ";
  }
}
function add() {
  var image = document.createElement("img");
  console.log(image);
  image.setAttribute("src", "profileimage.webp");
  image.setAttribute("id", "im");
  var x = document.getElementById("container").appendChild(image);
  console.log(x);
  var counter = 0;
  image.onclick = function () {
    image.remove();
  };
  var z = document.getElementById("container");
  alert(z.childNodes.length);
  //z.onclick = image.remove();
}
