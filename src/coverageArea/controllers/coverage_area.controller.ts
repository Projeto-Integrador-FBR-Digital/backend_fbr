import { CoverageArea } from '../entities/coverage_area.entity';
import { CoverageAreaService } from './../services/coverage_area.service';
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";

@Controller("/coverage_area")
export class CoverageAreaController {
    constructor (private readonly coverageAreaService: CoverageAreaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<CoverageArea[]> {
        return this.coverageAreaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<CoverageArea> {
        return this.coverageAreaService.findById(id)
    }

    @Get('/providerName/:providerName')
    @HttpCode(HttpStatus.OK)
    findByProviderName(@Param('providerName') providerName: string): Promise<CoverageArea[]> {
        return this.coverageAreaService.findByProviderName(providerName);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() coverageArea: CoverageArea): Promise<CoverageArea>{
        return this.coverageAreaService.create(coverageArea)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() coverageArea: CoverageArea): Promise<CoverageArea> {
        return this.coverageAreaService.update(coverageArea)
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number){
        return this.coverageAreaService.delete(id)
    }

}
