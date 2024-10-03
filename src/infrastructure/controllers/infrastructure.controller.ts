import { Controller, Get, HttpCode, HttpStatus, Param, ParseIntPipe } from "@nestjs/common";
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

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Infrastructure> {
        return this.infrastructureService.findById(id)
    }

}