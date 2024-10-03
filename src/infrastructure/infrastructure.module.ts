import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Infrastructure } from "./entities/infrastruture.entity";
import { InfrastructureService } from "./services/infrastructure.service";
import { InfrastructureController } from "./controllers/infrastructure.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Infrastructure])],
    providers: [InfrastructureService],
    controllers: [InfrastructureController],
    exports: [TypeOrmModule]
})
export class InfrastructureModule {}