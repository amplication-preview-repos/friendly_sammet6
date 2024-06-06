import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FavoriteLocationsListRelationFilter } from "../favoriteLocations/FavoriteLocationsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  favoriteLocationsItems?: FavoriteLocationsListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
