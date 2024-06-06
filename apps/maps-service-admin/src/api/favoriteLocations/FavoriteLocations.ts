import { Location } from "../location/Location";
import { User } from "../user/User";

export type FavoriteLocations = {
  createdAt: Date;
  id: string;
  location?: Location | null;
  notes: string | null;
  updatedAt: Date;
  user?: User | null;
};
