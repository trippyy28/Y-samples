import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between w-full h-16 bg-[#000000]">
      <div className="flex flex-col md:flex-row justify-between items-center mx-8 w-full md:w-auto">
        <Image
          style={{ position: "relative", top: "2px" }}
          alt="logo"
          src="/YsamplesLogo.png"
          width={100}
          height={100}
        />
        <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
          Store
        </h1>
        <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
          Genres
        </h1>
        <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
          Deals
        </h1>
        <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
          About
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4 mx-8 md:w-auto">
        <h1 className="text-white flex gap-1">
          <Image alt="account" src="/userIcon.svg" width={20} height={20} />
          Account
        </h1>
        <h1 className="text-white cursor-pointer">
          <FontAwesomeIcon icon={faShoppingCart} className="mx-2" />
          Cart
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
