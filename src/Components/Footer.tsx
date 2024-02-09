import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <div className="bg-black p-5 mt-8 h-80 flex flex-col">
      <div className="flex w-2/4 items-end flex-1">
        <img src={logo} alt="" className="h-10" />
      </div>
      <div className="mt-5 h-[1px] w-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-2 text-gray-400 justify-center">
        <p>Privacy policy • Terms of usage • Cancellation Policy • Sitemap</p>
        <p>Made with ❤️</p>
      </div>
    </div>
  );
}

export default Footer;
