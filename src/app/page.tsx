// import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1 className="text-center p-2 mb-10 bg-red-500 font-bold text-4xl flex flex-col">Class 5</h1>
      <div className="container m-4 flex justify-between  md:flex-row items-center">
        <Link
          className="inline-flex items-center bg-yellow-400 text-white border-0 py-1 px-4 focus:outline-none hover:bg-orange-400 rounded text-base"
          href={"/flexvsGrid"}
        >
          {" "}
          Flex vs Grid{" "}
        </Link>
        <Link
          className="inline-flex items-center bg-yellow-400 text-white border-0 py-1 px-4 focus:outline-none hover:bg-orange-400 rounded text-base"
          href={"/Card1"}
        >
          {" "}
          Card 1{" "}
        </Link>
        <Link
          className="inline-flex items-center bg-yellow-400 text-white border-0 py-1 px-4 focus:outline-none hover:bg-orange-400 rounded text-base"
          href={"/Card2"}
        >
          {" "}
          Card 2{" "}
        </Link>
      </div>
    </div>
  );
}
