import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RequestService } from "./services/request.service";
import { RequestController } from "./controllers/request.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Request])],
    providers: [RequestService],
    controllers: [RequestController],
    exports: [TypeOrmModule],
})

export class RequestModule {}