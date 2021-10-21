import React, { useState, useEffect } from "react";

export const FetchApiMemoryLeak = () => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    new Promise<string>((resolve) => {
      return setTimeout(() => resolve("Promise resolved"), 5000);
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
