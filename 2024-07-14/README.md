# JS OOP & Array Practice - Today’s Learning

##  문제: 클래스 + 배열 + 메서드

- `Student` 클래스를 만든다.
  - `name`, `scores`(점수 배열) 속성
  - `getAverage()` 메서드: 평균 점수 반환
- 여러 학생 객체를 배열에 저장
- 평균이 90점 이상인 학생의 이름만 뽑는 함수 작성

---

##  코드 예시

```js
class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
    const sum = this.scores.reduce((acc, cur) => acc + cur, 0);
    return sum / this.scores.length;
  }
}

const students = [
  new Student("민지", [90, 92, 94]),
  new Student("수현", [88, 80, 91]),
  new Student("영수", [99, 97, 100])
];

function getTopStudents(students) {
  return students
    .filter(student => student.getAverage() >= 90)
    .map(student => student.name);
}

console.log(getTopStudents(students)); // ["민지", "영수"]

```
##  배운 점 & 실수 정리
클래스 내에서 this.scores로 접근해야 함 (students 아님)

메서드 실행 시 반드시 () 괄호 붙이기

reduce로 배열 합 구하는 방법 숙지

filter 조건 함수는 true/false 반환 필요

 한줄 소감
직접 실습하며 실수와 시행착오를 통해 OOP & 배열 메서드 활용 감을 익힘