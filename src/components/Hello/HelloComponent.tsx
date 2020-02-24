import React from 'react';
import { IProps } from './types';

export const HelloComponent=(props:IProps)=>{
    return (
        <div>
            <h2>Hello user:{props.userName}</h2>
        </div>
    );
}