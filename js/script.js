let arrow = document.querySelectorAll(".arrow-link");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
    let arrowParent = e.target.parentElement.parentElement.parentElement.parentElement;
    arrowParent.classList.toggle("showMenu");
  });
}

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