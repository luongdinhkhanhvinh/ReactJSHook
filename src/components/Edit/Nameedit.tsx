import * as React from "react";
import {Props} from './types';
export const NameEditComponent = (props: Props) => {
  const [editingName, setEditingName] = React.useState(props.initialUserName);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingName(e.target.value);
  };

  const onNameSubmit = (event: any): any => {
    props.onNameUpdated(editingName);
  };

  return (
    <>
      <label>Update name:</label>
      <input value={editingName} onChange={onChange} />
      <button onClick={onNameSubmit}>Change</button>
    </>
  );
};
