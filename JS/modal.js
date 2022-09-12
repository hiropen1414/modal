'use strict'

const Button1 = document.getElementById("button1");
const Button2 = document.getElementById("button2");
const Button2_close = document.getElementById("close");
const Dialog = document.getElementById("dialog");
const Full = document.getElementById('fullScreen')
Button1.addEventListener('click', () => {
	Full.requestFullscreen();
});

Button2.addEventListener('click', () => {
	Dialog.showModal();
});

Button2_close.addEventListener('click', () => {
	Dialog.close();
});