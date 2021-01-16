// Q1. make a string out of an array
// join() : 배열을 문자열로 변환함
{
  const fruits = ['apple', 'banana', 'orange'];

  const myResult = fruits.toString();
  console.log(myResult);

  const result = fruits.join();
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🍐, 🍌, 🍒';

  const myResult = fruits.split(',');
  console.log(myResult);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse() : 배열의 순서를 바꿈
{
  const array = [1, 2, 3, 4, 5];

  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// Q4. make new array without hte first two elements
// splice : 배열 자체를 변화시킴
// slice
{
  const array = [1, 2, 3, 4, 5];

  const myResult = array.slice(2, 5);
  console.log(myResult);
  console.log(array);
}

console.clear();
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find()
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// filter()
{
  const result = students.filter((student) => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be : [45, 80, 90, 66, 88]
// map()
{
  const result = students.map((student) => student.score);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
// some() : 배열에서 하나라도 조건에 만족한다면 true 리턴
// every() : 모든 배열의 조건이 만족된다면 true 리턴
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score >= 50);
  console.log(result2);
}
console.clear();
// Q9. compute students' average score
// reduce() : 배열의 모든 값을 누적함
// reduceRight() : 거꾸로
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be :'45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
