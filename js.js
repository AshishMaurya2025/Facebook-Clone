


let menuBar = document.querySelector(".menu-bar")
let menu = document.querySelector("#menu")

menu.addEventListener("click",function(){
     menuBar.classList.toggle("active")
});

var swiper = new Swiper(".mySwiper", {
     slidesPerView: 4,
     spaceBetween: 15,
    
   });

   var reelBtn = document.querySelector("#reelBtn");
   var reel = document.querySelector("#reel");
   var storyBtn = document.querySelector("#storyBtn");
   var story = document.querySelector("#story");

   reelBtn.addEventListener("click",function(){
       reel.style.display = "block";
       story.style.display = "none";
   })
   storyBtn.addEventListener("click",function(){
        story.style.display = "block"
        reel.style.display = "none"
   });

//    my account menu
   var users = document.getElementById("users")
   var myAc = document.getElementById("my-ac");

   users.addEventListener("click",function(){
      myAc.classList.toggle("active")
   })