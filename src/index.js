const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require('fs');

// synchronous function
function syncGetRandomWord() {
    fs.appendFileSync('results.txt', "Synchronous function task \n\n", function () { });
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            fs.appendFileSync('results.txt', (i + ": " + "Fizz\n"), function () { });
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            fs.appendFileSync('results.txt', (i + ": " + "Buzz\n"), function () { });
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            fs.appendFileSync('results.txt', (i + ": " + "FizzBuzz\n"), function () { });
        }
        else {
            try {
                fs.appendFileSync('results.txt', (i + ": " + getRandomWordSync({ withErrors: true }) + "\n"), function () { });
            }
            catch{
                fs.appendFileSync('results.txt', ("It shouldn't break anything!\n"), function () { });
            }
        }
    }
    fs.appendFileSync('results.txt', "\n\n", function () {});
}
syncGetRandomWord();


// asynchronous function
async function asyncGetRandomWord() {
    fs.appendFile('results.txt', "Asynchronous function task \n\n", function () { });
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 !== 0) {
            fs.appendFile('results.txt', (i + ": " + "Fizz\n"), function () { });
        }
        else if (i % 3 !== 0 && i % 5 === 0) {
            fs.appendFile('results.txt', (i + ": " + "Buzz\n"), function () { });
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            fs.appendFile('results.txt', (i + ": " + "FizzBuzz\n"), function () { });
        }
        else {
            await getRandomWord({ withErrors: true, slow: false })
                .then(result => {
                    fs.appendFile('results.txt', (i + ": " + result + "\n"), function () { });
                })
                .catch(err => {
                    fs.appendFile('results.txt', ("It shouldn't break anything!\n"), function () { });
                })
        }
    }
}
asyncGetRandomWord();

console.log("Result saved in results.txt");
