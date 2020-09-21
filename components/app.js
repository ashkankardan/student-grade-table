class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
  }

  handleGetGradesSuccess(grades) {
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
