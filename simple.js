/* //23_5-1 Understand recursion using sum of numbers
// same function  er vitore same funciton call kora jai 
//adding 1-5 by using looop and function 

// let sum =0;
// for (let i=5; i>=1; i--){
//      sum = sum+i;
    
// }
// console.log(sum); */

// by using function
function add(i){
    if(i==1){
        return 1;// i er man jokhon 1 pabe tokhon ar calling same function line e jabe na tokhon taile ar 1 minus korte hbe na i k
    }
        console.log(i);
        return i + add(i-1); //calling the same function

    //
}
const total = add(5);
console.log(total);
