function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()}
  the ${adj.toUpperCase()} ${noun.toUpperCase()}`);
}

madLib('swerve', 'nastiest', 'boys');

function isSubstring(searchString, subString){
  console.log(searchString.indexOf(subString) !== -1);
}

isSubstring("hey there how are you?", "hey");

function fizzBuzz(array) {
  const result = [];

  array.forEach(el => {
    if ((el % 3 === 0) || (el % 5 ===0 )) {
      result.push(el);
    }
  });
  return result;
}

fizzBuzz([1,2,3,4,5,6,7,8,9,10]);

function isPrime(num) {
  if (num < 2) { return false; }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumOfNPrimes(num) {
  let sum = 0;
  let count = 0;
  let i = 2;

  while (count < num) {
    if (isPrime(i)) {
      sum += i;
      count++;
    }
    i++;
  }
  return sum;
}

sumOfNPrimes(3);

function printNSkip3(n) {
  let i = 0;

  while(i < n) {
    if(i % 3 === 0) {
      i += 1;
      break;
    }

    console.log(i);
    i += 1;
  }
}

printNSkip3(15);

function titleize(names, callback) {
  let titleized = names.map(name => `Mx. ${name} Jingleheimer Schmidt`);
  callback(titleized);
}

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} goes the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  this.height = this.height+ 12;
};

Elephant.prototype.addTrick = function (trick) {
  this.tricks.push(trick);
};

Elephant.prototype.play = function () {
  let index = Math.floor(Math.random() * this.tricks.length);
  console.log(`${this.name} is ${this.tricks[index]}!`);
};

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function (elephant) {
  console.log(`${elephant.name} is skeptical about JavaScript!`);
};

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length)} and ${food}, NOW!`;
    console.log(order);
  };
}
