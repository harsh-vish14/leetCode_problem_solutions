function findDigits(n) {
    var divisor = n.toString();
    var counter = 0;
    for (var i = 0; i < divisor.length; i++) {
        if (divisor[i] != 0 && n % divisor[i] === 0) {
            counter++;
        }
    }
    return counter
}

findDigits(1012);