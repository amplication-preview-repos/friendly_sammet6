import * as graphql from "@nestjs/graphql";
import { MapSettingsResolverBase } from "./base/mapSettings.resolver.base";
import { MapSettings } from "./base/MapSettings";
import { MapSettingsService } from "./mapSettings.service";

@graphql.Resolver(() => MapSettings)
export class MapSettingsResolver extends MapSettingsResolverBase {
  constructor(protected readonly service: MapSettingsService) {
    super(service);
  }
}
