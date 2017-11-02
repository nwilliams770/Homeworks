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
