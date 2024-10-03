import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_infrastructure' })
export class Infrastructure {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  asn: string;

  @Column({ length: 100 })
  ptts: string;

  @Column({ length: 255 })
  backbone: string;
}
