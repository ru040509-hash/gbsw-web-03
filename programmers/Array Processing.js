function solution(numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    let average = total / numbers.length;
    return average;
}