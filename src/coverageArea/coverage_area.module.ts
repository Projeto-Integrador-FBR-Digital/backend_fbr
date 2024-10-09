import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoverageArea } from "./entities/coverage_area.entity";
import { CoverageAreaService } from "./services/coverage_area.service";
import { CoverageAreaController } from "./controllers/coverage_area.controller";
import { OfferingModule } from "../offering/offering.module";
import { OfferingService } from "../offering/services/offering.service";
import { ProviderModule } from "../provider/provider.module";
import { ProviderService } from "../provider/services/provider.service";

@Module({
    imports: [TypeOrmModule.forFeature([CoverageArea]), OfferingModule, ProviderModule],
    providers: [CoverageAreaService, OfferingService, ProviderService],
    controllers: [CoverageAreaController],
    exports: [TypeOrmModule]
})
export class CoverageAreaModule{}