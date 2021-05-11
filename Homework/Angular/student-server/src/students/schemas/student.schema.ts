import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'

export type StudentDocument = Student & Document

@Schema()
export class Student {
  @Prop()
  id: number

  @Prop()
  lastName: string

  @Prop()
  firstName: string

  @Prop()
  midName: string

  @Prop()
  birthDate: string

  @Prop()
  averageScore: string
}

export const StudentSchema = SchemaFactory.createForClass(Student)