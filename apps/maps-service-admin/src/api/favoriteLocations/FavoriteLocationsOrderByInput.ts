import { SortOrder } from "../../util/SortOrder";

export type FavoriteLocationsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
