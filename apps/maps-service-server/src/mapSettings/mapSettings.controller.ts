import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MapSettingsService } from "./mapSettings.service";
import { MapSettingsControllerBase } from "./base/mapSettings.controller.base";

@swagger.ApiTags("mapSettings")
@common.Controller("mapSettings")
export class MapSettingsController extends MapSettingsControllerBase {
  constructor(protected readonly service: MapSettingsService) {
    super(service);
  }
}
