const router = require('express').Router();
const {
  addUser,
  listUsers,
  editUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

router.post('/', addUser);
router.get('/', listUsers);
router.get('/edit/:id', editUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
