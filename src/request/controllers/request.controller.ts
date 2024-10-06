import { Delete, UseGuards } from '@nestjs/common';
import {
    Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { RequestService } from '../services/request.service';
import { Request } from '../entities/request.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('/request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Request[]> {
    return this.requestService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Request> {
    return this.requestService.findById(id);
  }

  @Get('status/:status')
  @HttpCode(HttpStatus.OK)
  findByStatus(@Param('status') status: string): Promise<Request[]> {
    return this.requestService.findByStatus(status);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() request: Request): Promise<Request> {
    return this.requestService.create(request)
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() request: Request): Promise<Request> {
    return this.requestService.update(request)
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe)id: number){
    return this.requestService.delete(id)
  }
}
