var firstUniqChar = function(s) {
    const arr = s.split('');
    const map = new Map();
    for (let item of arr){
        map.has(item) ? map.set(item,map.get(item)+1)  : map.set(item, 1);
    }
    for (let i = 0; i < arr.length; i++){
        if (map.get(arr[i]) === 1) return i;
    }
    return -1;
};