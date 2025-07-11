2025-07-11 TIL (Today I Learned)
 오늘 배운 것 요약
함수 선언/표현식 차이 이해

함수 호출, 매개변수, 반환값

배열 메서드(filter, map, reduce 등) 실전 활용

객체/배열 데이터 가공 및 중복 제거

코드 사고 흐름 익히기

1. 함수(Function) 기본
▪️ 함수 선언 vs 함수 표현식

// 함수 선언
function add(a, b) {
  return a + b;
}

// 함수 표현식
const add = function(a, b) {
  return a + b;
};
▪️ 함수 호출/매개변수/return

function highlight(message) {
  return message + "!";
}
console.log(highlight("안녕하세요")); // 결과: "안녕하세요!"
2. 배열과 객체 데이터 다루기
▪️ 배열에서 조건에 맞는 데이터 찾기 (filter)

const users = [
  { name: '철수', age: 25 },
  { name: '영희', age: 34 },
  { name: '민수', age: 29 }
];
const over30 = users.filter(user => user.age > 30);
// 결과: [{ name: '영희', age: 34 }]
▪️ 배열에서 원하는 값만 뽑아오기 (map)

const names = users.map(user => user.name);
// 결과: ['철수', '영희', '민수']
▪️ 배열의 값을 누적/합산하기 (reduce)

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// 결과: 88
3. 객체/배열 중복 데이터 필터링
▪️ 이름이 중복되는 객체 제외하기

const users = [
  { name: '철수', age: 25 },
  { name: '영희', age: 34 },
  { name: '민수', age: 29 },
  { name: '지수', age: 40 },
  { name: '민수', age: 28 },
  { name: '지수', age: 31 }
];

const nameCount = users.reduce((acc, user) => {
  acc[user.name] = (acc[user.name] || 0) + 1;
  return acc;
}, {});
const unique = users.filter(user => nameCount[user.name] === 1);
// 결과: [{ name: '철수', age: 25 }, { name: '영희', age: 34 }]
4. 오늘의 회고
코딩은 사고의 흐름을 훈련하는 과정이라는 점을 실감

예제 문제 직접 풀면서 손에 익히는 게 효과적이라고 느낌

궁금한 점은 바로 찾아가며 학습하는 것이 장기적으로 +ev

하루하루 누적되는 내용이 실무에서 큰 힘이 될 거라 기대

 내일 목표
오늘 배운 배열/객체 다루는 법 더 연습하기

함수와 콜백 개념 복습

궁금한 부분은 다시 예제 만들어 직접 확인하기