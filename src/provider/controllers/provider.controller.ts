import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ProviderService } from "../services/provider.service";
import { Provider } from "../entities/provider.entity";

@Controller("/providers")
export class ProvidersController {
    constructor(private readonly providerService: ProviderService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Provider[]> {
        return this.providerService.findAll();
    }

    @Get("/:id")
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Provider> {
        return this.providerService.findById(id);
    }

    @Get('/corporate_name/:corporate_name')
    @HttpCode(HttpStatus.OK)
    findByName(@Param('corporate_name') corporate_name: string): Promise<Provider[]> {
        return this.providerService.findByName(corporate_name);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() providers: Provider): Promise<Provider>{
        return this.providerService.create(providers)
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() providers: Provider): Promise<Provider>{
        return this.providerService.update(providers)
    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe)id: number){
        return this.providerService.delete(id);
    }


}