
document.querySelector(".header-button").addEventListener('click', function () {
  const mobile=   document.querySelector(".mobile");
  if(mobile.style.display === "none" || mobile.style.display === ""){
    mobile.style.display = "block";
}
    else{
      mobile.style.display = "none";
    }
});


    const nav = document.querySelectorAll(".mobile ul li a");
    nav.forEach((item) => {
      item.addEventListener('click', function () {
        const mobile =   document.querySelector(".mobile");
        mobile.style.display = "none";
      });
    });


