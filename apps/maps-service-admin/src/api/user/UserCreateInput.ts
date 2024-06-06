import { FavoriteLocationsCreateNestedManyWithoutUsersInput } from "./FavoriteLocationsCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  favoriteLocationsItems?: FavoriteLocationsCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
