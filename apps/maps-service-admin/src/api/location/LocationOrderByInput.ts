import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  longitude?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
