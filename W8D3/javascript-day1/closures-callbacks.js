function soundMaker(sound, times) {
  function makeSound(){
    console.log(`${sound}`);
  }
  for(let i = 0; i < times; i++){
    makeSound();
  }
}

soundMaker("fart", 3);

// a callback is a listener (think dropdown button)
// it waits until `called upon` to execute at any time
// after the page loads

// let callback = function() {
//   console.log("it has been 5 seconds!");
// }

// let timeToWait = 5000;

// global.setTimeout(callback, timeToWait); //normally don't set anything on global

//more likely to see
// global.setTimeout(function() {
//   console.log("It has been 5 seconds!");
// }, 5000); //function invoked 5 seconds later
//^^ES5 syntax

//ES6:

global.setTimeout(() => {
  console.log("It has been 5 seconds!")
}, 5000);
//^^^^^preferred^^^
