import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteLocationsListRelationFilter } from "../favoriteLocations/FavoriteLocationsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type LocationWhereInput = {
  description?: StringNullableFilter;
  favoriteLocationsItems?: FavoriteLocationsListRelationFilter;
  id?: StringFilter;
  latitude?: FloatNullableFilter;
  longitude?: FloatNullableFilter;
  name?: StringNullableFilter;
};
