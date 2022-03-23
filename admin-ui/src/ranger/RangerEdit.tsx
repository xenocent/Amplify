import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RangerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nama" source="nama" />
        <TextInput label="Rarity" source="rarity" />
      </SimpleForm>
    </Edit>
  );
};
