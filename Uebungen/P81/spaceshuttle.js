function SpaceShuttle(name, model, color, weight, weapon, ammo, captain, crew) {
    this.name = name
    this.model = model
    this.color = color
    this.weight = weight
    this.weapon = weapon
    this.ammo = ammo
    this.shoot = function () {
        this.ammo = this.ammo - 1;
    }
    this.captain = captain
    this.crew = crew
}

function Person (name, species, age, gender) {
    this.name = name
    this.species = species
    this.age = age
    this.gender = gender
}

let p1 = new Person("Cyrill Augustiny", "Human", 21, "Male")
let p2 = new Person("Leandro Schulden", "Alien", 16, "Unknown")
let p3 = new Person("Noah Lezama", "Fish", 17, "Genderfluid")

let battlestation = new SpaceShuttle("Appache battlestation", "Appache", "black", 5418573, "Ion-Canon", 500, p1, [p2, p3])

console.log(battlestation)

document.getElementById("shuttle").innerText = 'Name:' + battlestation.name + '\r\n' +
    'Model: ' + battlestation.model + '\r\n' +
    'Weapon: ' + battlestation.weapon + '\r\n' +
    'Captain: ' + battlestation.captain.name + '\r\n' +
    'Crewmember1: ' + battlestation.crew[0].name + '\r\n' +
    'Crewmember2: ' + battlestation.crew[1].name

document.getElementById("fire-btn").addEventListener('click', () => {
    battlestation.shoot()
    document.getElementById("fire-msg").innerText = `You fired 1 shot, Ammo left: ${battlestation.ammo}`
})