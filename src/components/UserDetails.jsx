import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as api from "../usersApi";
import UserForm from "./UserForm";

const UserDetails = ({ userId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const {
    data: user,
    isLoading,
    isFetching,
  } = useQuery(["user", userId], () => api.getUser(userId), {
    enabled: Boolean(userId),
  });

  if (!userId) {
    return "Select a user.";
  }

  if (isLoading) {
    return "Loading user details...";
  }

  return (
    <div>
      {/* {isFetching && "Background refetching..."} */}

      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "CANCEL" : "EDIT"}
      </button>

      {isEditing ? (
        <UserForm user={user} setIsEditing={setIsEditing} />
      ) : (
        <div>
          {user.name}
          {user.deail}
        </div>
      )}
    </div>
  );
};

export default UserDetails;
