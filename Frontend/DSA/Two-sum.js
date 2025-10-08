//  Given an array of integers, return 
// indices of the two numbers such that they add up to a specific target

// You may assume that each input would have exactly one solution, and you may not use the same element twice

let num1 = [2,7,11,15];

target = 9;

//loop through the array
let i = (num1.length-1);
while (i>=0){
    console.log(num1[i])
    selection(i);
};
num1.forEach(i => {
    console.log(num1[i])
});
// function init(){
//     //TODO take a number
//     function selection(number){
//             forEach(num1)=>{
//                 console.log(!num1.includes(number))};
//             );


//     }
//     //TODO loop through other numbers while adding

// }

// init();