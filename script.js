window.addEventListener("scroll", function(){

let navbar = document.getElementById("navbar");

if(window.scrollY > 50){
navbar.style.background = "black";
}
else{
navbar.style.background = "linear-gradient(to right, blue, cyan)";
}

});