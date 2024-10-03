import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Infrastructure } from "../entities/infrastruture.entity";
import { Repository } from "typeorm";

@Injectable()
export class InfrastructureService {
    constructor(
        @InjectRepository(Infrastructure)
        private infrastrutureRepository: Repository<Infrastructure>
    ) {}

    async findAll(): Promise<Infrastructure[]> {
        return await this.infrastrutureRepository.find();
    }

    async findById(id: number): Promise<Infrastructure> {

        let infrastructure = await this.infrastrutureRepository.findOne({
            where: {
                id
            }
        })

        if(!infrastructure)
            throw new HttpException('Infraestrutura não encontrada!', HttpStatus.NOT_FOUND);

        return infrastructure
    }
}