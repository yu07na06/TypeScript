// [1] union type ********************************************
// 변수 ------------------------------------------
let 회원 :number|string = 123;    //union type
let 사장 :(number|string) = 123;  //union type

// 123으로 데이터를 넣어 number 타입으로 확정된다.
// 하지만 'park'라는 데이터를 다시 넣으면, string|number 타입으로 변경된다.
회원 = 'park';


// 배열, 객체 --------------------------------------
let 회원들 :(number|string)[] = [1, '2', 3];  // array union type
let 오브젝트 : {a: string|number} = {a: 123}; // object union type

let 사장들 : number | string[];
사장들 = 123;
사장들 = ['kim', 'park'];

// 사장들 = [1,2,3]; // error
// 사장들 = 'yuna';  // error




// [2] any type ********************************************
let 이름 :any;
이름 = 123;
이름 = true;
이름 = 'good';
이름 = ['hi'];
이름 = {a: 5};



// [2] unknown type ********************************************
let 나이 :unknown;
나이 = 24;
나이 = 'yuna';

// let 변수1 :string = 나이; // error

let 주소 :any;
let 변수2 :string = 주소; // no error


let 생일 :unknown;
// 생일-1  // error


let 탄생일 :string|number;
// 탄생일 + 1;   // 불허

'kim' + 1;  // 허용
2 + 1;      // 허용


let 사과 :unknown = 1;
// 사과 -1;  // error




// ========================= 문제 ===============================
// Q1. 해당 코드가 오류나는 이유? 타입스크립트는 엄격하기에 union type이기 때문에 정확한 number type이 아닌 이상 오류가 발생한다.
// let 나이: string|number;
// 나이 + 1;

// Q2. 다음 코드도 오류나는 이유? 타입스크립트는 엄격하기 때문에 모든 타입을 허용해주는 unknown type일지라도 number type으로 정확한 명시가 되어있지 않으면 오류가 발생한다.
// let 나이: unknown = 1;
// 나이 + 1;

// H1. 다음 변수 4개에 타입 지정. (조건) age 변수엔 undefined 말고 숫자도 들어올 수 있다.
let user :string = 'kim';
let age :undefined|number = undefined;
let married :boolean = false; 
let 철수 :(string|undefined|number|boolean)[] = [user, age, married];

// H2. 학교 변수에 타입 지정.
let 학교 :{
  score : (number|boolean)[],
  teacher : string,
  friend : string|string[]
} = {
  score : [100, 97, 84],
  teacher : 'Phil',
  friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]