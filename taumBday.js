function taumBday(blackGift, whiteGift, blackCost, whiteCost, conversion) {
    return blackGift*Math.min(blackCost,(conversion+whiteCost)) + whiteGift*Math.min(whiteCost,(conversion+blackCost));
}

console.log(taumBday(3,6,9,1,1));