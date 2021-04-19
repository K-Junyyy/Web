var args = process.argv;
console.log(args[2]);

/*
console.log(args)

nodejs 런타임 위치
현재 파일 경로
입력값1
입력값2
...
*/

console.log('A');
console.log('B');

if(args[2] === '1'){
    console.log('C1');
}
else{
    console.log('C2');
}
console.log('D');