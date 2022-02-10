let evaluationScale = null;

function setEvaluationScale(scale) {
  if (Array.isArray(scale)) {
    evaluationScale = scale;
  }
}

function getGrade(points) {
  if (!Array.isArray(evaluationScale)) {
    return "There is no evaluation scale defined.";
  }

  grade = 0;

  evaluationScale.forEach((element) => {
    if (points >= element.points && grade < element.grade) {
      grade = element.grade;
    }
  });

  return grade;
}

export { setEvaluationScale, getGrade };
