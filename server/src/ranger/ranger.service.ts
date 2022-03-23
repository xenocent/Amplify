import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { RangerServiceBase } from "./base/ranger.service.base";

@Injectable()
export class RangerService extends RangerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
