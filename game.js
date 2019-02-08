// Create a global variable: var health = 100;
// Create a function: slap()
// Have the function reduce the health variable by 1.
// For now, have the function alert(health).
// Test the function by calling slap() at the end of the game.js file.
// You should see an alert of 99 show on the screen.
// If this is working, remove the test to prevent popups on every page load.


var health = 100;

function slap() {
    health -= 1;
    console.log(health);

}



function update() {
    document.getElementById('health').innerText = health;
    slap();
}
update()