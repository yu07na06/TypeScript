// [1] type alias *******************************
type Animal = string | number | undefined;
let 동물 :Animal = 'cat';

type Person = { name :string, age :number };
let 사람 :Person = { name: 'park', age: 24 };


// 갑자기 const
const 출생지역 = 'seoul';
// 출생지역 = 'busan'; // error

const 출생 = { region: 'seoul' };
출생.region = 'busan';  // object 수정 가능




// typescript object const
type Girlfriend = { 
  readonly name :string // 읽기 전용이므로 수정 불가
};
const 여친 :Girlfriend = {
  name: 'yuna'
};
// 여친.name = 'jinwoong'; // error


// typescript object ?
type Boyfriend = { 
  name? :string,  // |undefined의 약자가 '?'(물음표)
  age :number,
};
const 남친 :Boyfriend = {
  age: 29
};





// 여러개 합칠 수 있는 type alias
// 방법 1. | 연산자 사용
type Name = string;
type Age = number;
type People = Name | Age;
// 방법2. & 연산자 사용
type PositionX = { x :number };
type PositionY = { y :number };
type Position = PositionX & PositionY; // { x :number, y :number };
let position :Position = { x: 10, y: 20 };






// ========================= 문제 ===============================
// Q1. object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
type A = { wow :string };
type B = { wow :string };
type C = { wow :number };
type AB = A & B;
let ab :AB = { wow :'wow' };
type BC = B & C;
// let bc :BC = { wow : 123 };  // error
// let bc1 :BC = { wow : '123' }; // error
// ==> 어떻게 되는지 잘모르겠다. 게시판에 질문 남김. (추후 답변 수정할 예정)


// Q2. 다음 조건을 만족하는 타입을 만들어봅시다. 
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다. 
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.  
// type alias로 만들어보셈 
type Figure = {
  color? :string,
  size :number,
  readonly position :number[],
}



// Q3. 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오. 
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다. { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오. 
type Info = {
  name :string,
  phone :number,
  email :string,
}



// Q4. 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다. 
// 3. 멋있게 숙제2에서 만들어둔  type alias를 재활용해봅시다.
type Adult = { adult :boolean };
type NewInfo = Info & Adult;