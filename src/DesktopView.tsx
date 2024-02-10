import Card from "./Components/Desktop/Card";
import Header from "./Components/Mobile/Header";
import Payment from "./Components/Desktop/Payment";
import Question from "./Components/Desktop/Question";
import DesktopFooter from "./Components/Desktop/DesktopFooter";

function DesktopView() {
  return (
    <div className="h-full w-full">
      <div className="w-full h-full flex flex-col">
        <Header />
        <div className="px-20">
          <div className="flex flex-row w-full ">
            <div className="w-2/3">
              <Payment />
            </div>
            <Card />
          </div>
          <div className="sm:px-16">
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
          <Question />
          <div className="sm:px-16">
            <div className="h-[1px] w-full bg-gray-300"></div>
          </div>
        </div>
        <DesktopFooter />
      </div>
    </div>
  );
}

export default DesktopView;
