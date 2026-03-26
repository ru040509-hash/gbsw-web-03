const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("점수를 입력하세요. ", function (input) {
    let score = parseInt(input);
    let result;

    switch (true) {
        case (score >= 90 && score <= 100):
            result = "A";
            break;
        case (score >= 80 && score < 90 ):
            result = "B";
            break;
        case (score >= 70 && score < 80):
            result = "C";
            break;
        case (score >= 60 && score < 70):
            result = "D";
            break;
        case (score < 60 && score >= 0):
            result = "F";
            break;
        default:
            result = "올바른 점수(0~100)를 입력하세요.";
    }

    console.log(result);
    rl.close();
});