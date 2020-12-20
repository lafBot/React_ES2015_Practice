import {choice, remove} from "./helpers";
import fruits from './foods';

const fruit = choice(fruits);
const basket = remove(fruits, fruit);

console.log(`I'd like one ${fruit} please`);
console.log(`Here you go: ${fruit}`);
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out.  We have ${basket} left.`)