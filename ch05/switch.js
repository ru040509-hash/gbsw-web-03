const { prependListener } = require("cluster");
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("번호를 입력하세요. ", function (number) {
    switch (parseInt(number)) {
        case 1: 
            console.log("엄마에게 전화가 걸린다.");
            break;
        case 2: 
            console.log("아빠에게 전화가 걸린다.");
            break;
        case 3: 
            console.log("동생에게 전화가 걸린다.");
            break;
        default: 
            console.log("해당 단축키가 없습니다.");
            break;
    }
    rl.close();
});
