import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RangerService } from "./ranger.service";
import { RangerControllerBase } from "./base/ranger.controller.base";

@swagger.ApiTags("rangers")
@common.Controller("rangers")
export class RangerController extends RangerControllerBase {
  constructor(
    protected readonly service: RangerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
