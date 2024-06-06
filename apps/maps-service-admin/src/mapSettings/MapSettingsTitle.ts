import { MapSettings as TMapSettings } from "../api/mapSettings/MapSettings";

export const MAPSETTINGS_TITLE_FIELD = "defaultLocation";

export const MapSettingsTitle = (record: TMapSettings): string => {
  return record.defaultLocation?.toString() || String(record.id);
};
