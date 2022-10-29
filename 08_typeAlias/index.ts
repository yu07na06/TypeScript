type FunctionType = (a :string) => number;

function 함수(a :string) :number{
    return 0;
}

const 내함수 :FunctionType = function(a){
    return 0;
}

type Member = {
    name :string,
    plusOne : (x :number) => number,
    changeName : () => void,
}
let 회원정보 :Member = {
    name : 'kim',
    plusOne(a){ // object안에 함수 만들어서 사용
        return a+1;
    },
    changeName : () => {},
}
회원정보.plusOne(1);



// function 함수1 (a: {(): void}){
//     a();
// }
// function 함수2(){
//     console.log('함수우');
// }
// 함수1(함수2);

type CallBackFunc = (a :() => void) => void;

function 함수1 :CallBackFunc(a){
    a();
}
function 함수2(){
    console.log('함수우');
}
함수1(함수2);