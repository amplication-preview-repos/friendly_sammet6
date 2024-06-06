import { MapSettingsWhereInput } from "./MapSettingsWhereInput";
import { MapSettingsOrderByInput } from "./MapSettingsOrderByInput";

export type MapSettingsFindManyArgs = {
  where?: MapSettingsWhereInput;
  orderBy?: Array<MapSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
