function primeNumber(n){
    if (n <= 1000) {
        if (n<=1)  {
            return "Число не является простым";
        }
        else if (n === 2)  {
            return "Число простое";
        }
        else   {
            for(let x = 2; x < n; x++)  {
                if(n % x === 0) {
                    return "Число не является простым";
                }
            }
            return "Число простое";
        }
    }
    else {
        return "Данные неверны";
    }
};

console.log(primeNumber(23));