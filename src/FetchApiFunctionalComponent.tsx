import React, { useState, useEffect } from "react";
import { StatusCodes } from "http-status-codes";

export const FetchApiFunctionalComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetch("https://616bef1e16c3fa001717184a.mockapi.io/react-days/users")
      .then((response) => {
        return response.json();
      })
      .then(
        (data) => setData(data),
        (error: Error) => {
          setError(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) return <h3>Loading...</h3>;
  if (error)
    return (
      <div>
        <h3>Error!</h3>
        <pre>{error.message}</pre>
      </div>
    );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};
