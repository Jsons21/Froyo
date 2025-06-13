const IceCream = {
    Flavor1 : 'vanilla',
    Flavor2 : 'strawberry',
    Flavor3 : 'coffee',
    Flavor4 : 'chocolate',
}
console.table(IceCream)


const userObject = {};
const userInput = userInputString = prompt ('Welcome to our online store! please enter your flavor using a comma',
    'vanilla,vanilla,vanilla,strawberry,coffee,coffee'
);

const arr = userInput.split(',');
userObject.order = userInput
console.log(userInput.split(','));






