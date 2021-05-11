import { Body,
    Controller,
    Delete,
    Get,
    Header,
    HttpCode,
    HttpStatus,
    Param,
    Post,
    Put, } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './schemas/student.schema';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {

    constructor(private studentsService: StudentsService) {}

    @Get()
    getStudents() {
        return this.studentsService.getStudents();
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Student> {
        return this.studentsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    @Header('Cache-Control', 'none')
    create(@Body() createProductDto: CreateStudentDto): Promise<Student> {
        return this.studentsService.create(createProductDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Student> {
        return this.studentsService.remove(id)
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateStudentDto, @Param('id') id: string): Promise<Student> {
        return this.studentsService.update(id, updateProductDto)
    }

}
