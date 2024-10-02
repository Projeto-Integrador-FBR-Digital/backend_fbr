import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CoverageArea } from '../../coverageArea/entities/coverage_area.entity';

@Entity({ name: 'tb_offering' })
export class Offering {
    
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipoPlano: string;

  @IsNotEmpty()
  @Column({nullable: false})
  velocidade: number; // Velocidade em MB/GB

  @IsNotEmpty()
  @Column({ length: 50, nullable: false })
  sla: string; // SLA do plano

  @IsNotEmpty()
  @Column({nullable: false})
  preco: number;

  @IsNotEmpty()
  @Column({ type: 'float', default: 0 })
  ranking: number; // Campo para armazenar o ranking

  @OneToMany(() => CoverageArea, (coverageArea) => coverageArea.offering)
  coverageArea: CoverageArea[]
}
