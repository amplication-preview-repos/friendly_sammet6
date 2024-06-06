import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { LocationTitle } from "../location/LocationTitle";
import { UserTitle } from "../user/UserTitle";

export const FavoriteLocationsEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="location.id"
          reference="Location"
          label="location"
        >
          <SelectInput optionText={LocationTitle} />
        </ReferenceInput>
        <TextInput label="notes" multiline source="notes" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
