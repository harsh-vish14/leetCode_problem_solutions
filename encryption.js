function encryption(s) {
    s = s.replace(' ', '');
    var ceil = Math.ceil(Math.sqrt(s.length));
    var floor = Math.floor(Math.sqrt(s.length));
    var result = ''
    for (var i = 0; i < ceil; i++){
        var j = i, str = '';
        while (j < s.length) {
            str += s[j];
            j += ceil;
        }
        result += str+' ';
    }
    return result;
}

encryption('haveaniceday');