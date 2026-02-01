// let nums=[2,4,6,8,];
// nums.forEach((nums)=>{
//     console.log(nums*nums);
// }
// )



// filter array method

// let marks=[76,98,93,89,67];
// let toppers=marks.filter((val)=>{
//     return val>90;
// })
// console.log(toppers);


//reduce array method

let n=prompt("enter a number: ");
 let arr=[];
 for(i=1;i<=n;i++){
    arr[i-1]=i;

 }
 console.log(arr);

 let sum = arr.reduce((res,curr)=>{
    return res + curr;

 });
 console.log(sum);