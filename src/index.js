import foods from './foods';
import { choice, remove } from './helpers';





// This file should import the fruits and both array helpers. It should then:

// Randomly draw a fruit from the array

let fruit = choice(foods);
// Log the message “I’d like one RANDOMFRUIT, please.”

console.log(`I'd like one ${fruit}, please!`);

// Log the message “Here you go: RANDOMFRUIT”

console.log(`Here you go: ${fruit}`);


// Remove the fruit from the array of fruits

let remainingFruit = remove(foods, fruit);
// Log the message “I’m sorry, we’re all out. We have FRUITSLEFT left.”
console.log(`I’m sorry, we’re all out. We have ${remainingFruit.length} different fruits left.`);
console.log(`So we have ${remainingFruit} left.`);