import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { Provider } from "./entities/provider.entity";
import { ProviderService } from "./services/provider.service";
import { ProvidersController } from "./controllers/provider.controller";

@Module({
    imports:[TypeOrmModule.forFeature([Provider])],
    providers: [ProviderService],
    controllers: [ProvidersController],
    exports: [TypeOrmModule]

})
export class ProviderModule {}