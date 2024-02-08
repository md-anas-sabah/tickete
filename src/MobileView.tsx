import Header from "./Components/Header";
import ConfirmCard from "./Components/ConfirmCard";
import FreeCancel from "./Components/FreeCancel";
import Details from "./Components/Details";
import Additional from "./Components/Additional";
import Payment from "./Components/Payment";

function MobileView() {
  return (
    <div className="w-full h-full flex flex-col">
      <Header />
      <div className="px-4">
        <ConfirmCard />
        <FreeCancel />
        <Details />
        <Additional />
        <Payment />
      </div>
    </div>
  );
}

export default MobileView;
