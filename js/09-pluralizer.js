/*eslint-env browser*/

var noun = window.prompt("Enter a single farm animal");
var num = parseInt(window.prompt("Enter the amount of farm animals"), 10);

if (num > 1) {
    if (noun === "Goose") {
        noun = "Geese";
    } else if (noun === "Sheep") {
        noun = "Sheep";
    } else {
        noun = noun + "s";
    }
}
window.document.write(num + " " + noun);