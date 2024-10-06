import { Body, Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { User } from "../entities/user.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";



@Controller("/users")
export class UserController{

    constructor(private readonly userService: UserService){ }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<User[]>{
        return this.userService.findAll();
    }

    @UseGuards(JwtAuthGuard)
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

    @UseGuards(JwtAuthGuard)
    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    async update(@Body() usuario: User): Promise<User>{
        return this.userService.update(usuario)
    }

}