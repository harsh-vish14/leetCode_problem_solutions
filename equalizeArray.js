function count(array,element) {
    var count = 0;
    for (var i = 0; i < array.length; ++i){
        if (array[i] == element)
            count++;
    }
    return count;
}

function equalizeArray(arr) {
    return arr.length - Math.max(...arr.map((num) => count(arr, num)));
}

console.log(equalizeArray([3, 3, 2, 1, 3]));