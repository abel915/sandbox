function evenorodd(){
//get input number
let number = document.getElementByname('number')[0].value;
console.log(Number,typeof(number));
//check if input is a number
if (number % 2 === 0)
    console.log('even')
    else if (number % 2 === 1)
        console.log('odd')
    else
// display error message if not
}