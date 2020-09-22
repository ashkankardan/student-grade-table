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
      this.renderGradeRow(grades[i], this.deleteGrade, this.updateGrade);

    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  onUpdateClick(updateGrade) {
    this.updateGrade = updateGrade;
  }

  renderGradeRow(data, deleteGrade, updateGrade) {
    var tRow = document.createElement("tr");
    var name = document.createElement("td");
    name.textContent = data.name;
    var course = document.createElement("td");
    course.textContent = data.course;
    var grade = document.createElement("td");
    grade.textContent = data.grade;
    var deleteTd = document.createElement("td");


    var deleteBtn = document.createElement("i");
    deleteBtn.className = "fas fa-trash";
    var updateIcon = document.createElement("i");
    updateIcon.className = "fas fa-edit";

    deleteTd.append(updateIcon, deleteBtn);

    deleteBtn.addEventListener("click", function () {
      deleteGrade(data.id);
    });

    updateIcon.addEventListener('click', function() {
      var addBtn = document.querySelector('#addBtn')
      var updateBtn = document.querySelector('#updateBtn')
      addBtn.classList.add('d-none')
      updateBtn.classList.remove('d-none')

      formElement.name.value = data.name;
      formElement.course.value = data.course;
      formElement.grade.value = data.grade;

      updateBtn.addEventListener('click', function() {
        updateGrade(
          data.id,
          formElement.name.value,
          formElement.course.value,
          formElement.grade.value
        );
        addBtn.classList.remove('d-none');
        updateBtn.classList.add('d-none');
        formElement.name.value = "";
        formElement.course.value = "";
        formElement.grade.value = "";

      })



    });

    tRow.append(name, course, grade, deleteTd);
    this.tableElement.append(tRow);
  }
}
