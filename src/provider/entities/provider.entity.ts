import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

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

}