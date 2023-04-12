import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div className="flex w-full h-16 bg-[#19092A] justify-between">
      <div className="flex justify-between items-center gap-4 mx-8">
        <Image alt="logo" src="/favicon.ico" width={45} height={45}></Image>
        <h1 className="text-white">Store</h1>
        <h1 className="text-white">Geners</h1>
        <h1 className="text-white">Deals</h1>
        <h1 className="text-white">About</h1>
      </div>
      <div className="flex justify-center items-center gap-4 mx-8">
        <h1 className="text-white flex gap-1">
          <Image
            alt="account"
            src="/userIcon.svg"
            width={20}
            height={20}
          ></Image>
          Account
        </h1>
        <h1 className="text-white">Cart</h1>
      </div>
    </div>
  );
};

export default Navbar;
