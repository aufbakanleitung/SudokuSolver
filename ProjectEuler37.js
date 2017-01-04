/**
 * Created by hermanvanderveer on 01/12/2016.


 * - TRUNCATABLE PRIMES - *

 The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3.

 Find the sum of the only eleven primes that are both truncatable from left to right and right to left.

 NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
 --
 https://projecteuler.net/problem=37
 */

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
