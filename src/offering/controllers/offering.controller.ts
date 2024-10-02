import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { OfferingService } from "../services/offering.service";
import { Offering } from "../entities/offering.entity";


@Controller("/offering")
export class OfferingController {
  constructor(private readonly offeringService: OfferingService) { }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Offering[]> {
    return this.offeringService.findAll();
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Offering> {
    return this.offeringService.findById(id);
  }

  @Get('/plano/:tipoPlano')
  @HttpCode(HttpStatus.OK)
  findBydescricao(@Param('tipoPlano') tipoPlano: string): Promise<Offering[]> {
    return this.offeringService.findByTipoPlano(tipoPlano);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() offering: Offering): Promise<Offering> {
    return this.offeringService.create(offering);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() offering: Offering): Promise<Offering> {
    return this.offeringService.update(offering);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number){
    return this.offeringService.delete(id);
  }

}