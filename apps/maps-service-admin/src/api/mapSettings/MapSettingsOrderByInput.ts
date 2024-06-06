import { SortOrder } from "../../util/SortOrder";

export type MapSettingsOrderByInput = {
  createdAt?: SortOrder;
  defaultLocation?: SortOrder;
  id?: SortOrder;
  mapType?: SortOrder;
  updatedAt?: SortOrder;
  zoomLevel?: SortOrder;
};
