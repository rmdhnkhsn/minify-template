
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".nav-toggle .fa-bars");
let backdrop = document.querySelector("#backdrop");
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
  sidebarBtn.classList.toggle("fa-bars-staggered");
  backdrop.classList.toggle("sidebar-backdrop");
});

$(".hideBar").on("click", function(){
  $(".sidebar").addClass("close");
  $("#backdrop").removeClass("sidebar-backdrop");
  $(".nav-toggle i").removeClass("fa-bars-staggered");
  $(".nav-toggle i").addClass("fa-bars");
});


// MENU ACTIVE FUNCTION
$(".submenu-link").on("click", function(){
  $(".submenu-link").removeClass("active");
  $(this).addClass("active");

  $(".menu-link").on("click", function(){
    $(".submenu-link").removeClass("active");
  });
});

$(".menu-link").on("click", function(){
  $(".menu-link").removeClass("active");
  $(this).addClass("active");

  $(".submenu-link").on("click", function(){
    $(".menu-link").removeClass("active");
  });
});

// ACCORDION SIDE BAR
let accHeading = document.querySelectorAll(".arrow-link");
let accPanel = document.querySelectorAll(".submenu");

for (let i = 0; i < accHeading.length; i++) {
    accHeading[i].onclick = function() {
        if (this.nextElementSibling.style.maxHeight) {
           hidePanels();
        } else {
           showPanel(this);
        } 
    };
}
function showPanel(elem) {
  hidePanels();
  elem.classList.add("active");
  elem.nextElementSibling.style.maxHeight = elem.nextElementSibling.scrollHeight + "px";
}
function hidePanels() {
  for (let i = 0; i < accPanel.length; i++) {
      accPanel[i].style.maxHeight = null;
      accHeading[i].classList.remove("active");
  }
}