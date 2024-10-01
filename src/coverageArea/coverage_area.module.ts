import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoverageArea } from "./entities/coverage_area.entity";
import { CoverageAreaService } from "./services/coverage_area.service";
import { CoverageAreaController } from "./controllers/coverage_area.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CoverageArea])],
    providers: [CoverageAreaService],
    controllers: [CoverageAreaController],
    exports: [TypeOrmModule]
})
export class CoverageAreaModule{}