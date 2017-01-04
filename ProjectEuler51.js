/**
 * Created by hermanvanderveer on 01/12/2016.
 *
 PRIME DIGIT REPLACEMENTS

 By replacing the 1st digit of the 2-digit number *3,
 it turns out that six of the nine possible values:
 13, 23, 43, 53, 73, and 83, are all prime.

 By replacing the 3rd and 4th digits of 56**3 with the same digit, this 5-digit number is the first example having
 seven primes among the ten generated numbers, yielding the family:
 56003, 56113, 56333, 56443, 56663, 56773, and 56993. Consequently 56003,
 being the first member of this family,
 is the smallest prime with this property.

 Find the smallest prime which,
 by replacing part of the number (not necessarily adjacent digits) with the same digit,
 is part of an eight prime value family.

 https://projecteuler.net/problem=51
 */
var eratosthenes = function(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];

    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }

    return output;
};

console.log(eratosthenes(100000));

function isPrime(getal){
    tot = Math.floor(Math.sqrt([getal], 2))
    // console.log(tot)
    for(x=2; x<=tot; x++){
        if ( getal%x == 0 ){
            console.log(getal + " is not prime")
            return false
        }
    }
    console.log(getal + " is prime")
    return true
}


// for (x=1;x<300; x++){
//     for (y=0;y<=9; y++){
//         isPrime(+("" + x + y));
//     }
//
// }