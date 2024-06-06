import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const MapSettingsList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MapSettingsItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="defaultLocation" source="defaultLocation" />
        <TextField label="ID" source="id" />
        <TextField label="mapType" source="mapType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zoomLevel" source="zoomLevel" />
      </Datagrid>
    </List>
  );
};
