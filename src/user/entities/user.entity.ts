import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Provider } from "../../provider/entities/provider.entity"
import { ApiProperty } from "@nestjs/swagger"


@Entity({name: "tb_users"})
export class User {

    @ApiProperty() 
    @PrimaryGeneratedColumn() 
    public id: number

    @ApiProperty() 
    @IsNotEmpty()
    @Column({length: 255, nullable: false}) 
    public nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"})
    public usuario: string
    
    @ApiProperty() 
    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    public senha: string
    
    @ApiProperty() 
    @Column({length: 5000 }) 
    public foto: string

    @ApiProperty()
    @OneToMany(() => Provider, (provider) => provider.user)
    provider: Provider[]

}