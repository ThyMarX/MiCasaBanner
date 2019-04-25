// JavaScript Document

/*   ---1. banner som link---   */

let element = document.querySelector(".banner");

element.addEventListener("click", goToSomePage);

function goToSomePage(){
	window.open("http://thomasdsiemsen.com", '_blank');
}


/*   ---2. banner auto refresh---   */

document.addEventListener("load", setTimeout(reloadBanner, 10000));

function reloadBanner(){
	location.reload();
}


