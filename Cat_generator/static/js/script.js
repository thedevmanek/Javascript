function generatecat(){
    var img = document.createElement('img');
    var div = document.getElementById('flex');
    img.setAttribute("id","cat-images");
    img.src="http://thecatapi.com/api/images/get?format=src&size=small&type=gif&api_key=KEY";
    div.appendChild(img);

}
function reset() {
    var myobj = document.getElementById("cat-images");
    myobj.remove();
  }
  