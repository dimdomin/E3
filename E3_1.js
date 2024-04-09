function typeNumbers() {
    const arr = [0, null, NaN, 0, 1, 2, 4, "str"]

    let chet = 0,
        nechet = 0,
        zero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            if (arr[i] === 0) {
                zero += 1;
            } else if (arr[i] % 2 === 0) {
                chet += 1;
            } else {
                nechet += 1;
            }
        }
    }

    console.log('четных элементов: ', chet)
    console.log('нечетных элементов: ', nechet)
    console.log('нулей: ', zero)
}

typeNumbers()