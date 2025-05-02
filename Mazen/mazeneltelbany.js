const starcont = document.querySelectorAll(".stars");
for (let index = 0; index < starcont.length; index++) {
  const stars = starcont[index].querySelectorAll("i");
  for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener("click", function () {
      for (let j = 0; j < stars.length; j++) {
        if (i >= j) {
          stars[j].classList.add("active");
        } else {
          stars[j].classList.remove("active");
        }
      }
    });
  }
}
let changetheme = document.querySelector(".moon");
let allainheader = document.querySelectorAll("a");
let darkColor = "rgb(7, 7, 30)";
let maindishes = document.querySelector(".main-dishes-content");
let sidedishes = document.querySelector(".side-dishes-content");
let desserts = document.querySelector(".Desserts-content");
let Drinks = document.querySelector(".Drinks-content");
let style = (document.style = "background-color:#406b8c; color:white;");
let footer = document.querySelector(".footer");
changetheme.addEventListener("click", function () {
  let colorofbody = document.body.style.backgroundColor;
  if (colorofbody === darkColor) {
    document.body.style.backgroundColor = "";
    for (let i = 0; i < allainheader.length; i++) {
      allainheader[i].style.color = "";
    }
    document.querySelector("header").style.backgroundColor = "";
    changetheme.style.color = "";
    maindishes.style = "";
    sidedishes.style = "";
    desserts.style = "";
    Drinks.style = "";
    footer.style = "";
  } else {
    document.querySelector("header").style.backgroundColor = "black";
    for (let i = 0; i < allainheader.length; i++) {
      allainheader[i].style.color = "white";
    }
    changetheme.style.color = "white";
    maindishes.style = style;
    sidedishes.style = style;
    desserts.style = style;
    Drinks.style = style;
    document.body.style.backgroundColor = darkColor;
    footer.style = style;
    footer.querySelector("span").style.color = "#e7e0d3";
  }
});
