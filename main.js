var tableElement = document.querySelector('tbody')
var gradeAverage = document.querySelector('#gradeAverage')
var formElement = document.querySelector('form')

var gradeForm = new GradeForm(formElement)
var pageHeader = new PageHeader(gradeAverage)
var table = new GradeTable(tableElement)
var app = new App(table, pageHeader, gradeForm);

app.start()
