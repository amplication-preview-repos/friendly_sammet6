/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FavoriteLocations } from "./FavoriteLocations";
import { FavoriteLocationsCountArgs } from "./FavoriteLocationsCountArgs";
import { FavoriteLocationsFindManyArgs } from "./FavoriteLocationsFindManyArgs";
import { FavoriteLocationsFindUniqueArgs } from "./FavoriteLocationsFindUniqueArgs";
import { CreateFavoriteLocationsArgs } from "./CreateFavoriteLocationsArgs";
import { UpdateFavoriteLocationsArgs } from "./UpdateFavoriteLocationsArgs";
import { DeleteFavoriteLocationsArgs } from "./DeleteFavoriteLocationsArgs";
import { Location } from "../../location/base/Location";
import { User } from "../../user/base/User";
import { FavoriteLocationsService } from "../favoriteLocations.service";
@graphql.Resolver(() => FavoriteLocations)
export class FavoriteLocationsResolverBase {
  constructor(protected readonly service: FavoriteLocationsService) {}

  async _favoriteLocationsItemsMeta(
    @graphql.Args() args: FavoriteLocationsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FavoriteLocations])
  async favoriteLocationsItems(
    @graphql.Args() args: FavoriteLocationsFindManyArgs
  ): Promise<FavoriteLocations[]> {
    return this.service.favoriteLocationsItems(args);
  }

  @graphql.Query(() => FavoriteLocations, { nullable: true })
  async favoriteLocations(
    @graphql.Args() args: FavoriteLocationsFindUniqueArgs
  ): Promise<FavoriteLocations | null> {
    const result = await this.service.favoriteLocations(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FavoriteLocations)
  async createFavoriteLocations(
    @graphql.Args() args: CreateFavoriteLocationsArgs
  ): Promise<FavoriteLocations> {
    return await this.service.createFavoriteLocations({
      ...args,
      data: {
        ...args.data,

        location: args.data.location
          ? {
              connect: args.data.location,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FavoriteLocations)
  async updateFavoriteLocations(
    @graphql.Args() args: UpdateFavoriteLocationsArgs
  ): Promise<FavoriteLocations | null> {
    try {
      return await this.service.updateFavoriteLocations({
        ...args,
        data: {
          ...args.data,

          location: args.data.location
            ? {
                connect: args.data.location,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FavoriteLocations)
  async deleteFavoriteLocations(
    @graphql.Args() args: DeleteFavoriteLocationsArgs
  ): Promise<FavoriteLocations | null> {
    try {
      return await this.service.deleteFavoriteLocations(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Location, {
    nullable: true,
    name: "location",
  })
  async getLocation(
    @graphql.Parent() parent: FavoriteLocations
  ): Promise<Location | null> {
    const result = await this.service.getLocation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(
    @graphql.Parent() parent: FavoriteLocations
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
