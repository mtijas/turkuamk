import { setEvaluationScale, getGrade } from "./evaluator.js";

let scale = [
  { grade: 1, points: 20 },
  { grade: 2, points: 35 },
  { grade: 3, points: 50 },
  { grade: 4, points: 65 },
  { grade: 5, points: 80 },
];

console.log("Points 50, no scale set. Got grade: " + evaluator.getGrade(50));

evaluator.setEvaluationScale(scale);

console.log("Points 50, scale set. Got grade: " + evaluator.getGrade(50));
console.log("Points 101, scale set. Got grade: " + evaluator.getGrade(101));
console.log("Points 19, scale set. Got grade: " + evaluator.getGrade(19));
