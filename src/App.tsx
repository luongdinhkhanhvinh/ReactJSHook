import * as React from "react";
import { HelloComponent } from "./components/Hello";
import { NameEdit } from "./components/Edit";

export const App = () => {
  const [name, setName] = React.useState("initialName");

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEdit userName={name} onChange={setUsernameState} />
    </>
  );
};
