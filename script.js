const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
    const res = [];
    let sub = [];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] + sum > n) {
            res.push(sub);
            sub = [arr[i]];  
            sum = arr[i];    
        } else {
            sub.push(arr[i]);
            sum += arr[i];
        }
    }

    if (sub.length > 0) {
        res.push(sub);
    }

    return res;
};

const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));
