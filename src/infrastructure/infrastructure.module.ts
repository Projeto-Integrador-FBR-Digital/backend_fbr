import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Infrastructure } from "./entities/infrastruture.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Infrastructure])],
    providers: [],
    controllers: [],
    exports: [TypeOrmModule]
})
export class InfrastructureModule {}