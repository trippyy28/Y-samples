import Link from "next/link";
import {products} from "../data/products";
import SamplePack from "./SamplePack";
import Image from "next/image";

const Store: React.FC = () => {
  const data: SamplePack[] = products;
  return (
    <div className="flex justify-center gap-8 my-36">
      {data.map((samplePack: SamplePack, index: number) => (
        <div key={samplePack.id} id={`${index}`} className="">
          <Image
            alt="product"
            src={samplePack.image}
            width={200}
            height={200}
          />
          <h3 className="mt-2 text-black text-center">{samplePack.title}</h3>
          <h3 className="mt-2 text-black text-center">{samplePack.price}$</h3>
          <Link href={`/products/${samplePack.id}`}>
            <h1 className="text-blue-500 cursor-pointer">View</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Store;
