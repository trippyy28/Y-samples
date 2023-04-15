import samplePacks from "../data";
import SamplePack from "./SamplePack";
import Image from "next/image";

const Store: React.FC = () => {
  const data: SamplePack[] = samplePacks;
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
          <h3 className="mt-2 text-black text-center">{samplePack.name}</h3>
          <h3 className="mt-2 text-black text-center">{samplePack.price}$</h3>
        </div>
      ))}
    </div>
  );
};

export default Store;
