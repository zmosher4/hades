const { database } = require("./database.js");
const {
  attackGenorator,
  specialGenorator,
  castGenorator,
  dashGenorator,
  callGenorator,
} = require("./functions.js");
const readline = require("readline");

console.log("ascii");
// const chosenGod = chooseGod("ares");

console.log("Welcome to the underworld. Here is your build.");
const attack = attackGenorator(database);
console.log(
  `Your attack is ${attack.title} from ${attack.god}. Here is what it does ${attack.description}`
);
const special = specialGenorator(database);
console.log(
  `Your attack is ${special.title} from ${special.god}. Here is what it does ${special.description}`
);
const cast = castGenorator(database);
console.log(
  `Your attack is ${cast.title} from ${cast.god}. Here is what it does ${cast.description}`
);
const dash = dashGenorator(database);
console.log(
  `Your attack is ${dash.title} from ${dash.god}. Here is what it does ${dash.description}`
);
const call = callGenorator(database);
console.log(
  `Your attack is ${call.title} from ${call.god}. Here is what it does ${call.description}`
);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function logAttackNameByIndex(attacksArray, index) {
  if (index >= 0 && index < attacksArray.length) {
    const attack = attacksArray[index];
    console.log(attack);
  } else {
    console.log("Invalid index");
  }
}

// Ask the user for input
rl.question(
  'Enter an index (or type "random" for a random attack): ',
  (input) => {
    if (input.toLowerCase() === "random") {
      console.log(attack);
    } else {
      const index = parseInt(input, 10);
      logAttackNameByIndex(database.attack, index);
    }

    // Close the readline interface
    rl.close();
  }
);
