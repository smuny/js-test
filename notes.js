// console
console.log('this is the console log');

let greeting = "hi, greetings";
console.log(greeting);

console.log(["one", "two", "three"]);
console.log({a:1, b:2, c:3});
console.table({a:1, b:2});
console.error('this message is some kind of error!');
console.clear();
console.warn('this is a warning i made');

console.time('Start and Finish');
console.log('this is being timed');
console.log('this is being timed');
console.log('this is being timed');
console.log('this is being timed');
console.timeEnd('Start and Finish');
// this is used for when you want to know how long it took for the script

// ------------------
// in const, you cant reassign the variable but you CAN change whats inside the object

const person = {
    name: 'Sharon',
    age: 27,
    gender: 'female'
}

person.name = 'Sam'
console.log(person)
person.name = 'Katie'
console.log(person)
person.age = 12
console.log(person)

const numbers = [1,2,3,4,5];
numbers.push(6,7,8);
console.log(numbers);
// you just cant redeclare the const but can change the array, object
// it makes the code more readable and helps know that the code shouldnt be changed

const today = new Date();
console.log(today);
console.log(typeof today);

charAt
// string method and concat
// 9:30

// slice: if you put negative numbers, it grabs backwards

function greet(firstName, lastName){
    // console.log('Hello');
    return firstName + ' ' + lastName + ', you did it';
}

// console.log(greet('Sharon', 'Mun'));

const square = function(x){
    return x+x
}

// console.log(square(3));

// (function(name){
//     console.log('Hello' + name);
// })('Sharon');

// FOR LOOP
// three parameters separated by ;
// set a variable, set condition, increment
// i is going to continue until condition is no longer true. 
for(let i = 0; i < 10; i++){
    // console.log('Number ' + i)
    if(i === 2){
        console.log('i choose you, 2');
        continue; 
        // NOTE: continue; won't count 2 because the condition states if i === 2, it will replace it by 'i choose you, 2'.. essentially, it'll stop the loop at 2 and continue to the next iteration
    }

    if(i === 5){
        console.log('Stop the loop')
        break;
        //  NOTE: break; will stop the iteration once it hits the condition

    }
    console.log('Number '+ i);
}
