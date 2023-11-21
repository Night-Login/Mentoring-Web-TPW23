export default function FlexPage() {
  return (
    <div className="">
      <h1 className="text-center text-[24px] p-10 bg-blue-500">Flex</h1>

      {/* //? parent */}
      <section className="p-5 bg-yellow-300 flex flex-col md:flex-row items-center justify-center gap-[200px]">
        {/* //! children */}
        <div className="w-[100px] h-[100px] bg-red-400"></div>
        <div className="w-[100px] h-[100px] bg-red-400"></div>
      </section>
    </div>
  );
}
