import { useNavigation } from "@context/navigationContext";
import Drawer from "./Drawer/Drawer";
import Nav from "./Nav";

export default function Home() {
  const { tab } = useNavigation();
  return (
    <div className="flex flex-row">
      <Drawer />
      <div className="flex flex-col w-full">
        <Nav />
        {tab && <tab.component />}
      </div>
    </div>
  );
}
