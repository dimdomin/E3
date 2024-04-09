function interval(a, b) {
    let x = a;

    let timerId = setInterval(function() {
        console.log(x);
        if (x == b) {
            clearInterval(timerId);
        }
        x++;
    }, 1000);
}

interval(5, 15);