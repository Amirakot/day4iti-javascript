let images = [
  "img/1.gif",
  "img/2.gif",
  "img/3.gif",
  "img/4.gif",
  "img/5.gif",
  "img/6.gif",
];

var main =document.getElementById("main");
var dives=document.getElementsByTagName("div")
var rightaudio = new Audio("assets_right.wav");
var wrongaudio = new Audio("assets_wrong.wav");
console.log(main)
var flag=true;
var array=[];

function drwaimage(){
  for (var i = 0; i < images.length; i++) {
    var randomi = Math.floor(Math.random() * images.length);
    main.innerHTML += `<div id=""><img src='${images[randomi]}' ></div>`;
  }
}
function check(){
for(var i=0;i<dives.length;i++){
  dives[i].addEventListener("click",function(){
    if(flag){
  this.firstChild.style.opacity = "1";
  if(array.length==0){
    console.log(array.length)
 array[0] = this;
 console.log(array[0]);
  }
  else if(array.length==1)
 {
 
  array[1]=this;
 console.log(array[1]);
     
}
if(array.length==2){
  flag=false;
  setTimeout(() => {
    checkimag();
  }, 1000);
 
}

    }
    else {
      return;
    }
   
    
  })
}
}
drwaimage()
drwaimage()
check()
function checkimag(){
   if (array[0].firstChild.getAttribute("src") ===
     array[1].firstChild.getAttribute("src") ) {
   rightaudio.play();
   } else {
     array[0].firstChild.style.opacity = "0";
     array[1].firstChild.style.opacity = "0";
     wrongaudio.play();
   }
      array = [];
      flag = true;
}