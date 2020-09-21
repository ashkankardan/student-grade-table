var tableElement = document.querySelector('tbody')
var gradeAverage = document.querySelector('#gradeAverage')

var pageHeader = new PageHeader(gradeAverage)
var table = new GradeTable(tableElement)
var app = new App(table, pageHeader);
