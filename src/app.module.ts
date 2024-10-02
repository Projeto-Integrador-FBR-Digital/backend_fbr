import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoverageAreaModule } from './coverageArea/coverage_area.module';
import { CoverageArea } from './coverageArea/entities/coverage_area.entity';
import { Offering } from './offering/entities/offering.entity';
import { OfferingModule } from './offering/offering.module';


@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fbr_ptoviders',
        entities: [CoverageArea, Offering],
        synchronize: true,
      }),
      CoverageAreaModule,
      OfferingModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
