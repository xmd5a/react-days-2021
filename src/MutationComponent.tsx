import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "react-query";

const useInput = () => {
  const [setValue, value] = useState("");
};

function addUsers(user) {
  return axios.post(
    "https://616bef1e16c3fa001717184a.mockapi.io/react-days/users",
    user
  );
}

export const MutationComponent = () => {
  const mutation = useMutation(addUsers);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <form onSubmit={() => mutation.mutate({ name, lastName })}>
        name: <input onChange={(e) => setName(e.target.value)} value={name} />
        <br />
        surname:{" "}
        <input
          name="lastName"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <br />
        <button type="button">add</button>
      </form>
    </div>
  );
};
