function skillscroll(){
var a=document.getElementById('skills');
var b=setInterval(function () {
  window.scrollBy(0,20);
  if(window.pageYOffset>=a.offsetTop){
  clearInterval(b);
}
},20);
}
function experiencescroll(){
var a=document.getElementById('experience');
var b=setInterval(function () {
  window.scrollBy(0,20);
  if(window.pageYOffset>=a.offsetTop){
  clearInterval(b);
}
},20);
}function educationscroll(){
var a=document.getElementById('education');
var b=setInterval(function () {
  window.scrollBy(0,20);
  if(window.pageYOffset>=a.offsetTop){
  clearInterval(b);
}
},20);
}function portfolioscroll(){
var a=document.getElementById('portfolio');
var b=setInterval(function () {
  window.scrollBy(0,20);
  if(window.pageYOffset>=a.offsetTop){
  clearInterval(b);
}
},20);
}function contactscroll(){
var a=document.getElementById('contact');
var b=setInterval(function () {
  window.scrollBy(0,20);
  if(window.pageYOffset>=a.offsetTop){
  clearInterval(b);
}
},20);
}
