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

function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([3, 4, 5, 6, 7, 8, 12, 15, 22]));
document.getElementById("h3Id4").innerHTML = filterEvenNumbers([3, 4, 5, 6, 7, 8, 12, 15, 22]);



// ------------ Answer 05 ------------------

function sortArrayDescending(arr) {
    arr.sort((a,b)=>a-b);
    arr.reverse();
    return arr;
}
 
console.log(sortArrayDescending([2, 4, 19, 15, 5, 11]));
console.log(sortArrayDescending([20, -3, 0, 11, 4, 1]));
document.getElementById("h3Id5").innerHTML = sortArrayDescending([20, -3, 0, 11, 4, 1]);





// ------------ Answer 06 ------------------

function lowercaseFirstLetter(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("JAVASCRIPT"));
document.getElementById("h3Id6").innerHTML = lowercaseFirstLetter("JAVASCRIPT");




// ------------ Answer 07 ------------------

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    return [...str].filter(char => vowels.includes(char)).length;
}

console.log(countVowels("Nabil is a Good Boy."));
document.getElementById("h3Id7").innerHTML = countVowels("Nabil is a Good Boy.");



// ------------ Answer 08 ------------------

function findAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum / array.length;
  }

console.log(findAverage([10, 20, 30, 40]));
document.getElementById("h3Id8").innerHTML = findAverage([10, 20, 30, 40]);

