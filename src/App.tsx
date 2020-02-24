import * as React from "react";
import { HelloComponent } from "./components/hello/hello";
import { NameEditComponent } from "./components/edit/nameEdit";

export const App = () => {
  const [name, setName] = React.useState("default UserName");

  const setUsernameState = (newName : string) => {
    setName(newName);
  };

  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent initialUserName={name} onNameUpdated={setUsernameState} />
    </>
  );
};
