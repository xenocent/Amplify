import { Module } from "@nestjs/common";
import { RangerModuleBase } from "./base/ranger.module.base";
import { RangerService } from "./ranger.service";
import { RangerController } from "./ranger.controller";
import { RangerResolver } from "./ranger.resolver";

@Module({
  imports: [RangerModuleBase],
  controllers: [RangerController],
  providers: [RangerService, RangerResolver],
  exports: [RangerService],
})
export class RangerModule {}
