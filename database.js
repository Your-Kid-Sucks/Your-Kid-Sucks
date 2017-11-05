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

var Students = bookshelf.Model.extend({
  tableName: 'students',
  classrooms: function() {
    return this.belongsToMany(Classrooms);
  }
});

var Classrooms = bookshelf.Model.extend({
  tableName: 'classrooms',
	students: function() {
    return this.belongsToMany(Students);
  }
});

exports.getStudentsInClass = (classID) => (
	Classrooms.where('id', classID).fetch({ withRelated: ['students'] })
)

exports.getStudentsInAllClasses = () => (
	Classrooms.fetchAll({ withRelated: ['students'] })
)

console.log(knex('students').where('student_id', 6))

exports.getStudentsByUser = (classID) => (
	null // to do
)

exports.getEventsByStudent = (studentID) => (
	knex('events').where('student_id', studentID)
)

exports.dontUseMe = function() {
	var student1 = new Students({name: "first last", school_student_id: 1234, school_id :1});
	var student2 = new Students({name: "first2 last2", school_student_id: 2424, school_id :1});

	Promise.all([student1.save(), student2.save()])
		.then(function() {
			return Promise.all([
				new Classrooms({id:1}).students().attach([student1, student2])
			])
		}).catch((err) => {
			console.log(err);
		});
}
