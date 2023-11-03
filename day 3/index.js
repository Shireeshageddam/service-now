// pattern

const rows = parseInt(prompt("enter the number of rows :"))
for(let i=0;i<=rows;i++){
    let pattern = '';
    for(let j=1;j<=i;j++){
        pattern += '*';
    }
    console.log(pattern)
}

//factorial
const num = parseInt(prompt("enter a number"))
let factorial =1;
if(num < 0){
    console.log("factorial is not defined")
}else{
    for(let i=1;i<=num;i++){
        factorial *= i;
    }
    console.log(`factorial of ${num} is ${factorial}`)
}


//calculator
const operation = prompt("Enter the operation (sum, minus, multiply):");
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
let result;
if (operation === "sum") {
  result = num1 + num2;
} else if (operation === "minus") {
  result = num1 - num2;
} else if (operation === "multiply") {
  result = num1 * num2;
} else {
  result = "Invalid operation";
}
console.log(`Result of ${operation} ${num1} and ${num2} is: ${result}`);

