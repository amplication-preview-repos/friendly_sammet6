import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const MapSettingsShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="defaultLocation" source="defaultLocation" />
        <TextField label="ID" source="id" />
        <TextField label="mapType" source="mapType" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zoomLevel" source="zoomLevel" />
      </SimpleShowLayout>
    </Show>
  );
};
