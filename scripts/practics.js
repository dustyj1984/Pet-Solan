let myArray=[1,2,3,];
let theSameArray=new Array(1,2,3);
console.log(theSameArray);
myArray[1]=20;
console.log(myArray[1]);

myArray["sting",10,false];
console.log(myArray);

let otherArray=["What is the meaning of life?","42",true];
console.log(otherArray);

const months = ["Jan", "Feb", "Mar", "Apr", "May"];
for(let i=0; i<months.length; i++){
console.table(months[i]);
}

console.log(number[0]);
console.log(number[1]);
console.log(number[2]); 
console.log(number.length);

numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop();
months.shift();
months.splice(1,1);

console.table(months);