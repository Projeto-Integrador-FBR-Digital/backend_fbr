import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CoverageArea } from '../../coverageArea/entities/coverage_area.entity';
import { Provider } from '../../provider/entities/provider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_offering' })
export class Offering {
  
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipoPlano: string;

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  velocidade: number; // Velocidade em MB/GB

  @ApiProperty()
  @IsNotEmpty()
  @Column({ length: 50, nullable: false })
  sla: string; // SLA do plano

  @ApiProperty()
  @IsNotEmpty()
  @Column({nullable: false})
  preco: number;

  @ApiProperty()
  @IsNotEmpty()
  @Column({ type: 'float', default: 0 })
  ranking: number; // Campo para armazenar o ranking

  @ApiProperty()
  @OneToMany(() => CoverageArea, (coverageArea) => coverageArea.offering)
  coverageArea: CoverageArea[]

  @ApiProperty({type: ()=> Provider})
  @ManyToMany(() => Provider, (provider) => provider.offering, {
    onDelete: "CASCADE"
  })
  provider: Provider

}
