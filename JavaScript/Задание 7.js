let arr = [1, 2, 3, 4, 5, 6, 7, 8, null, 'joker', 9, 10];
    let Even = 0;
    let Odd = 0;
    let Another = 0;


for (let i = 0; i < arr.length; i++) {
    if ((typeof(arr[i]) === 0) || (typeof(arr[i]) != 'number')) {
        Another++;
    }  else {
            if (arr[i] % 2 === 0) {
                Even++;
            }
                else {
                    Odd++;
                }
    }
}
console.log('Чётных чисел ' + Even);
console.log('Нечётных чисел ' + Odd);
console.log('Других типов ' + Another);
