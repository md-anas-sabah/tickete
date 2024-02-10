import Details from "./Details";
import FreeCancel from "../Mobile/FreeCancel";
import Additional from "./Additional";
import PaymentCard from "./PaymentCard";

function Payment() {
  return (
    <div className="sm:p-16 ">
      <h1 className="text-5xl font-semibold">Confirm & pay</h1>
      <FreeCancel />
      <Details />
      <Additional />
      <PaymentCard />
    </div>
  );
}

export default Payment;
