
//=========Font

const menuBtn = document.querySelector("#menu_btn");
const Btn = document.querySelector("#btn");
const navigators = document.querySelector(".navigators");


menuBtn.addEventListener("click", ()=>{

  navigators.classList.toggle("mobile");
  if(navigators.classList.contains("mobile")){
    navigators.style.display="flex";
  } else{
    navigators.style.display="none";

  }
});

//===============Scrolling Effect=====================
window.addEventListener('scroll', ()=>{
  document.querySelector(".navigators").classList.toggle('scrolling', window.scrollY > 10);

  document.querySelector(".header").classList.toggle('scrolling-header', window.scrollY > 10);

  document.querySelector("#menu_btn").classList.toggle('scrolling-btn', window.scrollY > 10);

  document.querySelector(".background-one").classList.toggle('scrolling-bg', window.scrollY > 10);
});




const observer = new IntersectionObserver((entries)=> {
  entries.forEach(entry=>{
    console.log(entry);

    if (entry.isIntersecting){
      entry.target.classList.add("show");
    } else{
      entry.target.classList.remove("show");      
    }
  })
})



// grabbing all .hidden elements
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



//Service page slider js code===============

//<!-- Initialize Swiper -->
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });