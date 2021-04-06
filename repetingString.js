const counterA = (string) => {
    [...string].map((char) => {
        if (char === 'a') {
            console.log('a');
        }
    })
}

counterA('abaabaabaaba')
var a = 'abaabaabaaba'
console.log(a.replaceAll('a',''))
// function repeatedString(givenString, LengthGiven) {
    
// }