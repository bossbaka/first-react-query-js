import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import * as api from "../usersApi";

const UserForm = ({ user, setIsEditing }) => {
  const [fields, setFields] = useState({ ...user });

  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation(api.updateUser, {
    // onMutate: (updatedUser) => {
    //   setIsEditing(false);
    // },
    onSuccess: (data) => {
      // trigger the old data to be updated
      queryClient.setQueriesData(["user", user.id], data);
      setIsEditing(false);
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);

    mutate(fields);
  };

  if (isLoading) {
    return "Saveing your changes...";
  }

  return (
    <div style={{ paddingTop: 20 }}>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            value={fields.name}
            onChange={handleChange}
            style={{ width: "100%", marginBottom: 20, height: 100 }}
          />
        </label>

        <label>
          Details:
          <textarea
            name="details"
            type="text"
            value={fields.details}
            onChange={handleChange}
            style={{ width: "100%", height: 100 }}
          />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
