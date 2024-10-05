import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Provider } from '../../provider/entities/provider.entity';

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

  @ManyToOne(() => Provider, (provider) => provider.infrastructure, {
    onDelete: 'CASCADE',
  })
  provider: Provider;
}
