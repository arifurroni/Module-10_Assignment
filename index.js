document.getElementById("h3Id3").innerHTML = "lorem ipsum";

document.getElementById("h3Id4").innerHTML = "lorem ipsum";


// ------------ Answer 01 ------------------

function calculateDifference(num1, num2) {
    return num1 - num2;
}

let result = calculateDifference(33, 22);
console.log(result);

document.getElementById("h3Id1").innerHTML = result;



// ------------ Answer 02 ------------------

function isOdd(num){
    if(num % 2 !== 0){
        return true
    } else {
        return false
    }
}

let odd = isOdd(13);
console.log(odd);

document.getElementById("h3Id2").innerHTML = odd;



// ------------ Answer 03 ------------------

function findMin(arr) {
    return Math.min(...arr);
}

console.log(findMin([9, 7, 22, 33, 15]));  // 7
console.log(findMin([18, 32, -2, 0, 8])); // -2

let min = findMin([11, 3, 55, 1, 33, 44])
document.getElementById("h3Id3").innerHTML = min;



// ------------ Answer 04 ------------------

var inputs = [3, 4, 5, 6, 7, 8, 12, 15, 22]
var evenNumber = inputs.filter(x => x % 2 == 0)
console.log(evenNumber);

document.getElementById("h3Id4").innerHTML = evenNumber;



// ------------ Answer 05 ------------------

const letters = ["Y", "K", "S", "C", "J", "A", "Z"];

letters.sort();

letters.reverse();

console.log(letters)

document.getElementById("h3Id5").innerHTML = letters;





// ------------ Answer 06 ------------------

export function titleCase(string) {
    string = 'hello World';
    const sentence = string.toLowerCase().split('');
      for (let i = 0; i < sentence.length; i++) {
          sentence[i] = sentence[i][0].toUpperCase() + sentence[i];
    }
     return sentence;

}



// ------------ Answer 07 ------------------



// ------------ Answer 08 ------------------



