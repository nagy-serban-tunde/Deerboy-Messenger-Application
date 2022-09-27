function largestPrime(number) {
  var primes = [];
  while (number % 2 == 0) {
    number = number/2
    if(!primes.includes(2)) primes.push(2)
  }
  for (var i = 3; i <= number; i += 2) {
      while (number % i == 0) {
          number = number / i;
          if(!primes.includes(i)) primes.push(i)
      }
  }
  if (primes.length)
  {
    // return primes;
    return primes[primes.length-1];
  }
  else
  {
    return 'Not have prime factor'
  }
}
console.log('1--' + largestPrime(1));
console.log('3--' + largestPrime(3));
console.log('26--' + largestPrime(26));
console.log('27--' + largestPrime(27));
console.log('36--' + largestPrime(36));
console.log('45--' + largestPrime(45));
console.log('49--' + largestPrime(49));
console.log('500--' + largestPrime(500));
console.log('13195--' + largestPrime(13195));
console.log('600851475143--' + largestPrime(600851475143));