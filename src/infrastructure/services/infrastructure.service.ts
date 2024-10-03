import { Injectable } from "@nestjs/common";
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
}