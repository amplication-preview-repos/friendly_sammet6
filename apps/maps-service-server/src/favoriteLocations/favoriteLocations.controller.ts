import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FavoriteLocationsService } from "./favoriteLocations.service";
import { FavoriteLocationsControllerBase } from "./base/favoriteLocations.controller.base";

@swagger.ApiTags("favoriteLocations")
@common.Controller("favoriteLocations")
export class FavoriteLocationsController extends FavoriteLocationsControllerBase {
  constructor(protected readonly service: FavoriteLocationsService) {
    super(service);
  }
}
