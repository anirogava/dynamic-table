import {
    Datagrid,
    List,
    TextField,
    Show,
    SimpleShowLayout,
    DeleteButton,
} from "react-admin";

export const UserList = () => {
    return  <List>
        <Datagrid rowClick="show">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
        </Datagrid>
    </List>
}
export const UserShow = () => {
    return  <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <TextField source="email" />
            <TextField label="street" source="address.street" />
            <TextField label="city" source="address.city" />
            <TextField label="phone" source="phone" />
            <DeleteButton/>
        </SimpleShowLayout>
    </Show>
}

