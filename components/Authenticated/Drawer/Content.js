import { useNavigation } from "@context/navigationContext";

export default function Content() {
  const {
    map,
    tab,
    secondaryTab,
    changeTab,
    changeSecondaryTab,
  } = useNavigation();

  const parentTabStyle = (name) => {
    if (name === tab?.name) {
      return `text-2xl text-primary font-semibold focus:outline-none focus:border-none`;
    }

    return `text-2xl cursor-pointer text-gray-500 hover:text-black focus:outline-none focus:border-none`;
  };

  const childTabStyle = (name) => {
    if (name === secondaryTab?.name) {
      return `text-lg text-black font-semibold focus:outline-none focus:border-none`;
    }

    return `text-lg cursor-pointer text-gray-500 hover:text-black font-normal focus:outline-none focus:border-none`;
  };

  const handleTabSwitch = (entry) => {
    const result = changeTab(entry?.name);

    if (!result) {
      console.warn("Can't change tab to", entry);
    }
  };

  const handleSecondaryTabSwitch = (entry, childTab) => {
    handleTabSwitch(entry);

    const result = changeSecondaryTab(childTab);

    if (!result) {
      console.warn("Can't change secondary tab to", childTab);
    }
  };

  return (
    <ul className="flex flex-col gap-y-4">
      {map?.map((entry, index) => (
        <li
          tabIndex={0}
          role="tab"
          key={`drawer-tab-${index}`}
          className={parentTabStyle(entry.name)}
          onClick={() => handleTabSwitch(entry)}
          onKeyPress={() => handleTabSwitch(entry)}
        >
          {entry.name}
          <ul className="list-disc list-inside">
            {entry?.tabs.map((childTab, idx) => (
              <li
                tabIndex={0}
                role="tab"
                key={`${entry.name}-tab-${idx}`}
                className={childTabStyle(childTab?.name)}
                onClick={() => handleSecondaryTabSwitch(entry, childTab?.name)}
                onKeyPress={() =>
                  handleSecondaryTabSwitch(entry, childTab?.name)
                }
              >
                {childTab?.name}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
