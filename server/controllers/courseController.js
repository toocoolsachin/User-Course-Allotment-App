const Course = require('../models/courseModel');

exports.addCourse = async (req, res) => {
  try {
    await Course.create({
      courseName: req.body.courseName,
      courseDuration: req.body.courseDuration,
      courseFees: req.body.courseFees,
      courseStartingDate: req.body.courseStartingDate
    });
    res.status(201).json({
      status: 'course added successfully'
    });
  } catch (error) {
    res.status(400).send(`Error in adding course: ${error}`);
  }
};

exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(400).send(`Error in fetching courses: ${error}`);
  }
};

exports.editCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(`Error in editing course: ${error}`);
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(201).json({
      status: 'course updated successfully',
      updatedCourse
    });
  } catch (error) {
    res.status(400).send(`Error in updating course: ${error}`);
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'course deleted successfully',
      data: null
    });
  } catch (error) {
    res.status(400).send(`Error in deleting course: ${error}`);
  }
};
