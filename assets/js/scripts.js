function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navItems") {
    x.className += " responsive";
  } else {
    x.className = "navItems";
  }
}