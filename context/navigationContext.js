import { createContext, useContext, useState, useEffect } from "react";
import { MAP } from "@components/Authenticated/NavigationMap";

export const DataContext = createContext({
  map: null,
  tab: null,
  secondaryTab: null,
});

export const useNavigation = () => useContext(DataContext);

export default function DataProvider({ children }) {
  const [map, setMap] = useState(null);
  const [activeTab, setActiveTab] = useState(null);
  const [activeSecondaryTab, setActiveSecondaryTab] = useState(null);

  const changeTab = (target) => {
    const routeObject = map.find((obj) => obj.name === target);

    if (!routeObject) {
      return false;
    }

    setActiveTab(routeObject);
    return true;
  };

  const changeSecondaryTab = (target) => {
    const res = activeTab?.tabs.find((subtab) => subtab?.name === target);
    if (!res) {
      console.warn(
        `Trying to set secondary tab as ${target}, but no such secondary tab found for active tab ${activeTab?.name}`
      );
      return false;
    }

    setActiveSecondaryTab(res);
    return true;
  };

  useEffect(() => {
    setMap(MAP);
    setActiveTab(MAP[0]);
  },[]);

  useEffect(() => {
    setActiveSecondaryTab(activeTab?.tabs?.length > 0 && activeTab.tabs[0]);
  }, [activeTab]);

  return (
    <DataContext.Provider
      value={{
        map,
        tab: activeTab,
        secondaryTab: activeSecondaryTab,
        changeTab: changeTab,
        changeSecondaryTab,
        changeSecondaryTab,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
