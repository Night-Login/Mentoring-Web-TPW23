import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function HooksPage() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();

  // useEffect(() => {
  //   alert("counter berubah")
  // }, [counter])

  return (
    <div className="flex flex-col justify-center items-center h-[500px]">
      <h1 className="text-[40px]">counter : {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
          console.log(counter);
        }}
        className="bg-blue-500 p-3"
      >
        Tambah
      </button>
      {/* <a href="/">home</a> */}
      <button 
        className="bg-red-500 p-3"
        onClick={() => {
          router.push("/grid")
        }}
      >
        Ke halaman index</button>
    </div>
  );
}
