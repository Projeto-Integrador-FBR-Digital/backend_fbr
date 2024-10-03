import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_request' })
export class Request {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  descricao: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data_criacao: Date;

  @Column({
    type: 'enum',
    enum: ['pendente', 'aceita', 'recusada', 'concluída'],
    default: 'pendente',
  })
  status: string;

  
  @Column({ type: 'varchar', length: 255 })
  solicitante_email: string;
  
  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  valor_proposto: number;
  
  //   @ManyToOne(() => CoverageArea, (area) => area.demandas, {
  //     onDelete: 'CASCADE',
  //   })
  //   area_cobertura: CoverageArea;
  
  //   @ManyToOne(() => Offering, (offering) => offering.demandas, {
  //     onDelete: 'CASCADE',
  //   })
  //   servico: Offering;
}
