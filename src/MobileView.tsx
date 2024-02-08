import Header from "./Components/Header";
import ConfirmCard from "./Components/ConfirmCard";
import FreeCancel from "./Components/FreeCancel";

function MobileView() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <ConfirmCard />
      <FreeCancel />
    </div>
  );
}

export default MobileView;
