var torso = document.querySelector(".torso");
var sleevel = document.querySelector(".sleevel");
var sleever = document.querySelector(".sleever");
var image = document.querySelector("#logo");

function test() {
  var newColor = document.querySelector("#myColor").value.toString();
  var newImg = document.querySelector("#myimg").value.toString();

  torso.style.background = newColor;
  sleevel.style.background = newColor;
  sleever.style.background = newColor;
  image.src = newImg;
  document.querySelector("#showcolor").innerHTML = newColor;
  if (newColor !== "white") {
    document.querySelector("#container").style.background = "white";
    document.querySelector("#neck").style.background = "white";
  } else if (newColor == "white") {
    document.querySelector("#container").style.background = "black";
    document.querySelector("#neck").style.background = "black";
  }
}
