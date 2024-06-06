/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FavoriteLocationsService } from "../favoriteLocations.service";
import { FavoriteLocationsCreateInput } from "./FavoriteLocationsCreateInput";
import { FavoriteLocations } from "./FavoriteLocations";
import { FavoriteLocationsFindManyArgs } from "./FavoriteLocationsFindManyArgs";
import { FavoriteLocationsWhereUniqueInput } from "./FavoriteLocationsWhereUniqueInput";
import { FavoriteLocationsUpdateInput } from "./FavoriteLocationsUpdateInput";

export class FavoriteLocationsControllerBase {
  constructor(protected readonly service: FavoriteLocationsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FavoriteLocations })
  async createFavoriteLocations(
    @common.Body() data: FavoriteLocationsCreateInput
  ): Promise<FavoriteLocations> {
    return await this.service.createFavoriteLocations({
      data: {
        ...data,

        location: data.location
          ? {
              connect: data.location,
            }
          : undefined,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        notes: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FavoriteLocations] })
  @ApiNestedQuery(FavoriteLocationsFindManyArgs)
  async favoriteLocationsItems(
    @common.Req() request: Request
  ): Promise<FavoriteLocations[]> {
    const args = plainToClass(FavoriteLocationsFindManyArgs, request.query);
    return this.service.favoriteLocationsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        notes: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FavoriteLocations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async favoriteLocations(
    @common.Param() params: FavoriteLocationsWhereUniqueInput
  ): Promise<FavoriteLocations | null> {
    const result = await this.service.favoriteLocations({
      where: params,
      select: {
        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        notes: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FavoriteLocations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFavoriteLocations(
    @common.Param() params: FavoriteLocationsWhereUniqueInput,
    @common.Body() data: FavoriteLocationsUpdateInput
  ): Promise<FavoriteLocations | null> {
    try {
      return await this.service.updateFavoriteLocations({
        where: params,
        data: {
          ...data,

          location: data.location
            ? {
                connect: data.location,
              }
            : undefined,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          location: {
            select: {
              id: true,
            },
          },

          notes: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FavoriteLocations })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFavoriteLocations(
    @common.Param() params: FavoriteLocationsWhereUniqueInput
  ): Promise<FavoriteLocations | null> {
    try {
      return await this.service.deleteFavoriteLocations({
        where: params,
        select: {
          createdAt: true,
          id: true,

          location: {
            select: {
              id: true,
            },
          },

          notes: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
