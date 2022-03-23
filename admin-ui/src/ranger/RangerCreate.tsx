import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RangerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Nama" source="nama" />
        <TextInput label="Rarity" source="rarity" />
      </SimpleForm>
    </Create>
  );
};
