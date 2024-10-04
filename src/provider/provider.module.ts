import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm";
import { Provider } from "./entities/provider.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Provider])],
    providers: [],
    controllers: [],
    exports: []

})
export class ProviderModule {}