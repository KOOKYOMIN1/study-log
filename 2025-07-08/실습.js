// 1. 10보다 큰 값만 새 배열로 만들기
const numbers = [3, 17, 9, 20, 8, 15];
const tenPlus = numbers.filter(number => number > 10);
console.log(tenPlus); // [17, 20, 15]

// 2. 배열에서 name만 뽑아서 새 배열 만들기
const users = [
  { id: 1, name: 'Alice', age: 28 },
  { id: 2, name: 'Bob', age: 22 },
  { id: 3, name: 'Charlie', age: 31 }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob', 'Charlie']

// 3. 가장 나이 많은 사람의 name만 구하기
const oldestName = users.reduce((acc, cur) => (cur.age > acc.age ? cur : acc)).name;
console.log(oldestName); // 'Charlie'

// 4. orders 배열을 amount 내림차순 정렬
const orders = [
  { id: 1, amount: 12000 },
  { id: 2, amount: 8000 },
  { id: 3, amount: 9000 }
];
orders.sort((a, b) => b.amount - a.amount);
console.log(orders); // [{id:1, ...}, {id:3, ...}, {id:2, ...}]

// 5. userId가 1인 사용자의 총 주문 금액 구하기
const orders2 = [
  { id: 101, userId: 1, amount: 50000 },
  { id: 102, userId: 2, amount: 150000 },
  { id: 103, userId: 1, amount: 70000 },
  { id: 104, userId: 3, amount: 30000 }
];
const user1Total = orders2
  .filter(order => order.userId === 1)
  .reduce((sum, order) => sum + order.amount, 0);
console.log(user1Total); // 120000

// 6. fruits 배열에서 'e'로 끝나는 단어만 새 배열로 만들기
const fruits = ['apple', 'banana', 'cherry', 'grape', 'melon'];
const eFruits = fruits.filter(fruit => fruit.endsWith('e'));
console.log(eFruits); // ['apple', 'grape']

// 7. fetch와 async/await 실습
const url = 'https://jsonplaceholder.typicode.com/posts/1';

async function getTitle() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.title); // 'sunt aut facere repellat provident...'
}
getTitle();