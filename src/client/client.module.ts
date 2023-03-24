import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ClientController } from "./client.controller";
import { Client } from "./client.entity";
import { ClientService } from "./client.service";

@Module({
    imports: [TypeOrmModule.forFeature([Client])],
    providers: [ClientService],
    controllers: [ClientController]
})
export class ClientsModule { }