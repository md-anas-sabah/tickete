import Card from "./Components/Desktop/Card";
import Header from "./Components/Mobile/Header";
import Payment from "./Components/Desktop/Payment";


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
        </div>
      </div>
    </div>
  );
}

export default DesktopView;
