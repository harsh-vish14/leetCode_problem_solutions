var longestPalindrome = function (string) {
    if (string.length == 1) {
        return string;
    } else if (string.length == 2 && string[0] == string[1]) {
        return string;
    }
    var length = string.length;
    var result = "";

    var centeredPalindrome = function (left, right) {
        while (left >= 0 && right < length && string[left] === string[right]) {
            //expand in each direction.
            left--;
            right++;
        }

        return string.slice(left + 1, right);
    };

    for (var i = 0; i < length - 1; i++) {
        var oddPal = centeredPalindrome(i, i + 1);

        var evenPal = centeredPalindrome(i, i);
        if (oddPal.length > result.length)
            result = oddPal;
        if (evenPal.length > result.length)
            result = evenPal;
    }
    return result;
};

console.log(
  longestPalindrome("ababd")
);
