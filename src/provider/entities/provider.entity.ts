import { IsNotEmpty } from "class-validator"
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Offering } from "../../offering/entities/offering.entity"
import { Infrastructure } from "../../infrastructure/entities/infrastruture.entity"
import { Request } from "../../request/entities/request.entity"
import { User } from "../../user/entities/user.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_provider"})
export class Provider {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    cnpj: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    fantasy_name: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    corporate_name: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    headquarters_adress: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    legal_representative_contact: string

    @ApiProperty()
    @OneToMany(() => Offering, (offering) => offering.provider)
    offering: Offering[]

    @ApiProperty()
    @OneToMany(() => Infrastructure, (infrastructure) => infrastructure.provider)
    infrastructure: Infrastructure[]

    @ApiProperty()
    @OneToMany(() => Request, (request) => request.provider)
    request: Request[]
    
    @ApiProperty({type: ()=> User})
    @ManyToOne(() => User, (user) => user.provider, {
        onDelete: "CASCADE"
    })
    user: User
}