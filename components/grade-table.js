class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    this.tableElement.textContent = "";
    if(grades.length === 0) {
      noGrades.classList.remove("d-none");
    } else {
      noGrades.classList.add("d-none");
    }

    for (var i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);

    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    var tRow = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data.name;
    var course = document.createElement("td");
    course.textContent = data.course;
    var grade = document.createElement("td");
    grade.textContent = data.grade;
    var deleteTd = document.createElement("td");
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteTd.append(deleteBtn);

    deleteBtn.addEventListener("click", function () {
      deleteGrade(data.id);
    });

    tRow.append(name, course, grade, deleteTd);
    this.tableElement.append(tRow);
  }
}
