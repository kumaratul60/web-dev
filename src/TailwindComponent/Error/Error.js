import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log({ err });
  return (
    <div>
      <h1>Oops... Something went wrong</h1>
      <h1> {`${err?.status ?? "check again "}`}</h1>
      <p> {err?.error?.message ??"🤺"}:{err?.data}</p>
    </div>
  );
};

export default Error;
