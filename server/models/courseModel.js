const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseName: String,
  courseDuration: String,
  courseFees: String,
  courseStartingDate: String
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
