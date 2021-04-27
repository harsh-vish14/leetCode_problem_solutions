function generateNumberFactorial(n) {
  n = BigInt(n);

  return n === 0n ? 1n : n * generateNumberFactorial(n - 1n);
};

function extraLongFactorials(n) {
    var i = generateNumberFactorial(n).toString();
    return i;
}

var r = extraLongFactorials(25);
console.log(r)