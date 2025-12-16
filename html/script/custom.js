let menuEle = {
  burger: document.querySelector("#menuHamburger"),
  nav: document.querySelector("#navbarItems"),
  mainBody: document.querySelector("body"),
};
if (menuEle.burger) {
  menuEle.burger.addEventListener("click", function () {
    menuEle.nav.classList.toggle("show");
    menuEle.mainBody.classList.toggle("menuOpen");
    menuEle.burger.children[0].children[0].classList.toggle("active");
  });
}
const scroller = document.querySelector("#scroller");
// function navColorChange() {
//   let sclTop = window.scrollY;
//   //alert("call F " + sclTop);
//   if (sclTop >= 100) {
//     scroller.classList.add("fixedheader");
//   } else {
//     scroller.classList.remove("fixedheader");
//   }
// }

window.addEventListener("scroll", function () {
  const nav = document.getElementById("scroller");
  if (window.scrollY > 50) {
    nav.classList.add("sticky-active");
  } else {
    nav.classList.remove("sticky-active");
  }
});
// window.onload = function () {
//   navColorChange();

//   window.onscroll = function () {
//     navColorChange();
//   };
// };
// jQuery(window).scroll(function() {
//   var scroll = jQuery(window).scrollTop();

//   if (scroll >= 100) {
//       jQuery("header").addClass("fixedheader");
//   } else {
//       jQuery("header").removeClass("fixedheader");
//   }

//   if (scroll >= 200) {
//       jQuery("header").addClass("scrollTop");
//   } else {
//       jQuery("header").removeClass("scrollTop");
//   }

// });

// // view more
// function viewMore(cardinfo) {
//   let dots = document.querySelector(
//     `.viewMoreCard[data-card="${cardinfo}"] .dots`
//   );
//   let moreText = document.querySelector(
//     `.viewMoreCard[data-card="${cardinfo}"] .contentMore`
//   );
//   let btnText = document.querySelector(
//     `.viewMoreCard[data-card="${cardinfo}"] .moreless-button`
//   );

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.textContent = "View more";
//     btnText.classList.remove("expand");
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.textContent = "View less";
//     btnText.classList.add("expand");
//     moreText.style.display = "inline";
//   }
// }

// // horizental scroll
// let subNavContainer = document.getElementById("subNav");
// let preSlide = document.querySelector(".preSlide");
// let nextSlide = document.querySelector(".nextSlide");
// let totalScrollWidth = document.querySelector(".subnav-items ul").scrollWidth;
// let ulViewWidth = document.querySelector(".subnav-items ul").offsetWidth;
// scrollCompleted = totalScrollWidth - ulViewWidth;
// function rightSlide() {
//   subNavContainer.scrollLeft += 80;
//   preSlide.classList.remove("hide");
//   if (subNavContainer.scrollLeft >= scrollCompleted) {
//     nextSlide.classList.add("hide");
//   }
// }
// function leftSlide() {
//   subNavContainer.scrollLeft -= 80;
//   nextSlide.classList.remove("hide");
//   if (subNavContainer.scrollLeft == 0) {
//     preSlide.classList.add("hide");
//   }
// }

// //card view more less btn
// let morelessbtn = document.querySelector(".btnMoreLess")
// let awardRow = document.querySelector(".award-row-h")
// function viewMoreAwards() {
//   if (morelessbtn.classList.contains('expand')) {
//     morelessbtn.classList.remove('expand');
//     morelessbtn.innerHTML = "View more";
//     awardRow.classList.add('award-row-h');
//   }

//   else {
//     morelessbtn.classList.add('expand');
//     morelessbtn.innerHTML = "View less";
//     awardRow.classList.remove('award-row-h');
//   }

// }
