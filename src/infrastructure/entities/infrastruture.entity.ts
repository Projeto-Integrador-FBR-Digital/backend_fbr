import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Provider } from '../../provider/entities/provider.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_infrastructure' })
export class Infrastructure {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column({ length: 100 })
  asn: string;

  @ApiProperty()
  @Column({ length: 100 })
  ptts: string;

  @ApiProperty()
  @Column({ length: 255 })
  backbone: string;

  @ApiProperty({type: ()=> Provider})
  @ManyToOne(() => Provider, (provider) => provider.infrastructure, {
    onDelete: 'CASCADE',
  })
  provider: Provider;
}
