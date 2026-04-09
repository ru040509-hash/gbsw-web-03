function solution(arr, delete_list) {
    let result = arr.filter(value => !delete_list.includes(value));
    
    return result;
}

