import studentModels from '../models/studentModels.js'

const newStudent = new Student({
  name: 'John Doe',
  email: 'johndoe@example.com',
  password: 'password123'
});

newStudent.save()
  .then(() => console.log('Student created'))
  .catch((err) => console.log(err));

Student.find()
  .then((students) => console.log(students))
  .catch((err) => console.log(err));

Student.findOneAndUpdate({ name: 'John Doe' }, { name: 'Jane Doe' })
  .then(() => console.log('Student updated'))
  .catch((err) => console.log(err));

Student.deleteOne({ name: 'Jane Doe' })
  .then(() => console.log('Student deleted'))
  .catch((err) => console.log(err));