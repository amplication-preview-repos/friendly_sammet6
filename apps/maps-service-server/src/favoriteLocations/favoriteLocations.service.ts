import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FavoriteLocationsServiceBase } from "./base/favoriteLocations.service.base";

@Injectable()
export class FavoriteLocationsService extends FavoriteLocationsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
