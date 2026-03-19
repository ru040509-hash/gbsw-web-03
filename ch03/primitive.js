let a = 10;
let b = a;

a = 15;

// 원시 자료형의 경우, 변수 복사 시,
// 복사 당기의 값만 복사한다
console.log(a); // 기대값 15
console.log(b); // 기대값 10