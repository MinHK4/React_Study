import React, { createContext } from 'react';

export const EquipContext = createContext();

export const EquipProvider = (props) => {
  return (
    <EquipContext.Provider value={props.value}>
      {props.children}
    </EquipContext.Provider>
  )
}