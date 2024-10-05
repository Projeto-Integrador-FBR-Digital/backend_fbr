import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Infrastructure } from "./entities/infrastruture.entity";
import { InfrastructureService } from "./services/infrastructure.service";
import { InfrastructureController } from "./controllers/infrastructure.controller";
import { ProviderModule } from "../provider/provider.module";
import { ProviderService } from "../provider/services/provider.service";

@Module({
    imports: [TypeOrmModule.forFeature([Infrastructure]), ProviderModule],
    providers: [InfrastructureService, ProviderService],
    controllers: [InfrastructureController],
    exports: [TypeOrmModule]
})
export class InfrastructureModule {}