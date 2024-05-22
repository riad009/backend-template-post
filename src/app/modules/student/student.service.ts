import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (StudentData: Student) => {
//   const result = await StudentModel.create(student); // built in mongodb

  const student = new StudentModel(StudentData)
  const result = await student.save() // built in instance method
  return result;
};

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDb,
  getSingleStudentFromDb,
};
