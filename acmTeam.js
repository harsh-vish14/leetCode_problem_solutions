
function count1(a, b) {
    var on = 0;
    // console.log(a, b);
    for (var i = 0; i < a.length; i ++) {
      if (a[i] === "1") {
            on++;
        } else if (b[i] === "1") {
            on++;
        }
    }
    return on;
}

function acmTeam(topic) {
    var topicsKnow = 0;
    var teamsFormed = 0;
    for (var i = 0; i < topic.length; i++){
        for (var j = 1; j < topic.length; j++){
            var c = count1(topic[i], topic[j]);
            if (topicsKnow < c) {
                teamsFormed = 0;
                topicsKnow++;
            }
            if (c == topicsKnow) {
                teamsFormed++;
            }
        }
    }
    return [topicsKnow, teamsFormed];
}


console.log(acmTeam(['11101','10101','11001','10111','10000','01110']));
// console.log(acmTeam(['10101', '11100', '11010', '00101']));