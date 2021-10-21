import React, { useState } from "react";
import { useQuery } from "react-query";

import { GetResponse } from "./types";

function getUsers() {
  return fetch(
    "https://616bef1e16c3fa001717184a.mockapi.io/react-days/users"
  ).then((data) => data.json());
}

export const QueryComponent = () => {
  const { data } = useQuery<GetResponse>("getUsers", getUsers);
  const [date, setDate] = useState(Date.now());

  return (
    <div>
      <button
        onClick={() => {
          setDate(Date.now());
        }}
      >
        Rerender component
      </button>
      <br />
      {date}
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            {todo.id}. {todo.name} {todo.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};
