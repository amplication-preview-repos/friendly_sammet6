import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MapSettingsWhereInput = {
  defaultLocation?: StringNullableFilter;
  id?: StringFilter;
  mapType?: "Option1";
  zoomLevel?: IntNullableFilter;
};
