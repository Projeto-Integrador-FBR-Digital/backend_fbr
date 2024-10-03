import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Offering } from "../entities/offering.entity";


@Injectable()
export class OfferingService {
    constructor(
        @InjectRepository(Offering)
        private offeringRepository: Repository<Offering>
    ) { }

    async findAll(): Promise<Offering[]> {
        return await this.offeringRepository.find({
            relations: {
                coverageArea: true
            }
        });
    }

    async findById(id: number): Promise<Offering> {

        let offering = await this.offeringRepository.findOne({
            where: {
                id
            },
            relations: {
                coverageArea: true
            }
        });

        if (!offering)
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

        return offering;
    }

    async findByTipoPlano(tipoPlano: string): Promise<Offering[]> {
        return await this.offeringRepository.find({
            where: {
                tipoPlano: ILike(`%${tipoPlano}%`)
            },
            relations: {
                coverageArea: true
            }
        })
    }

    async create(offering: Offering): Promise<Offering> {
        return await this.offeringRepository.save(offering);
    }

    async update(offering: Offering): Promise<Offering> {

        let findOffering = await this.findById(offering.id);

        if (!findOffering || !offering.id)
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

        return await this.offeringRepository.save(offering);
    }

    async delete(id: number): Promise<DeleteResult> {

        let findOffering = await this.findById(id);

        if (!findOffering)
            throw new HttpException('Serviço não encontrado!', HttpStatus.NOT_FOUND);

        return await this.offeringRepository.delete(id);

    }

}