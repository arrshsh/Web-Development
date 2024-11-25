// var generateName = require("sillyname");

import generateName from 'sillyname';
import {randomSuperhero} from 'superheroes';


var sillyName = generateName();

console.log(`The person reading this has the name: ${sillyName}`);

var superName = randomSuperhero();
console.log(`And I am ${superName}!!!!`);