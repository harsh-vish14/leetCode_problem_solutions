"use strict";

function timeInWords(h, m) {
  var numbersInWords = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine"];
  var time = '';

  if (m <= 30) {
    if (m == 0) time = numbersInWords[h] + " o' clock";else if (m == 15) time = "quarter past " + numbersInWords[h];else if (m == 30) time = "half past " + numbersInWords[h];else if (m == 1) time = numbersInWords[m] + " minute past " + numbersInWords[h];else time = numbersInWords[m] + " minutes past " + numbersInWords[h];
  } else {
    if (m == 45) time = "quarter to " + numbersInWords[h + 1];else if (m == 59) time = numbersInWords[60 - m] + " minute to " + numbersInWords[h + 1];else time = numbersInWords[60 - m] + " minutes to " + numbersInWords[h + 1];
  }

  return time;
}

;
timeInWords(7, 15);