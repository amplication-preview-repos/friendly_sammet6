import { Module } from "@nestjs/common";
import { FavoriteLocationsModuleBase } from "./base/favoriteLocations.module.base";
import { FavoriteLocationsService } from "./favoriteLocations.service";
import { FavoriteLocationsController } from "./favoriteLocations.controller";
import { FavoriteLocationsResolver } from "./favoriteLocations.resolver";

@Module({
  imports: [FavoriteLocationsModuleBase],
  controllers: [FavoriteLocationsController],
  providers: [FavoriteLocationsService, FavoriteLocationsResolver],
  exports: [FavoriteLocationsService],
})
export class FavoriteLocationsModule {}
