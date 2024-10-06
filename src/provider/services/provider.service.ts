import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Provider } from "../entities/provider.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class ProviderService {
    constructor(
        @InjectRepository(Provider)
        private providerRepository: Repository<Provider>
    ) { }

    async findAll(): Promise<Provider[]> {
        return await this.providerRepository.find({
            relations: {
                offering: true,
                user: true
            }
        });
    }

    async findById(id: number): Promise<Provider> {

        let tema = await this.providerRepository.findOne({
            where: {
                id
            },
            relations: {
                offering: true,
                user: true
            }
        });

        if (!tema)
            throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

        return tema;
    }

    async findByName(corporate_name: string): Promise<Provider[]> {
        return await this.providerRepository.find({
            where: {
                corporate_name: ILike(`%${corporate_name}%`)
            },
            relations: {
                offering: true,
                user: true
            }
        })
    }

    async create(provider: Provider): Promise<Provider> {
        return await this.providerRepository.save(provider);
    }

    async update(provider: Provider): Promise<Provider> {

        let findProvider = await this.findById(provider.id);

        if (!findProvider || !provider.id)
            throw new HttpException('Provedor não encontrado!', HttpStatus.NOT_FOUND);

        return await this.providerRepository.save(provider);
    }

    async delete(id: number): Promise<DeleteResult> {

        let findProvider = await this.findById(id);

        if (!findProvider)
            throw new HttpException('Provedor não encontrado!', HttpStatus.NOT_FOUND);

        return await this.providerRepository.delete(id);

    }

}