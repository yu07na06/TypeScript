// [1] Narrowing ************************

// typeof 변수 -------------------
function 내함수(x :number|string){
  if(typeof x === 'string'){
    return x+1;
  } else {
    return x+1;
  }
}
내함수(123);


function 내함수2(x :number|string){
  let arr :number[] = [];

  if(typeof x === 'number') {
    arr[0] = x;
  }
}
내함수2(123);



// 속성명 in 오브젝트자료 -------------------------------------------
type Animal = { age: number, cat: string };
type Person = { age: number, name: string, baby :boolean}
function 내함수3(x :Animal|Person){
  x.age + 1
}

type Animal2 = { age: string, cat: string };
type Person2 = { age: number, name: string, baby :boolean}
function 내함수4(x :Animal2|Person2){
  if(typeof x.age === 'number')
    x.age + 1
}

type Animal3 = { cat: string };
type Person3 = { age: number, name: string, baby :boolean}
function 내함수5(x :Animal3|Person3){
  if('age' in x)
    x.age + 1
}


// 인스턴스 instanceof 부모 -----------------------
class 사냥꾼 { 총 :boolean }
class 나무꾼 { 도끼 :boolean }
function 함수(x :사냥꾼|나무꾼){
  if(x instanceof 사냥꾼)
    x.총 = true;
}





// [2] Assertion **************************************
function 귀찮은함수(x :number|string){
  let array :number[] = []
  array[0] = x as number; // assertion
}







// ========================= 문제 ===============================
// Q1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(arr :unknown[]) :number[] {
  // 방법 1. Number 함수로
  // return arr.map(item => Number(item));

  // 방법 2. narrowing 적용
  return arr.map(item => typeof item === 'number'? item : Number(item));
}
console.log(클리닝함수(['1', 2, '3']));

// Q2. 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 만들함수(sub : {subject : string|string[]}) :string {
  if(Array.isArray(sub.subject)){
    return sub.subject[sub.subject.length-1];
  } else {
    return sub.subject;
  }
}
console.log(만들함수( { subject : 'math' } ));  //이 경우 'math'를 return
console.log(만들함수( { subject : ['science', 'art', 'korean'] } )); //이 경우 'korean'을 return
// console.log(만들함수( { hello : 'hi' } ));  //이 경우 타입에러 나면 됩니다 