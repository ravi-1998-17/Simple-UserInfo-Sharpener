// Write your code at relevant places in the code below:

import React from "react";
import Card from "../UI/Card";
import "./UsersList.css";

const UsersList = (props) => {
  let usersItem = props.users.map((list) => {
    return (
      <li key={list.id}>
        {list.name} ({list.age} years old)
      </li>
    );
  });
  return (
    <Card className="users">
      <ul>{usersItem}</ul>
    </Card>
  );
};

export default UsersList;
