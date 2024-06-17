import React, { useRef } from "react";

export const KreditniKarta : React.FC = () => {

    const cardInputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <input type="number" id="firstnumber" />
      <input type="number" id="secondnumber" />
      <input type="number" id="thirdnumber" />
      <input type="number" id="fourthnumber" />
    </>
  );
};
