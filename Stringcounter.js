const incrementOfStings = (string, length) => {
    var stringLenght = 0
    var aCounter = 0
    for (let i = 0; i < length; i++) {
        if(stringLenght === string.length){
            // console.log('done');
            console.log('string');
        }else{
            stringLenght++;
        }
        if(string[stringLenght] === 'a'){
                aCounter++;         
        }
    };
    console.log(stringLenght)
    console.log(aCounter)
}

var resultString = incrementOfStings('aba', 10);
// resultString