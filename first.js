/*let num=prompt("Please enter a score between 0-100");
let grade;
console.log(num);
if(num >=90 && num <=100)
{
    grade="A";

}
else if(num >=70 && num <=89 )
{
    grade="B";
}
else if(num >=60 && num<=69)
{
    grade="c";
}
else if(num >= 50 && num <= 59)
{
    grade="D";
}
else if(num >=40 && num <= 49)
{
    grade="f";

}else if(num<=0 && num >=39)
{
    grade="j";
}
console.log("According to your score the grade is ",grade);*/
 /*for(let i=1;i<=5;i++)
 {
    console.log(i);
 }*/
// let i=1;
// while(i<=5)
// {
//     console.log("i=",i);
//     i++;
// }
   
// let str="Komal";
// for( let i of str){
//     console.log("i=",i);
// }

// let student={
//      firstName:"Komal",
//      age:25

// }
// for(let i in student)
// {
//     console.log("key =",i, "value :",student[i]);
// }

// ;
// for(let num=0;num<=100; num++)
// {
//     if(num%2 !==0)
//     {
//         console.log(num);
//     }
    
// }
// let obj={
//     firstName:"Komal",
//     age:25
// };
// let spclstr=`My name is ${obj.firstName} and age is ${obj.age}`;
// console.log(spclstr);

// let fullName= prompt("Enter your full name without spaces.");
// console.log(fullName);
// let userName= "@"+fullName+fullName.length;
// console.log(userName);

//Arrays

// let marks=[15,18,17,16,19,20];
// let sum=0;

// for(let mark of marks)
// {
//     sum +=mark;
// }
// let avg=sum / marks.length;
// console.log(`average marks of class is ${avg}`);
// for(let i=0;i<=marks.length;i++)
// {
//     console.log(marks[i]);
// }

// let foodItem=["potato","appple","banan","tomato"];
// let mainmenu=["kaju","paneer","kofta"];
// //foodItem.pop();
// // console.log(foodItem.toString());

// let food=foodItem.concat(mainmenu);
// food.shift();

// food.splice(1,2,);
// console.log(food);
//console.log(food.slice(1,3));

//Function

// function myFunction(msg){
//     console.log(msg);

// }
// myFunction("Welcome to the function of javascript");

// const arrowSum =(a,b) =>
// {
//     console.log(a+b);
// }

// function countVowels(str)
// {
//     let count=0;
//     for(const char of str)
//     {
//         if( char === "a"||char ==="e"||char ==="i"||char ==="o"||char ==="u")
//         {
//             count ++;
//         }         
//     }
//     console.log(count);
// }

// const countVow=(str)=>
// {
//     let count=0;
//     for(const char of str)
//     {
//         if( char === "a"||char ==="e"||char ==="i"||char ==="o"||char ==="u")
//         {
//             count ++;
//         }         
//     }
//     console.log(count);

// } 

//callback function

let array=[1,2,3,4,5];
array.forEach((val)=>
{

    console.log(val*val);
})

array.map((val)=>
{
    console.log(val);
});

let evenArray= array.filter((val)=>
{
    return val%2===0;
});
console.log(evenArray);


const sum =array.reduce((res,curr)=>
{
    return res+curr;
});
console.log(sum);
