import * as React from "react";
import {Props} from './types';
export const HelloComponent = (props: Props) => {
  return <h2>Hello user: {props.userName} !</h2>;
};
