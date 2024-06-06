import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MapSettingsServiceBase } from "./base/mapSettings.service.base";

@Injectable()
export class MapSettingsService extends MapSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
