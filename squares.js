/*
The first line contains , the number of test cases.
Each of the next  lines contains two space-separated integers,  and , the starting and ending integers in the ranges.
*/

function squares(a, b) {
     let square = 0, i = 1, count = 0;
    while (square <= b) {
        square = i * i;
        if (square >= a && square <= b) {
            count += 1;
        }
        i += 1;
    }
    return count;
}

console.log(squares(24,49));