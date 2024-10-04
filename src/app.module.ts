import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoverageAreaModule } from './coverageArea/coverage_area.module';
import { CoverageArea } from './coverageArea/entities/coverage_area.entity';
import { Offering } from './offering/entities/offering.entity';
import { OfferingModule } from './offering/offering.module';
import { Infrastructure } from './infrastructure/entities/infrastruture.entity';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { RequestModule } from './request/request.module';
import { Request } from './request/entities/request.entity';
import { Provider } from './provider/entities/provider.entity';
import { ProviderModule } from './provider/provider.module';


@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fbr_ptoviders',
        entities: [CoverageArea, Offering, Infrastructure, Request, Provider],
        synchronize: true,
      }),
      CoverageAreaModule,
      OfferingModule,
      InfrastructureModule,
      RequestModule,
      ProviderModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
