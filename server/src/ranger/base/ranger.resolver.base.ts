/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateRangerArgs } from "./CreateRangerArgs";
import { UpdateRangerArgs } from "./UpdateRangerArgs";
import { DeleteRangerArgs } from "./DeleteRangerArgs";
import { RangerFindManyArgs } from "./RangerFindManyArgs";
import { RangerFindUniqueArgs } from "./RangerFindUniqueArgs";
import { Ranger } from "./Ranger";
import { RangerService } from "../ranger.service";

@graphql.Resolver(() => Ranger)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class RangerResolverBase {
  constructor(
    protected readonly service: RangerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "read",
    possession: "any",
  })
  async _rangersMeta(
    @graphql.Args() args: RangerFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Ranger])
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "read",
    possession: "any",
  })
  async rangers(
    @graphql.Args() args: RangerFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ranger[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Ranger",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Ranger, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "read",
    possession: "own",
  })
  async ranger(
    @graphql.Args() args: RangerFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ranger | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Ranger",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Ranger)
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "create",
    possession: "any",
  })
  async createRanger(
    @graphql.Args() args: CreateRangerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ranger> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Ranger",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Ranger"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Ranger)
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "update",
    possession: "any",
  })
  async updateRanger(
    @graphql.Args() args: UpdateRangerArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Ranger | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Ranger",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Ranger"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Ranger)
  @nestAccessControl.UseRoles({
    resource: "Ranger",
    action: "delete",
    possession: "any",
  })
  async deleteRanger(
    @graphql.Args() args: DeleteRangerArgs
  ): Promise<Ranger | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
