export default function GridPage() {
  return (
    <div className="">
      <h1 className="text-center text-[24px] p-10 bg-blue-500">Grid</h1>

      {/* //? parent */}
      <section className="p-5 bg-yellow-300 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 sm:gap-10">
        {/* //! children */}
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
      </section>
    </div>
  );
}
