/* The first line contains a string , the initial string.
The second line contains a string , the desired final string.
The third line contains an integer , the number of operations. */


/*
returns Yes or No // in string
*/

// function appendAndDelete(s, t, k) {
//     let filteredStrings = StringFilter(s, t);
//     let unwantedStringLengthIns = s.replace(filteredStrings, '').length
//     let unwantedStringLengtht = t.replace(filteredStrings, '').length
//     if (unwantedStringLengtht + unwantedStringLengthIns <= k) {
//         return 'Yes';
//     }
//     return 'No';
// }


// const StringFilter = (string1,string2) => {
//     let SLength = string1.length
//     let i = 0;
//     let subString = '';
//     while (i <= SLength) {
//         if (string2.includes(string1.substring(0,i))) {
//             subString = string1.substring(0,i)
//         }
//         i++;
//     }
//     return subString;
// }


function appendAndDelete(s, t, k) {
    for (var i=0; i < s.length; i++) {
        if (s[i] != t[i]) {
            break;
        }
    }
    var deletesLength = s.length - i;
    var addsLength = t.length - i;
    var min = deletesLength + addsLength;
    var max = s.length + t.length;
    
    if (k < min || ((k % 2 != min % 2) && k < max)) {
        console.log("No");
    } else {
        console.log("Yes");
    }
}

console.log(appendAndDelete('y', 'yu', 2))