import logo from "../../assets/logo.jpg";

function DesktopFooter() {
  return (
    <div className="bg-black mt-8 h-60 flex flex-col">
      <div className="flex w-2/4 items-center flex-1 sm:px-24 p-5">
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="mt-5 h-[1px] w-full bg-gray-600"></div>
      <div className="flex gap-2 text-gray-400 p-5 sm:px-24">
        <p>Made with ❤️</p>•{" "}
        <p>Privacy policy • Terms of usage • Cancellation Policy • Sitemap</p>
      </div>
    </div>
  );
}

export default DesktopFooter;
