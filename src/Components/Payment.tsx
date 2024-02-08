function Payment() {
  return (
    <div className="mt-10 flex flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold ">Select your mode of payment</h1>
        <p className="text-base text-gray-400">
          Payments with Tickete are secure and encrypted.
        </p>
      </div>
      
      <div className="mt-5 h-[1px] w-full bg-gray-300"></div>
    </div>
  );
}

export default Payment;
