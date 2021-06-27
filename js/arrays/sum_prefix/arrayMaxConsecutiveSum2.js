function arrayMaxConsecutiveSum2(inputArray) {
    let res = -1001;
    for(let i = 0; i < inputArray.length ; i++){
        if(inputArray[i] > res) res = inputArray[i];
        let acc = inputArray[i];
        for(let j = i+1; j < inputArray.length ; j++){
            acc += inputArray[j];
            if(acc > res) res = acc;
        }
    }
    return res;
}


function arrayMaxConsecutiveSum2(inputArray) {
    let res = inputArray[0];
    let acc = inputArray[0];
    for(let i = 1; i < inputArray.length ; i++){
        acc = Math.max(inputArray[i],acc +inputArray[i]);
        res = Math.max(acc,res);
    }
    return res;
}