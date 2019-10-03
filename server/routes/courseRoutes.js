const router = require('express').Router();
const {
  addCourse,
  getCourses,
  editCourse,
  updateCourse,
  deleteCourse
} = require('../controllers/courseController');

router.post('/', addCourse);
router.get('/', getCourses);
router.get('/edit/:id', editCourse);
router.post('/update/:id', updateCourse);
router.delete('/delete/:id', deleteCourse);

module.exports = router;
