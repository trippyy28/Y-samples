import Image from "next/image";
import Link from "next/link";
import Store from "./store";
import Account from "./account";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 md:flex-row sm:justify-center sm:w-full  h-16 bg-[#000000]">
      <div className="flex flex-1 flex-col md:flex-row items-center w-full  md:right-0 md:w-auto">
        <Link href="/">
          <Image
            style={{ position: "relative", top: "2px" }}
            alt="logo"
            src="/YsamplesLogo.png"
            width={100}
            height={100}
          />
        </Link>
        <Link href="/store">
          <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
            Store
          </h1>
        </Link>
        {/* <Link href="/geners">
          <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
            Genres
          </h1>
        </Link> */}
        <Link href="/blog">
          <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
            Blog
          </h1>
        </Link>
        <Link href="/about">
          <h1 className="text-white cursor-pointer mb-2 md:mb-0 md:ml-4">
            About
          </h1>
        </Link>
      </div>
      <div className="flex flex-2 justify-center items-center gap-4 mx-8 md:w-auto">
        <Link href="/account">
          <h1 className="text-white flex gap-1 cursor-pointer">
            <Image alt="account" src="/userIcon.svg" width={20} height={20} />
            Account
          </h1>
        </Link>
        <Link href="/cart">
          <h1 className="text-white cursor-pointer">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="mx-2 cursor-pointer"
            />
            Cart
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
