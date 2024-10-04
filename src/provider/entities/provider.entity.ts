import { IsNotEmpty } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Offering } from "../../offering/entities/offering.entity"

@Entity({name: "tb_provider"})
export class Provider {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    cnpj: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    fantasy_name: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    corporate_name: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    headquarters_adress: string

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    legal_representative_contact: string

    @OneToMany(() => Offering, (offering) => offering.provider)
    offering: Offering[]
}