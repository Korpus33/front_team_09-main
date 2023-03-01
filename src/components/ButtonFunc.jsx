import React from 'react';
import { PrimeryBtn } from '../layout/Header/Header.styled';


function Button(props) {
  return (
    <PrimeryBtn onClick={props.onClick} className={props.class}>
      {props.children}
    </PrimeryBtn>
  );
}

export default Button;