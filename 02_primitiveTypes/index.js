// < 변수 만들기 >
// - 변수에 타입지정 = 변수에 실드 씌우는 것
// - const, let, var 사용가능
// - '변수명 :타입명'으로 지정
// [1] string, number, boolean, null, undefined **********************************
var 이름 = 'kim';
// 이름 = 123; // error
var 나이 = 50;
var 결혼했니 = true;
var 사람이니 = null; // null : 텅비었습니다.
var 인간이니 = undefined; // undefined : 정의가 되어있지 않습니다.
// [2] array, Object ***************************************************************
var 회원들 = ['kim', 'park'];
var 사람들 = ['a', 0]; // union type : 동시에 여러 타입 사용
var 동물들 = { animal1: 'dog', animal2: 'cat' };
// ========================= 문제 ===============================
// Q1. 이름, 나이, 출생지역을 변수로 저장
var myName = 'yuna';
var myAge = 24;
var myHometown = 'Ulsan';
// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담기
var favorite = { song: 'Never Be the Same', singer: 'Camila Cabello' };
// Q3. 자료 타입 지정해보기
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
