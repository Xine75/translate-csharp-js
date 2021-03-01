// Put your code here
console.log("Do you believe in magic?");
console.log("------------------------");

const allSpells = [
    {
        name: "Turn enemy into a newt",
        isEvil: true,
        energyRequired: 5.1
    },
    {
        name: "Conjure some gold for a local charity",
        isEvil: false,
        energyRequired: 2.99
    },
    {
        name: "Give a deaf person the ability to hear",
        isEvil: false,
        energyRequired: 12.2
    },
    {
        name: "Make yourself emporer of the universe",
        isEvil: true,
        energyRequired: 100.0
    },
    {
        name: "Convince your relatives your political views are correct",
        isEvil: false,
        energyRequired: 2921.5
    }
]

console.log("Good Book")
for (spell of allSpells) {
    if (spell.isEvil === false) {
        console.log(`${spell.name}`)
    }
}

console.log("Evil Book")
for (spell of allSpells) {
    if (spell.isEvil === true) {
        console.log(`${spell.name}`)
    }
}