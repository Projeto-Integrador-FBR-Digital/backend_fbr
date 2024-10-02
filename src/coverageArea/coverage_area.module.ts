import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoverageArea } from "./entities/coverage_area.entity";
import { CoverageAreaService } from "./services/coverage_area.service";
import { CoverageAreaController } from "./controllers/coverage_area.controller";
import { OfferingModule } from "../offering/offering.module";
import { OfferingService } from "../offering/services/offering.service";

@Module({
    imports: [TypeOrmModule.forFeature([CoverageArea]), OfferingModule],
    providers: [CoverageAreaService, OfferingService],
    controllers: [CoverageAreaController],
    exports: [TypeOrmModule]
})
export class CoverageAreaModule{}