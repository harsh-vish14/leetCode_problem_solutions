

function kaprekarNumbers(p, q) {
   var numbers = [];
    if (p == 1) {
        numbers.push(1);
    }
    for (let i = p + 1; i < q+1; i++){
        var string = String(i * i);
        if (parseInt(string.slice(0, string.length/2)) + parseInt(string.replace(string.slice(0,  string.length/2), '')) == i) {
            
            numbers.push(i);
        }
        
    }
    if (numbers.length) {
        console.log(String(numbers.join(' ')))
    } else {
        console.log('INVALID RANGE');
    }
}


kaprekarNumbers(1, 99999);