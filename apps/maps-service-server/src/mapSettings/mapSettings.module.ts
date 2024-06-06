import { Module } from "@nestjs/common";
import { MapSettingsModuleBase } from "./base/mapSettings.module.base";
import { MapSettingsService } from "./mapSettings.service";
import { MapSettingsController } from "./mapSettings.controller";
import { MapSettingsResolver } from "./mapSettings.resolver";

@Module({
  imports: [MapSettingsModuleBase],
  controllers: [MapSettingsController],
  providers: [MapSettingsService, MapSettingsResolver],
  exports: [MapSettingsService],
})
export class MapSettingsModule {}
