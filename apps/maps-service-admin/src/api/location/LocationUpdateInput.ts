import { FavoriteLocationsUpdateManyWithoutLocationsInput } from "./FavoriteLocationsUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  description?: string | null;
  favoriteLocationsItems?: FavoriteLocationsUpdateManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
