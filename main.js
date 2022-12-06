import { headerScroll } from './headerScroll.js';

const iconMenu= document.querySelector(".icon_menu");
const menu= document.querySelector(".menu2");

iconMenu.addEventListener("click", function(){
    console.log(menu.classList.toggle("menu_show"));
});
menu.addEventListener("click",function(){
    console.log(menu.classList.toggle("menu_show"));
});
document.addEventListener('DOMContentLoaded', function () {
    headerScroll()
})