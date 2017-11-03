const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  reader.question("Would you care for some tea?", function(answer) {
    console.log("You said ${answer}.");
    reader.question("How about some tea?", function(answer2) {
      console.log("You said ${answer2}.");

      const rep1 = (answer === 'yes' ? 'do' : "don't");
      const rep2 = (answer === 'yes' ? 'do' : "don't");

      console.log("So if I got this right: you ${rep1} want tea and you ${rep2} want biscuits.");
      reader.close();
    });
  });
}
