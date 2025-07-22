# 2025-07-11 TIL (Today I Learned)

> **오늘의 키워드**  
> 함수 선언/표현식, 함수 호출, filter/map/reduce, 배열/객체 중복 제거, 사고 흐름 훈련

---

##  오늘 배운 핵심 요약

- 함수 선언/표현식의 차이  
- 함수 호출, 매개변수, 반환값 활용법  
- 배열 고차 함수(filter, map, reduce) 실습  
- 객체/배열에서 중복 값 필터링하는 방법  
- 실전 예제 문제로 사고 흐름 익히기

---

## 1. 함수 기본

### ▫️ 함수 선언/표현식

```JS
// 함수 선언
function add(a, b) {
  return a + b;
}

// 함수 표현식
const add = function(a, b) {
  return a + b;
};
▫️ 함수 호출/매개변수/return

function highlight(message) {
  return message + "!";
}
console.log(highlight("안녕하세요")); // "안녕하세요!"
2. 배열과 객체 다루기
▫️ filter: 조건에 맞는 요소만 추출

const users = [
  { name: '철수', age: 25 },
  { name: '영희', age: 34 },
  { name: '민수', age: 29 }
];

const over30 = users.filter(user => user.age > 30);
// [{ name: '영희', age: 34 }]
▫️ map: 원하는 값만 배열로 추출

const names = users.map(user => user.name);
// ['철수', '영희', '민수']
▫️ reduce: 누적(합계/최대/객체 변환 등)

const totalAge = users.reduce((sum, user) => sum + user.age, 0);
// 88
3. 중복 데이터 필터링
▫️ name 중복 객체 제외 예제

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
// [{ name: '철수', age: 25 }, { name: '영희', age: 34 }]
4. 오늘의 회고
코딩은 "사고의 흐름"을 만드는 훈련이다.

예제 문제를 직접 손으로 풀 때 진짜 실력이 붙는다.

모르면 바로 검색/질문 → 시간 단축 & 실전 감각 향상

꾸준히 쌓이면 큰 자산이 될 것!

 내일 목표
배열/객체 더 다양하게 다루기 연습

함수와 콜백 완전 숙달

모르는 것, 헷갈리는 것 바로 예제 만들어보기

