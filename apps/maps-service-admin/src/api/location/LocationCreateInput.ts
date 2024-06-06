import { FavoriteLocationsCreateNestedManyWithoutLocationsInput } from "./FavoriteLocationsCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  description?: string | null;
  favoriteLocationsItems?: FavoriteLocationsCreateNestedManyWithoutLocationsInput;
  latitude?: number | null;
  longitude?: number | null;
  name?: string | null;
};
