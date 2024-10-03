import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from '../entities/request.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class RequestService {
  constructor(
    @InjectRepository(Request)
    private requestRepository: Repository<Request>,
  ) {}

  async findAll(): Promise<Request[]> {
    return await this.requestRepository.find();
  }

  async findById(id: number): Promise<Request> {
    let request = await this.requestRepository.findOne({
      where: {
        id,
      },
    });

    if (!request)
      throw new HttpException('Demanda não encontrada!', HttpStatus.NOT_FOUND);

    return request;
  }

  async findByStatus(status: string): Promise<Request[]> {
    return this.requestRepository.find({
      where: {
        status,
      },
    });
  }

  async create(request: Request): Promise<Request> {
    return await this.requestRepository.save(request)
  }

  async update(request: Request): Promise<Request>{
    
    let findRequest: Request = await this.findById(request.id);

    if (!findRequest || !request.id)
        throw new HttpException("Demanda não encotrada!", HttpStatus.NOT_FOUND)

    return await this.requestRepository.save(request)
  }

  async delete(id: number): Promise<DeleteResult>{

    let findRequest = await this.findById(id);

    if (!findRequest)
        throw new HttpException("Demanda não enontrada!", HttpStatus.NOT_FOUND);

    return await this.requestRepository.delete(id)
  }
}
