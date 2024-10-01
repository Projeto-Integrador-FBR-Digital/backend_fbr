import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoverageAreaModule } from './coverageArea/coverage_area.module';


@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_fbr_ptoviders',
        entities: [],
        synchronize: true,
      }),
      CoverageAreaModule
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
