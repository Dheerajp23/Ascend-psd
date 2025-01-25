
document.querySelector(".header-button").addEventListener('click', function () {
  const mobile=   document.querySelector(".mobile");
  if(mobile.style.visibility === "hidden" || mobile.style.visibility === ""){
    mobile.style.visibility = "visible";
    mobile.style.opacity = "100";
    mobile.style.transition = "all 0.5s";
}
    else if(mobile.style.visibility === "visible"){
      mobile.style.visibility = "hidden";
      mobile.style.opacity = "0";
      mobile.style.transition = "all 0.5s";
    }
});


    const nav = document.querySelectorAll(".mobile ul li a");
    nav.forEach((item) => {
      item.addEventListener('click', function () {
        const mobile =   document.querySelector(".mobile");
        mobile.style.visibility = "hidden";
        mobile.style.opacity = "0";
        mobile.style.transition = "all 0.5s";
      });
    });


