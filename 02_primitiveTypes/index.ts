// < 변수 만들기 >
// - 변수에 타입지정 = 변수에 실드 씌우는 것
// - const, let, var 사용가능
// - '변수명 :타입명'으로 지정

// [1] string, number, boolean, null, undefined **********************************
let 이름 :string = 'kim';
// 이름 = 123; // error

let 나이 :number = 50;
let 결혼했니 :boolean = true;
let 사람이니 :null = null; // null : 텅비었습니다.
let 인간이니 :undefined = undefined // undefined : 정의가 되어있지 않습니다.

// [2] array, Object ***************************************************************
let 회원들 :string[] = ['kim', 'park'];
let 사람들 :(string|number)[] = ['a', 0]; // union type : 동시에 여러 타입 사용

let 동물들 :{ animal1 : string, animal2: string} = { animal1 : 'dog', animal2: 'cat'};



// ========================= 문제 ===============================
// Q1. 이름, 나이, 출생지역을 변수로 저장
const myName :string = 'yuna';
const myAge :number = 24;
const myHometown :string = 'Ulsan';

// Q2. 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담기
const favorite :{song: string, singer: string} = {song: 'Never Be the Same', singer: 'Camila Cabello'};

// Q3. 자료 타입 지정해보기
let project :{
  member : string[],
  days : number,
  started : boolean,
} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}