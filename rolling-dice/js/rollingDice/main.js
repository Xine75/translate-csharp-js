// Put your code here

console.log("Let's roll some dice baby!");
console.log("---------------------------");

//function to roll dice

const rollDice = (min, max) => {

    min = Math.ceil(1);
    max = Math.ceil(6);
    let roll = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log("roll", roll)


    for (let i = 0; i < 10; i++) {
        let die1 = rollDice(min, max)
        let die2 = rollDice(min, max)
    }
    console.log(`${die1} + ${die2} === ${die1.value} + ${die2.value}`)
    if (die1.value === die2.value) {
        message += " DOUBLES!"
    }
    console.log(message)

}
