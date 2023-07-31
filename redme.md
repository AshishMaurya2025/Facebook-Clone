var swiper = new Swiper(".mySwiper", {
     slidesPerView: 4,
     spaceBetween: 15,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
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
   })