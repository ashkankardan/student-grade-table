class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.getGrades = this.getGrades.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
    this.updateGrade = this.updateGrade.bind(this)
    this.handleUpdateGradeSuccess = this.handleUpdateGradeSuccess.bind(this)
    this.handleUpdateGradeError = this.handleUpdateGradeError.bind(this)

  }

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var totalGrades = 0;
    for (var i = 0; i < grades.length; i++) {
      totalGrades += grades[i].grade;
    }
    var totalGradeAverage = totalGrades / grades.length;
    this.pageHeader.updateAverage(totalGradeAverage);
  }

  handleGetGradesError(error) {
    console.error(error);
  }

  getGrades() {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token": "IOFCrHGC",
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    });
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
    this.gradeTable.onUpdateClick(this.updateGrade);
  }

  createGrade(name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      headers: {
        "X-Access-Token": "IOFCrHGC",
      },
      data: {
        name: name,
        course: course,
        grade: grade,
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError,
    });
  }

  handleCreateGradeError(error) {
    console.error(error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  deleteGrade(id) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      headers: {
        "X-Access-Token": "IOFCrHGC",
      },

      success: this.handleDeleteGradeSuccess,

      error: this.handleDeleteGradeError,
    });
  }

  handleDeleteGradeError(error) {
    console.error(error);
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }

  updateGrade(id, name, course, grade) {
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      method: "PATCH",
      headers: {
        "X-Access-Token": "IOFCrHGC",
      },

      data: {
        name: name,
        course: course,
        grade: grade,
      },

      success: this.handleUpdateGradeSuccess,

      error: this.handleUpdateGradeError,
    });
  }

  handleUpdateGradeError(error) {
    console.error(error);
  }

  handleUpdateGradeSuccess() {
    this.getGrades();
  }
}
