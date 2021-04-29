function beautifulTriplets(d, arr) {
    var counter = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr.includes(arr[i] + d) && arr.includes(arr[i] + 2 * d)) {
            counter++;
        }
    }
    return counter;
}

beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]);
