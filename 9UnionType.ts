function kgtolb(weight: number|string):number{ //uniontype
    //narrowing
    if(typeof weight==="number"){return 2*weight}
    else{return (parseInt(weight)*2);}

}

console.log(kgtolb(10));
console.log(kgtolb("10")); 