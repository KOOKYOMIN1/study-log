1. 함수 표현식

const add = function(a, b) {
  return a + b;
}
console.log(add(3, 5)); // 8
함수 선언 vs 함수 표현식 차이

함수를 변수에 할당해서 사용할 수 있음

2. 함수 호출

function greeting() {
  console.log("Hello world");
}
greeting(); // 함수 호출해야 실제 동작 실행
함수 정의만 하면 실행 안 됨 → 반드시 호출해야 결과 출력

3. 매개변수 & 반환값

function highlight(message) {
  return message + "!";
}
console.log(highlight("안녕하세요")); // "안녕하세요!"
매개변수 활용

반환값(return) 사용법

4. 배열/객체 활용
1) 배열에서 조건에 맞는 요소 찾기/필터링
filter, find


const users = [
  { name: '철수', age: 25 },
  { name: '영희', age: 34 },
  { name: '민수', age: 29 }
];
const result = users.filter(user => user.age > 30);
// [{ name: '영희', age: 34 }]
2) 배열 요소 가공 - map

const names = users.map(user => user.name);
// ['철수', '영희', '민수']
3) 배열에서 합계/최대값 구하기 - reduce

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// 25 + 34 + 29 = 88
4) 객체로 변환, 그룹화

const nameCount = users.reduce((acc, user) => {
  acc[user.name] = (acc[user.name] || 0) + 1;
  return acc;
}, {});
// { '철수': 1, '영희': 1, '민수': 1 }
5. 배열/객체 중복 필터링
특정 필드(name)가 중복된 객체는 제외


const users = [
  { name: '철수', age: 25 },
  { name: '영희', age: 34 },
  { name: '민수', age: 29 },
  { name: '지수', age: 40 },
  { name: '민수', age: 28 },
  { name: '지수', age: 31 }
];

const nameCount = users.reduce((acc, user)=> {
  acc[user.name] = (acc[user.name] || 0) + 1;
  return acc;
}, {});
const unique = users.filter(user => nameCount[user.name] === 1);
// [{ name: '철수', age: 25 }, { name: '영희', age: 34 }]
6. 기타 문법/개념
콜백 함수 이해

filter/map/reduce 차이점 연습

함수의 호출, 매개변수, 반환 개념 정리

오늘 배운 핵심
함수(정의/호출/표현식/매개변수/return)

배열/객체(filter/map/reduce 등 고차 함수 활용)

실무에 자주 쓰는 데이터 가공법(찾기, 변환, 합계, 중복 제거 등)