import { Admin, Resource} from "react-admin";
import restProvider from "ra-data-simple-rest"
import  {PostShow, PostList} from "./components/posts";
import {USerEdit, UserList, UserShow} from "./components/users";

function App() {
  return <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
          name="posts"
          list={PostList}
          show={PostShow}
      ></Resource>
      <Resource
          name="users"
          list={UserList}
          show={UserShow}
      ></Resource>
  </Admin>
}

export default App;
