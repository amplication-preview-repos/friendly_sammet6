import { FavoriteLocationsWhereInput } from "./FavoriteLocationsWhereInput";
import { FavoriteLocationsOrderByInput } from "./FavoriteLocationsOrderByInput";

export type FavoriteLocationsFindManyArgs = {
  where?: FavoriteLocationsWhereInput;
  orderBy?: Array<FavoriteLocationsOrderByInput>;
  skip?: number;
  take?: number;
};
