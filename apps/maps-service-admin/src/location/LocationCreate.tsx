import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { FavoriteLocationsTitle } from "../favoriteLocations/FavoriteLocationsTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceArrayInput
          source="favoriteLocationsItems"
          reference="FavoriteLocations"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FavoriteLocationsTitle} />
        </ReferenceArrayInput>
        <NumberInput label="latitude" source="latitude" />
        <NumberInput label="longitude" source="longitude" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
