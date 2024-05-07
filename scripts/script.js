/*
    Author: Mariana Salinas
    File Name: scripts.js
    Today's Date: 04/19/24
*/

/// Hamburger menu function
function menu() {
    var navlinks = document.getElementById("nav-links");
    var menuicon = document.getElementById("icon");
    if (navlinks.style.display === "block") {
        navlinks.style.display = "none";
        menuicon.style.color = "#64deee";
    } else {
        navlinks.style.display = "block";
        menuicon.style.color = "#3d2dce";
    }
}
