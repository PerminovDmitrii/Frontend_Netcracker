import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Model } from 'mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student, StudentDocument } from './schemas/student.schema';

@Injectable()
export class StudentsService {
  constructor(@InjectModel(Student.name) private studentModel: Model<StudentDocument>) {
  }

  async getStudents(): Promise<Student[]> {
    return this.studentModel.find().exec()
  }

  async getById(id: string): Promise<Student> {
    return this.studentModel.findById(id)
  }

  async create(productDto: CreateStudentDto): Promise<Student> {
    const newProduct = new this.studentModel(productDto)
    return newProduct.save()
  }

  async remove(id: string): Promise<Student> {
    return this.studentModel.findByIdAndRemove(id)
  }

  async update(id: string, productDto: UpdateStudentDto): Promise<Student> {
    return this.studentModel.findByIdAndUpdate(id, productDto, {new: true})
  }
}