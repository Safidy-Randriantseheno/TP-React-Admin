import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

const PostList: React.FC = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="user.name" label="User" />
    </Datagrid>
  </List>
);

export default PostList;
