import {Datagrid, List, TextField, Show, SimpleShowLayout, DeleteButton, ReferenceField} from "react-admin";

export const PostList = () => {
    return  <List>
            <Datagrid rowClick="show">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users"
                >
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
            </Datagrid>
        </List>
}
export const PostShow = () => {
    return  <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users"
            >
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <DeleteButton/>
        </SimpleShowLayout>
    </Show>
}

