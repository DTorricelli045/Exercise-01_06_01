/*  Exercise 01_06_01

    Snoot Flowers Form Validation Code
      Author: Dominic Torricelli
      Date:   6 August 2018

    Filename: snoot.js
*/

"use strict";

// function to remove select list defaults
function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    alert("select lists: " + emptyBoxes.length);
}

// page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults, false);
}