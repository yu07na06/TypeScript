// [1] Narrowing ************************
// typeof 변수 -------------------
function 내함수(x) {
    if (typeof x === 'string') {
        return x + 1;
    }
    else {
        return x + 1;
    }
}
내함수(123);
function 내함수2(x) {
    var arr = [];
    if (typeof x === 'number') {
        arr[0] = x;
    }
}
내함수2(123);
function 내함수3(x) {
    x.age + 1;
}
function 내함수4(x) {
    if (typeof x.age === 'number')
        x.age + 1;
}
function 내함수5(x) {
    if ('age' in x)
        x.age + 1;
}
// 인스턴스 instanceof 부모 -----------------------
var 사냥꾼 = /** @class */ (function () {
    function 사냥꾼() {
    }
    return 사냥꾼;
}());
var 나무꾼 = /** @class */ (function () {
    function 나무꾼() {
    }
    return 나무꾼;
}());
function 함수(x) {
    if (x instanceof 사냥꾼)
        x.총 = true;
}
// [2] Assertion **************************************
function 귀찮은함수(x) {
    var array = [];
    array[0] = x; // assertion
}
// ========================= 문제 ===============================
// Q1. 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
function 클리닝함수(arr) {
    // 방법 1. Number 함수로
    // return arr.map(item => Number(item));
    // 방법 2. narrowing 적용
    return arr.map(function (item) { return typeof item === 'number' ? item : Number(item); });
}
console.log(클리닝함수(['1', 2, '3']));
// Q2. 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다. 
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다. 
// 철수쌤같은 선생님 object 자료를 집어넣으면 
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다. 
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 만들함수(sub) {
    if (Array.isArray(sub.subject)) {
        return sub.subject[sub.subject.length - 1];
    }
    else {
        return sub.subject;
    }
}
console.log(만들함수({ subject: 'math' })); //이 경우 'math'를 return
console.log(만들함수({ subject: ['science', 'art', 'korean'] })); //이 경우 'korean'을 return
// console.log(만들함수( { hello : 'hi' } ));  //이 경우 타입에러 나면 됩니다 
