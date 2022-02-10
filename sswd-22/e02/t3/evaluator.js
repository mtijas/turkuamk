let evaluationScale = null;

exports.setEvaluationScale = function (scale) {
  if (Array.isArray(scale)) {
    evaluationScale = scale;
  }
};

exports.getGrade = function (points) {
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
};
