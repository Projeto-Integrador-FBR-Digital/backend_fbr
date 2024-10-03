import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { InfrastructureService } from "../services/infrastructure.service";
import { Infrastructure } from "../entities/infrastruture.entity";

@Controller('/infrastructure')
export class InfrastructureController{
    constructor(private readonly infrastructureService: InfrastructureService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Infrastructure[]> {
        return this.infrastructureService.findAll();
    }

    
}