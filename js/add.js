const showmoreMenu = document.querySelector("#show-more-menu");


showmoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = "showUp 0.35s 1";
  ul.style.display = "block";
});

showmoreMenu.addEventListener("mouseleave", function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = "none";
});



