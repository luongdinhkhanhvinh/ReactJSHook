export interface Props {
    initialUserName: string;
    editingName:string;
    onNameUpdated:()=>any;
    onEditingNameUpdated:(newEditingName:string)=>any;
  }