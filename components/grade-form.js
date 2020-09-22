class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.formElement.addEventListener("submit", this.handleSubmit);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var nameVal = formData.get('name');
    var courseVal = formData.get('course');
    var gradeVal = formData.get('grade');
    this.createGrade(nameVal, courseVal, gradeVal);
    event.target.reset();
  }
}
