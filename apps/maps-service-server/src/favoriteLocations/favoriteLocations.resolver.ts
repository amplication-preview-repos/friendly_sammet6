import * as graphql from "@nestjs/graphql";
import { FavoriteLocationsResolverBase } from "./base/favoriteLocations.resolver.base";
import { FavoriteLocations } from "./base/FavoriteLocations";
import { FavoriteLocationsService } from "./favoriteLocations.service";

@graphql.Resolver(() => FavoriteLocations)
export class FavoriteLocationsResolver extends FavoriteLocationsResolverBase {
  constructor(protected readonly service: FavoriteLocationsService) {
    super(service);
  }
}
