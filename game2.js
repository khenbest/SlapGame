let Defenders = {
    Ryu: {
        name: 'Ryu',
        dHealth: 120,
        hits: 0,
        items: []
    },
    Ken: {
        name: 'Ken',
        dHealth: 130,
        hits: 0,
        items: []
    },
    George: {
        name: 'George',
        dHealth: 110,
        hits: 0,
        items: []
    },
    Jefferson: {
        name: 'Jefferson',
        dHealth: 100,
        hits: 0,
        items: []
    },
    Batman: {
        name: 'Batman',
        dHealth: 220,
        hits: 0,
        items: []
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