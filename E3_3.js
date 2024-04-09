function numOne(a) {
    return function numTwo(b) {
        return a+b;
    }
};

const sumFunc = numOne(2);

const sum = sumFunc(8);

console.log(sum);