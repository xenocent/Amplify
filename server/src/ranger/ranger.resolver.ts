import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { RangerResolverBase } from "./base/ranger.resolver.base";
import { Ranger } from "./base/Ranger";
import { RangerService } from "./ranger.service";

@graphql.Resolver(() => Ranger)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RangerResolver extends RangerResolverBase {
  constructor(
    protected readonly service: RangerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
