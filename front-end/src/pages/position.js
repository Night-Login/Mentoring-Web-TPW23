export default function PositionPage() {
  return(
    <div>
      <h1 className="text-center bg-blue-400 text-[40px] p-5">Positions</h1>

      <section className="h-[500px] bg-white relative flex justify-center items-center">
        <div className="w-[100px] h-[100px] bg-red-500 rounded-full absolute transition duration-100 hover:shadow-[0_0_20px_#000]" />
        {/* <div className="w-[100px] h-[100px] bg-red-500 rounded-full absolute top-0" /> */}
      </section>
    </div>
  )
}