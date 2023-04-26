
let arr = [1, 2, 3, 4, 5, 's'];
let arrSame = true;
for (let i = 0; i < arr.length; i++) {
    for (let l = i + 1; l < arr.length; l++) {
        if (typeof(arr[i]) !== typeof(arr[l])) {
            arrSame = false;
        }
    }
}
if (arrSame) {
    console.log("Элементы в массиве одинаковы");
}
else {
    console.log("Элементы в массиве не одинаковы");
}