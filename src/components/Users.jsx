import React, { useState, useEffect } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import * as api from "../usersApi";

const Users = ({ setUserId }) => {
  const { data, isLoading, error } = useQuery(["users"], api.getUsers);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <ul>
        {data?.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => setUserId(user.id)}>View</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
