import * as React from "react";
import { HelloComponent } from "./components/hello/hello";
import { NameEditComponent } from "./components/edit/nameEdit";

export const App = () => {
  const [name, setName] = React.useState("default UserName");
  const [editingName,setEditingName] =React.useState("default UserName");

  const loadUserName=()=>{
    setTimeout(()=>{
      setName("name from async call");
      setEditingName("name from async call");
    },500);
  };
  React.useEffect(()=>{
    loadUserName();
  },[]);
  const setUsernameState=()=>{
    setName(editingName);
  }
  return (
    <>
      <HelloComponent userName={name} />
      <NameEditComponent 
      initialUserName={name} 
      onNameUpdated={setUsernameState} 
      editingName={editingName}
      onEditingNameUpdated={setEditingName}
      />
    </>
  );
};
