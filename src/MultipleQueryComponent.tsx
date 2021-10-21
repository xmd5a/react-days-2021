import React, { useState } from "react";
import { useQuery } from "react-query";

import { QueryComponent } from "./QueryComponent";

export const MultipleQueryComponent = () => {
  const [componentKeys, addComponent] = useState([1]);

  return (
    <div>
      <button
        onClick={() => {
          addComponent((prevKeys) => [prevKeys.length + 1, ...prevKeys]);
        }}
      >
        Add component
      </button>
      {componentKeys.map((key) => (
        <QueryComponent key={key} />
      ))}
    </div>
  );
};
