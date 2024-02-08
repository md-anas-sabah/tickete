import { useEffect, useState } from "react";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export default function App() {
  const [desktopSize, setDesktopSize] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setDesktopSize(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return <div>{desktopSize ? <DesktopView /> : <MobileView />}</div>;
}
