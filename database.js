const pg = require('pg');
const kenx = require('kenx')({
	client: 'pg',
	connection: {
		host: '',
		database: '',
		user: '',
		password: '',
		port: ''
	}
});
const bookshelf = require('bookshelf')(knex);

var Student = bookshelf.Model.extend({
  tableName: 'students',
  classes: function() {
    return this.belongsToMany(Classroom);
  }
});

var Classroom = bookshelf.Model.extend({
  tableName: 'classrooms',
  students: function() {
    return this.belongsToMany(Students);
  }
});

exports.getStudentssInClass = function(classID) {

}

exports.getStudentClasses = function(StudentID) {

}