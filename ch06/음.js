function solution(num_list) {
    let sum = 0;

    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 3 === 0) {
            sum += num_list[i];
        }
    }

    return sum;
}
