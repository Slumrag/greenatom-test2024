import { createContext, PropsWithChildren } from 'react';
import { MainStore, mainStore } from './MainStore';

export const MainStoreContext = createContext<MainStore | null>(null);

export const MainStoreProvider = ({ children }: PropsWithChildren) => (
  <MainStoreContext.Provider value={mainStore}> {children} </MainStoreContext.Provider>
);
