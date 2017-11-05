require('dotenv').config();
const path = require('path');
const seedFile = require('knex-seed-file');
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

Promise.all([
  knex('users').del()
  .then(() => seedFile(knex, path.resolve('./seeds/users.csv'), 'users', [
    'id',
    'name',
    'email',
    'password',
    'role',
    'school_id',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),

  knex('students').del()
  .then(() => seedFile(knex, path.resolve('./seeds/students.csv'), 'students', [
    'id',
    'name',
    'school_student_id',
    'school_id',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),

  knex('classrooms').del()
  .then(() => seedFile(knex, path.resolve('./seeds/classrooms.csv'), 'classrooms', [
    'id',
    'user_id',
    'name',
    'description',
    'section',
    'school_id',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),

  knex('classrooms_students').del()
  .then(() => seedFile(knex, path.resolve('./seeds/classrooms_students.csv'), 'classrooms_students', [
    'student_id',
    'classroom_id',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),

  knex('schools').del()
  .then(() => seedFile(knex, path.resolve('./seeds/schools.csv'), 'schools', [
    'id',
    'name',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),

  knex('behavior_types').del()
  .then(() => seedFile(knex, path.resolve('./seeds/behavior_types.csv'), 'behavior_types', [
    'id',
    'name',
    'positivity',
    'school_id',
    'is_deleted'
  ], {
    columnSeparator: ',',
    ignoreFirstLine: true
  })
  ),
]).then(() => {
  console.log('Seeded!');
  process.exit(0);
});
