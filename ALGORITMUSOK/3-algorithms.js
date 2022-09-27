function isPrime (num) 
{
    if (num == 0) return false;
    if (num == 1) return false;
    if (num == 2) return true; 

    for (var i = 2; i<=Math.sqrt(num); i++)
    {
        if (num % i == 0) return false;
    }
    return true;
}

function primeNumber (number) {
    var count = 0;
    var current_prime = 0;
    var prime = 0;
    while (true) {
        if (count == number) break;
        if (isPrime(prime)) {
            current_prime = prime;
            prime++;
            count++;
        }
        else {
            prime++;
        }
    }
    return current_prime;
}

console.log(primeNumber(6))
console.log(primeNumber(10001))