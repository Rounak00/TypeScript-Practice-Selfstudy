function f(name:string){
    console.log(name.toUpperCase());
}

f(null);;
// by default it is valid in JS but not in TS for that we need to uncomment StrictNullCheck and set it to False

