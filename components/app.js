class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }

  handleGetGradesSuccess(grades) {
    // console.log(this.gradeTable.updateGrades())
    this.gradeTable.updateGrades(grades);
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
  }
}
