exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('schools', (table) => {
      table.increments()
      table.string('name')
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('users', (table) => {
      table.increments()
      table.string('email')
      table.string('password')
      table.enu('role', ['ADMIN', 'EDUCATOR', 'PARENT'])
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('behavior_types', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.integer('positivity')
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('students', (table) => {
      table.increments()
      table.string('name')
      table.string('school_student_id')
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('events', (table) => {
      table.increments()
      table.integer('student_id').unsigned()
      table.integer('class_id').unsigned()
      table.integer('user_id').unsigned()
      table.dateTime('date')
      table.integer('behavior_id').unsigned()
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('comments', (table) => {
      table.increments()
      table.string('content')
      table.integer('user_id').unsigned()
      table.integer('event_id').unsigned()
      table.dateTime('date')
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('classrooms_students', (table) => {
      table.integer('student_id').unsigned()
      table.integer('classroom_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('classrooms', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.string('name')
      table.string('description')
      table.string('section')
      table.date('start_date')
      table.date('end_date')
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('users_schools', (table) => {
      table.integer('user_id').unsigned()
      table.integer('school_id').unsigned()
      table.boolean('is_deleted')
    }),

    knex.schema.createTable('users_students', (table) => {
      table.integer('user_id').unsigned()
      table.integer('student_id').unsigned()
      table.boolean('is_deleted')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('schools'),
    knex.schema.dropTableIfExists('users'),
    knex.schema.dropTableIfExists('events'),
    knex.schema.dropTableIfExists('behavior_types'),
    knex.schema.dropTableIfExists('comments'),
    knex.schema.dropTableIfExists('students'),
    knex.schema.dropTableIfExists('classrooms_students'),
    knex.schema.dropTableIfExists('classrooms'),
    knex.schema.dropTableIfExists('users_students'),
    knex.schema.dropTableIfExists('users_schools'),
  ])
};
