import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";



@Controller("/users")
export class UserController{

    constructor(private readonly userService: UserService){ }

    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<User>{
        return this.userService.findById(id)
    }

    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() usuario: User): Promise<User>{
        return this.userService.create(usuario)
    }

    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: User): Promise<User>{
        return this.userService.update(usuario)
    }

}