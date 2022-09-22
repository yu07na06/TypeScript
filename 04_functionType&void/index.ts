// [1] function type *********************************

// 기본 함수형
function 함수() {
  // code
}
함수() // 함수 호출


// 숫자를 집어넣으면 다른 숫자가 나오는 블랙박스 역할
function 두배(x){
  return x * 2;
}
두배(30);


// 타입 미지정 시, any type
let y;           // any type
function 세배(x){ // any type
  return x * 3;
}
세배(30);


// 타입 지정 함수
function 네배(x :number) :number{
  return x * 3;
}
네배(30);
// 네배('bad');  // error







// [2] function void type
function 보이드함수(x :number) :void {
  console.log(x + 1);
}
보이드함수(3);

function 보이드함수1(x :number) :void {
  // return x+1;
}

function 보이드함수2(x? :number) :void {
  x+1
}
보이드함수2(2);

function 보이드함수3(x :number|undefined) :void {
  // code
}
// 보이드함수3();


function 보이드함수4(x :number|string) :void {
  // console.log(x + 2); // error
}
보이드함수4(3);





// ========================= 문제 ===============================
// Q1. 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다. 
function 인사(name? :string) :void{
  console.log(name === undefined ? '이름이 없습니다.' : '안녕하세요 '+name);
}
인사();
인사('홍길동');


// Q2. 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
function 카운팅(x :number|string) :void{
  console.log(x.toString().length);
}

// Q3. 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다. 
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다. 
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.
function 결혼가능하냐(월소득 :number, 집보유여부 :boolean, 매력점수 :string) :string|undefined{
  return (월소득 + (집보유여부? 500: 0) + (매력점수 === '상'? 100 : 0)) >= 600 ? '결혼가능' : undefined;
}
결혼가능하냐(700, false, '중');
결혼가능하냐(100, false, '상');