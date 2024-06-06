import { FavoriteLocations } from "../favoriteLocations/FavoriteLocations";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  favoriteLocationsItems?: Array<FavoriteLocations>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
