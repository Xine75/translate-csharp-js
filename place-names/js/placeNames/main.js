// Put your code here

const placeNames = ["Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"]

console.log("All place names")

for (place of placeNames) {
    console.log(place);
}

console.log("'The' Place Names");

const thePlaces = placeNames.filter(n => n.startsWith("The"))

for (place of thePlaces) {
    console.log(place);
}

