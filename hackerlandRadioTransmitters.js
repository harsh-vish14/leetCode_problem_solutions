function hackerlandRadioTransmitters(x, k) {
    var houses = x.sort(function(a, b) { return a - b; });
    var house = houses[0], transmitter = houses[0], i = 0, towers = 0;
    n = x.length;
    while( i < n) {
        transmitter = houses[i];
        house = houses[i];
        towers++;
        while(i < n && (houses[i] - house) <= k){
            i++;
        }
        transmitter = houses[i-1];
        while(i < n && houses[i] <= transmitter + k){
            i++;
        }
    }
    return towers;
    
}

// count=0
//     i=0
//     x.sort()
//     n=len(x)
//     while i<n:
//         count=count+1
//         loc=x[i]+k
//         while i<n and x[i]<=loc:
//             i=i+1
//         loc=x[i-1]+k
//         while i<n and x[i]<=loc:
//             i=i+1
//     return count

// console.log(hackerlandRadioTransmitters([1, 2, 3, 4, 5], 1));
// console.log(hackerlandRadioTransmitters([7, 2, 4, 6, 5, 9, 12, 11], 2));
console.log(hackerlandRadioTransmitters([9 ,5 ,4 ,2 ,6 ,15,12], 2));