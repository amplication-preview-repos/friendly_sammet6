import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FavoriteLocationsCreateInput = {
  location?: LocationWhereUniqueInput | null;
  notes?: string | null;
  user?: UserWhereUniqueInput | null;
};
