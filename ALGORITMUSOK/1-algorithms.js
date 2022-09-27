function getMultiplesSum(number) {
    var sumMultuples = 0;
    for(var i = 1; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0){
            sumMultuples+=i; 
        }
    }
   return sumMultuples;
}
console.log(getMultiplesSum(10));
console.log(getMultiplesSum(1000));