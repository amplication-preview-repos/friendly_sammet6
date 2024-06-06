import { FavoriteLocations as TFavoriteLocations } from "../api/favoriteLocations/FavoriteLocations";

export const FAVORITELOCATIONS_TITLE_FIELD = "id";

export const FavoriteLocationsTitle = (record: TFavoriteLocations): string => {
  return record.id?.toString() || String(record.id);
};
