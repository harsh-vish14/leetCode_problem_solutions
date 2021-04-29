function biggerIsGreater(w) {
    w = w.split('')
    // Find non-increasing suffix
    let i = w.length - 1;
    while (i > 0 && w[i - 1] >= w[i])
        i--;

    if (i <= 0)
        return 'no answer';
    
    // Find the rightmost successor to pivot in the suffix
    let j = w.length - 1;
    while (w[j] <= w[i - 1])
        j--;

    // Swap the pivot with the rightmost character
    const temp = w[i - 1];
    w[i - 1] = w[j];
    w[j] = temp;
    
    // Reverse suffix
    j = w.length - 1;
    while (i < j) {
        const temp = w[i];
        w[i] = w[j];
        w[j] = temp;
        i++;
        j--;
    }

    return w.join('');
}

console.log(biggerIsGreater('dkhc'));