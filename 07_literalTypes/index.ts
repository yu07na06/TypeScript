// [1] Literal Types **********************
let 이름 :'yuna';
이름 = 'yuna';
// 이름 = 'jinwoong';  // error

let 나이 :24;
나이 = 24;
// 나이 = 29;  // error

let 오정환 :'대머리'|'솔로'; // literal types
오정환 = '대머리';
// 오정환 = '풍성충' // error




function 함수(a :'hello') :1|0 {
  return 0;
}
함수('hello');


function 확률(패 :'가위'|'바위'|'보') :('가위'|'바위'|'보')[] {
  return [패];
}
확률('가위');



// 이슈 ~~~~~~~~~~~~~~~~~~~~~~~~
var 자료 = { name : 'kim' }
function 내함수(a :'kim'){
  // code
}
// 내함수(자료.name); // error - 'kim'이라는 자료가 아닌 'kim'이라는 타입을 넣어주어야 하기 때문에

// 해결책1. object에 타입 지정
var 자료1 : { name :'kim' }= { name : 'kim'};
function 내함수1(a :'kim'){
  // code
}
내함수1(자료1.name);

// 해결책2. as로 타입 변경하기
var 자료2 = { name : 'kim'};
function 내함수2(a :'kim'){
  // code
}
내함수2(자료2.name as 'kim');

// 해결책3. as const 사용하기
var 자료3 = { name : 'kim'} as const;
function 내함수3(a :'kim'){
  // code
}
내함수3(자료3.name);


