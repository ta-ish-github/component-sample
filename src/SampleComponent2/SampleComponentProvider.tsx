import React from 'react';
import { createContext } from 'react';
import { SampleComponent2Setting } from './SamplComponent2Setting';

export const UserContext = createContext<SampleComponent2Setting>({ url: '' });

export const SampleComponentProvider = (props: {
  setting: SampleComponent2Setting;
  children: React.ReactNode;
}) => {
  return (
    <UserContext.Provider value={props.setting}>
      {props.children}
    </UserContext.Provider>
  );
};
