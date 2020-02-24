import React from 'react';

interface Props{
  userName:string;
}
export const App=(props:Props)=>(
    <h1> Hello User:{props.userName} ! </h1>
)