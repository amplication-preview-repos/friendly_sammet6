import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteLocationsUpdateInput = {
  location?: LocationWhereUniqueInput | null;
  notes?: string | null;
  user?: UserWhereUniqueInput | null;
};
