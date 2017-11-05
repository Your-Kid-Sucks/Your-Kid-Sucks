require('dotenv').config();
const pg = require('pg');
const knex = require('knex')({
	client: 'pg',
	connection: {
		host: process.env.PGHOST,
		database: process.env.PGDATABASE,
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD
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
	Classroom.where('id', classID).fetch({withRelated: ['student.id']})
}

exports.getStudentClasses = function(StudentID) {

}
