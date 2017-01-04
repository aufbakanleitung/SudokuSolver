/**
 * Created by hermanvanderveer on 30/11/2016.
 *
 * https://projecteuler.net/problem=36
 * The decimal number, 585 = 10010010012 (binary), is palindromic in both bases.
 *
 * Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.
 *
 * (Please note that the palindromic number, in either base, may not include leading zeros.)
 */

function PalindromeCheck(num){
    num = num.toString()
    var len = num.toString().length - 1
    for(var x=0; x <Math.ceil(len/2); x++){
        if(num[x] != num[len-x]){
            return false
            // console.log(num[x] + " is " + num[len-x])
        }
    }
    return true
}

function dec2bin(dec){
    return (dec).toString(2);
}

function Euler36(tot){
    teller = 0;
    for (x=1;x<=tot;x++){
        if(PalindromeCheck(x) && PalindromeCheck(dec2bin(x))){
            console.log(x + " en binary: " + dec2bin(x));
            teller += x;
        }
    }
   console.log("The total is: " + teller)
}

Euler36(1000000)