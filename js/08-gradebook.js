/*eslint-env browser*/

var ursula = parseInt(window.prompt("Enter Ursula's mark"), 10);
var paul = parseInt(window.prompt("Enter Paul's mark"), 10);
var henry = parseInt(window.prompt("Enter Henry's mark"), 10);
var lucy = parseInt(window.prompt("Enter Lucy's mark"), 10);
var tabitha = parseInt(window.prompt("Enter Tabitha's mark"), 10);
var average = (ursula + paul + henry + lucy + tabitha) / 5;

//EVALUATE URSULA
if (ursula >= 90) {
    ursula = "A";
} else if (ursula >= 80) {
    ursula = "B";
} else if (ursula >= 70) {
    ursula = "C";
} else if (ursula >= 60) {
    ursula = "D";
} else {
    ursula = "F";
}

//PAUL URSULA
if (paul >= 90) {
    paul = "A";
} else if (paul >= 80) {
    paul = "B";
} else if (paul >= 70) {
    paul = "C";
} else if (paul >= 60) {
    paul = "D";
} else {
    paul = "F";
}

//HENRY URSULA
if (henry >= 90) {
    henry = "A";
} else if (henry >= 80) {
    henry = "B";
} else if (henry >= 70) {
    henry = "C";
} else if (henry >= 60) {
    henry = "D";
} else {
    henry = "F";
}

//LUCY URSULA
if (lucy >= 90) {
    lucy = "A";
} else if (lucy >= 80) {
    lucy = "B";
} else if (lucy >= 70) {
    lucy = "C";
} else if (lucy >= 60) {
    lucy = "D";
} else {
    lucy = "F";
}

//TABITHA URSULA
if (tabitha >= 90) {
    tabitha = "A";
} else if (tabitha >= 80) {
    tabitha = "B";
} else if (tabitha >= 70) {
    tabitha = "C";
} else if (tabitha >= 60) {
    tabitha = "D";
} else {
    tabitha = "F";
}

window.console.log("STUDENT\t\t\tGRADE");
window.console.log("------------------------");
window.console.log("Ursula:\t\t\t" + ursula);
window.console.log("Henry:\t\t\t" + henry);
window.console.log("Paul:\t\t\t" + paul);
window.console.log("Lucy:\t\t\t" + lucy);
window.console.log("Tabitha:\t\t" + tabitha);
window.console.log("------------------------");
window.console.log("Average:\t\t" + average);