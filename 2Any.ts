let age: any = 'a';
console.log(age); //a
age=10;
console.log(age);// 10 , no error given


//When need to use any type variable as a parameter
function print(age:any){console.log(age);}