import Header from "./Components/Mobile/Header";
import ConfirmCard from "./Components/Mobile/ConfirmCard";
import FreeCancel from "./Components/Mobile/FreeCancel";
import Details from "./Components/Mobile/Details";
import Additional from "./Components/Mobile/Additional";
import Payment from "./Components/Mobile/Payment";
import FAQs from "./Components/Mobile/FAQuestion";
import Footer from "./Components/Mobile/Footer";

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
        <FAQs />
      </div>
      <Footer />
    </div>
  );
}

export default MobileView;
