// 1. Add 2 more buttons Punch, and Kick to the UI, as well as their respective functions in javascript.
//   - Have the punch function decrease the target's health by 5, and kick by 10.
//     - Don't forget to call update inside each function.
// 2. Declare 2 more variables 'name', and 'hits' where you initialized the health variable. 
//   - Name your target whatever you want, what datatype would a name be ?
//     -Set the variable hits with a value of 0, every time the target is hit by a Slap, Punch, or Kick
// this variable should be increased by 1.
// 3. Add a placeholder for target name, and hits inside the header next to health.
// 4. Wire everything up like you did for "Slap".



let Defenders = {
    Ryu: {
        name: 'Ryu',
        dHealth: 120,
        hits: 0
    },
    Ken: {
        name: 'Ken',
        dHealth: 130,
        hits: 0
    },
    George: {
        name: 'George',
        dHealth: 110,
        hits: 0
    },
    Jefferson: {
        name: 'Jefferson',
        dHealth: 100,
        hits: 0
    },
    Batman: {
        name: 'Batman',
        dHealth: 220,
        hits: 0
    }
}
let health = Defenders.Batman.dHealth;
let name = Defenders.Batman.name;
let hits = 0;


function slap() {
    Defenders.Batman.dHealth -= 1;
    Defenders.Batman.hits += 1;
    console.log(Defenders.Batman.dHealth);
    update();
}
function punch() {
    Defenders.Batman.dHealth -= 5;
    console.log(Defenders.Batman.dHealth);
    Defenders.Batman.hits += 1;
    update();
}
function kick() {
    Defenders.Batman.dHealth -= 10;
    console.log(Defenders.Batman.dHealth);
    Defenders.Batman.hits += 1;
    update();
}


function update() {
    document.getElementById('health').innerText = Defenders.Batman.dHealth;
    document.getElementById('target').innerText = Defenders.Batman.name;
    document.getElementById('hits').innerText = Defenders.Batman.hits;
}

update()