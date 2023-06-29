import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  const { data, status, statusText } = error;
  return (
    <>
      <h1>{data}</h1>
      <h2>{status + ":" + statusText}</h2>
    </>
  );
};

export default Error;
