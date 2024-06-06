import { FavoriteLocations } from "../favoriteLocations/FavoriteLocations";

export type Location = {
  createdAt: Date;
  description: string | null;
  favoriteLocationsItems?: Array<FavoriteLocations>;
  id: string;
  latitude: number | null;
  longitude: number | null;
  name: string | null;
  updatedAt: Date;
};
