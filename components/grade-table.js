class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades){

    this.tableElement.textContent = "";
    for(var i = 0; i < grades.length; i++) {
      var tRow = document.createElement('tr')
      var name = document.createElement('td')
      name.textContent = grades[i].name;
      var course = document.createElement('td')
      course.textContent = grades[i].course;
      var grade = document.createElement('td')
      grade.textContent = grades[i].grade;
      tRow.append(name, course, grade);
      this.tableElement.append(tRow);
    }

  }
}
