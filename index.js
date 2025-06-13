const userObject = {};
const userInput = userInputString = prompt ('Welcome to our online store! please enter your flavor using a comma',
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
);

const arr = userInput.split(',');
userObject.order = userInput
console.log(userInput.split(','));

const count = {}
for (let i = 0; i < arr.length; i++) {
  const element = arr[i];

  if (count[element]) {
    count[element] += 1;
  } else {
    count[element] = 1;
  }
}
console.log(count);





