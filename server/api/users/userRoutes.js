var userController = require('./userController');
var studentController = require('./studentController');
var teacherController = require('./teacherController');
var User = require('../../database/models/userModel.js');

module.exports = function(app) {

  //Students:
  app.get('/:username/student/classes/booked', studentController.getBookings);
  app.post('/:username/student/classes/booked', studentController.bookClass);

  //Teachers
  app.get('/:username/teacher/classes', teacherController.allTeacherClasses);
  app.get('/:username/teacher/classes/booked', teacherController.allBookedClasses);
  app.get('/:username/teacher/classes/available', teacherController.allOpenClasses);
  app.post('/:username/teacher/classes', teacherController.createClass);
  app.post('/:username/teacher/classes/:id', teacherController.updateClass);
  app.delete('/:username/teacher/classes/:id', teacherController.deleteClass);
  app.get('/:username/teacher/classes/:id', teacherController.getClass);

  //Users:
  app.post('/signup', userController.createUser);
  app.post('/login', userController.login);
  app.post('/:username', userController.updateUser);
  app.get('/:username', userController.getUser);
  
};
