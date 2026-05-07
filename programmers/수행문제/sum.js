function calc(n) {
    let sum = 0;
    for (let i =1; i <= n; i++) {
        if (i < 5) {
            sum += i;
        } else {
            sum -= i;
        }
    }
    return sum;
}