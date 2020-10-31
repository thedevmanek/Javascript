function ageindays() {
  var dateyear = prompt("Year of your birthdate");
  var Totaldays = (2020 - dateyear) * 365;
  console.log(Totaldays);
  var h1 = document.createElement("h1");
  var ans = document.createTextNode("You are " + Totaldays + " days old");
  h1.setAttribute("id", "Totaldays");
  h1.appendChild(ans);
  document.getElementById("results").appendChild(h1);
}
ageindays();
function reset() {
  document.getElementById("Totaldays").remove();
}
