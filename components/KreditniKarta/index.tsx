import React, { useEffect, useRef, useState } from "react";

export const KreditniKarta : React.FC = () => {


    const cardInputRef1 = useRef<HTMLInputElement>(null!);
    const cardInputRef2 = useRef<HTMLInputElement>(null!);
    const cardInputRef3 = useRef<HTMLInputElement>(null!);
    const cardInputRef4 = useRef<HTMLInputElement>(null!);

    useEffect(() => {
      cardInputRef1.current.focus();
    }, []);

    const onChange = () => {
      if (cardInputRef1.current?.value?.length === 4) {
        cardInputRef2.current.focus();
      }
      if (cardInputRef2.current?.value?.length === 4) {
        cardInputRef3.current.focus();
      }
      if (cardInputRef3.current?.value?.length === 4) {
        cardInputRef4.current.focus();
      }
    }

  return (
    <>
      <input type="number" ref={cardInputRef1} onChange={onChange}/> 
      <input type="number" ref={cardInputRef2} onChange={onChange}/> 
      <input type="number" ref={cardInputRef3} onChange={onChange}/> 
      <input type="number" ref={cardInputRef4} onChange={onChange}/> 
    </>
  );
};
