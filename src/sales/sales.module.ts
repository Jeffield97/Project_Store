import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { SalesController } from "./sales.controller";
import { Sale } from "./sales.entity";
import { SalesService } from "./sales.service";

@Module({
    imports: [TypeOrmModule.forFeature([Sale])],
    providers: [SalesService],
    controllers: [SalesController]
})
export class SalesModule { }