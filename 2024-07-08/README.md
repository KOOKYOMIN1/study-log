# 2024-07-08 배운 내용 정리

## 1. 배열 메서드 (map, filter, reduce, sort)
---

### (1) map  
- 배열의 각 요소를 **일정한 방식으로 변환해서** 새로운 배열을 만듦  
- 기존 배열은 변경 X  
```js
const arr = [1, 2, 3];
const doubled = arr.map(num => num * 2); // [2, 4, 6]
(2) filter
조건에 맞는 요소만 골라서 새 배열로 반환

예시: 10보다 큰 값만 남기기


const numbers = [3, 17, 9, 20, 8, 15];
const filtered = numbers.filter(n => n > 10); // [17, 20, 15]
(3) reduce
배열의 모든 값을 누적/합산/합쳐서 하나의 값으로 반환

예시: 총 합 구하기


const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, cur) => acc + cur, 0); // 10
가장 나이 많은 사람 찾기


const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 41 },
  { id: 3, name: 'Charlie', age: 31 }
];
const oldest = users.reduce((acc, cur) => (cur.age > acc.age ? cur : acc)).name;
console.log(oldest); // 'Bob'
(4) sort
배열을 정렬할 때 사용

오름차순: (a, b) => a - b

내림차순: (a, b) => b - a

객체 배열도 원하는 값 기준으로 정렬 가능


const orders = [
  { id: 1, amount: 12000 },
  { id: 2, amount: 8000 },
  { id: 3, amount: 9000 }
];
orders.sort((a, b) => b.amount - a.amount); // amount 내림차순
2. 기타 자바스크립트 개념
(1) includes, endsWith
includes: 문자열 또는 배열에 특정 값이 포함되어 있는지 확인

endsWith: 문자열이 특정 문자로 끝나는지 확인


const fruits = ['apple', 'banana', 'cherry', 'grape', 'melon'];
const result = fruits.filter(fruit => fruit.endsWith('e')); // ['apple', 'grape']
(2) toLowerCase()
문자열을 모두 소문자로 변환

주로 대소문자 구분 없이 비교할 때 사용


const str = "Alice";
console.log(str.toLowerCase().includes('a')); // true
3. 실습 문제 & 풀이 예시
(1) orders 배열에서 userId가 1인 사용자의 총 주문 금액 구하기

const orders = [
  { id: 101, userId: 1, amount: 50000 },
  { id: 102, userId: 2, amount: 150000 },
  { id: 103, userId: 1, amount: 70000 },
  { id: 104, userId: 3, amount: 30000 }
];
const user1Total = orders
  .filter(order => order.userId === 1)
  .reduce((sum, order) => sum + order.amount, 0);
console.log(user1Total); // 120000
(2) fetch와 async/await 기본 사용법

const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function getTitle() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.title); // 'sunt aut facere repellat provident...'
}
getTitle();
4. 오늘 느낀 점/메모
map, filter, reduce, sort 실무 예시를 연습하면서 JS 문법이 더 익숙해짐

배열 메서드는 비유로 접근하면 이해가 빠름

fetch, async/await 구조, json 변환 방식에 익숙해짐

앞으로 복습용으로 매일 정리하는 습관 유지할 것