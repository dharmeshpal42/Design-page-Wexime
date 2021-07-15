/*side-navigation bar */
const openNav = () => {
  let w = window.innerWidth;
  console.log(w);
  if (w < 400) {
    document.getElementById("mysidenav").style.width = "100%";
    //   document.getElementById("mysidenav").style.padding="30px";
  }
  else if (w > 400 && w < 450) {

    document.getElementById("mysidenav").style.width = "90%";
  }
  else {
    document.getElementById("mysidenav").style.width = "40%";
  }
}
const closeNav = () => {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("mysidenav").style.padding = "0";
}
/*----------------------------------------------------*/
/* sticky header on scrolling */
/* Scroll on top button */

let myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollTopBtn()};
const scrollTopBtn = () =>
{
   if(document.body.scrollTop >300 || document.documentElement.scrollTop > 300)
   {
     myButton.style.display = "block";
   } 
   else
   {
     myButton.style.display = "none";
   }
   if(window.scrollY >100)
   {
   console.log('inside');
     document.getElementById("sticky-header").className="sticky";
     document.getElementById("menu-btn").style.position = "fixed";
     document.getElementById("menu-btn").style.color = "black";
     document.getElementById("menu-btn").style.zIndex = "100";
   }
   else{
      document.getElementById("sticky-header").className = "";
      document.getElementById("menu-btn").style.position = "absolute";
      document.getElementById("menu-btn").style.color = "white";
    }
}

const topFunction = ()=>
{
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*----------------------------------*/