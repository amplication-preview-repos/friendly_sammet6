import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteLocationsWhereInput = {
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  notes?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
