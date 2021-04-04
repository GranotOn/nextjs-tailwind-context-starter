import { useNavigation } from "@context/navigationContext";

export default function Profile() {
  const { secondaryTab, changeSecondaryTab, tab } = useNavigation();

  if (tab?.name !== "Profile") return;
  return (
    <div>
      <h1>Profile Tab</h1>
      {secondaryTab && <secondaryTab.component />}
    </div>
  );
}
