import Header from "./Components/Header";
import ConfirmCard from "./Components/ConfirmCard";
import FreeCancel from "./Components/FreeCancel";
import Details from "./Components/Details";

function MobileView() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="px-4">
        <ConfirmCard />
        <FreeCancel />
        <Details />
      </div>
    </div>
  );
}

export default MobileView;
