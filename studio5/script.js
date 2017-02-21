// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");


    // all other js here
    var title=document.getElementById('title');

    title.addEventListener('mouseover', function() {
    title.style.width="500px";
    title.src='textbox.png';
    });

    title.addEventListener('mouseout', function() {
    title.style.width="450px";
    title.src='textbox.png';
    });




});
