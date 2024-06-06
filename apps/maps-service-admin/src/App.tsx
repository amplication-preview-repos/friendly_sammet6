import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LocationList } from "./location/LocationList";
import { LocationCreate } from "./location/LocationCreate";
import { LocationEdit } from "./location/LocationEdit";
import { LocationShow } from "./location/LocationShow";
import { MapSettingsList } from "./mapSettings/MapSettingsList";
import { MapSettingsCreate } from "./mapSettings/MapSettingsCreate";
import { MapSettingsEdit } from "./mapSettings/MapSettingsEdit";
import { MapSettingsShow } from "./mapSettings/MapSettingsShow";
import { FavoriteLocationsList } from "./favoriteLocations/FavoriteLocationsList";
import { FavoriteLocationsCreate } from "./favoriteLocations/FavoriteLocationsCreate";
import { FavoriteLocationsEdit } from "./favoriteLocations/FavoriteLocationsEdit";
import { FavoriteLocationsShow } from "./favoriteLocations/FavoriteLocationsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MapsService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Location"
          list={LocationList}
          edit={LocationEdit}
          create={LocationCreate}
          show={LocationShow}
        />
        <Resource
          name="MapSettings"
          list={MapSettingsList}
          edit={MapSettingsEdit}
          create={MapSettingsCreate}
          show={MapSettingsShow}
        />
        <Resource
          name="FavoriteLocations"
          list={FavoriteLocationsList}
          edit={FavoriteLocationsEdit}
          create={FavoriteLocationsCreate}
          show={FavoriteLocationsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
