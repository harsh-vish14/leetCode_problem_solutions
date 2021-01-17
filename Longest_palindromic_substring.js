var longestPalindrome = function (s) {
       if (s.length == 2 && s[0] != s[1]) {
        return s[0];
    } else if (s.length == 1) {
        return s;
    }
    var palindromeString = '';
    var i = 0;
    var j = s.length - 1;
    for (let z = 0; z <= s.length; z++){
        if (s[i] != s[j]) {
            i++;
            j--;
        } else {
            palindromeString = s.substring(i, j + 1);
        }
    }
    if (palindromeString.length < 3 && s.length == 3) {
        if (s[0] == s[1]) {
        return s.substring(0, 2);
    } else if (s[1] == s[2]) {
            return s.substring(1, 3);
        }
    }
    return palindromeString
};
console.log(longestPalindrome('bbab'));