import { FavoriteLocationsUpdateManyWithoutUsersInput } from "./FavoriteLocationsUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  favoriteLocationsItems?: FavoriteLocationsUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
