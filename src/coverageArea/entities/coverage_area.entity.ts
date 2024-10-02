import { IsNotEmpty } from 'class-validator';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Offering } from '../../offering/entities/offering.entity';

@Entity('coverage_areas')
export class CoverageArea {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 100, nullable: false })
  providerName: string; // Nome do provedor de internet

  @IsNotEmpty()
  @Column({ type: 'text', nullable: true })
  description: string; // Descrição da área de cobertura

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255 })
  coverageFilePath: string; // Caminho do arquivo de área de cobertura (CSV/KMZ)

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  city: string; // Cidade onde o provedor oferece cobertura

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  state: string; // Estado onde o provedor oferece cobertura

  @IsNotEmpty()
  @Column({ type: 'varchar', length: 50, nullable: false })
  technology: string; // Tecnologia usada (fibra, rádio, satélite, etc.)

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: false })
  latitude: number; // Latitude da área de cobertura

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 10, scale: 7, nullable: false })
  longitude: number; // Longitude da área de cobertura

  @CreateDateColumn()
  createdAt: Date; // Data de criação do registro

  @UpdateDateColumn()
  updatedAt: Date; // Data de atualização do registro

  @ManyToOne(() => Offering, (offering) => offering.coverageArea, {
    onDelete: 'CASCADE',
  })
  offering: Offering;
}
