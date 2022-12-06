var nextbtn=document.getElementById("nextbtn");
var slidebtn = document.getElementById("slidebtn");
var stopbtn = document.getElementById("stopbtn");
console.log(nextbtn);
var currentindex=0;
 var id;
var array_images=['2.jpg',"3.jpg","4.jpg","5.jpg","6.jpg"];
var currentindex2=(array_images.length);
console.log(array_images.length);
var image=document.getElementById("img")
console.log(image.firstElementChild);
nextbtn.addEventListener("click",nextimage)
function nextimage(){
image.firstElementChild.src=array_images[currentindex];

if (currentindex >= array_images.length-1) {
  currentindex=0;
}
currentindex++;




}
function pervious() {
   image.firstElementChild.src = array_images[currentindex2];
   

 currentindex2--;

  if (currentindex2 <0) {
     currentindex2 = array_images.length-1;
//   }

}}
slidebtn.addEventListener("click",slideshow)



function slideshow(){
     id=setInterval(function()
    {image.firstElementChild.src=array_images[currentindex];
    currentindex++;
    if(currentindex>array_images.length-1){
        currentindex=0;
    }
    },1000)

    
}
stopbtn.addEventListener("click",function(){
  clearInterval(id)

})