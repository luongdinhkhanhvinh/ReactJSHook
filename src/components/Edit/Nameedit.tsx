import React from 'react';
import {IProps} from './types';
export const NameEdit=(props:IProps)=>{
    return(
        <>
        <label> Update now:</label>
        <input value={props.userName} onChange={props.onChange}></input>
        </>
    );
}