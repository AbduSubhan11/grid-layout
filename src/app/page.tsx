export default function Home() {
  return (
    <div className="grid grid-cols-10 bg-[#FCEECB] p-10 h-screen gap-5">
      <div className="bg-[#70D9D2] col-span-2 flex items-center justify-center">
        AG1
      </div>

      <div className="bg-[#FBE7B2] col-span-6 grid text-center ">
        AG2
        <div className="grid grid-cols-6 gap-4 ">
          <div className="bg-[#EFA09C]  flex items-center justify-center col-span-3">
            AG4
          </div>
          <div className="bg-[#EFA09C] flex items-center justify-center col-span-3">
            AG5
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4 ">
          <div className="bg-[#F39770] col-span-2 row-span-1 flex items-center justify-center">
            AG6
          </div>
          <div className="bg-[#F9D77E] grid col-span-4 text-center ">
            AG7
            <div className="grid grid-cols-2 gap-10 ">
              <div className="bg-[#EFA09C] row-span-3 flex items-center justify-center ">
                AG8
              </div>
              <div className="bg-[#EFA09C] row-span-3 flex items-center justify-center ">
                AG9
              </div>
            </div>
            <div className="bg-[#EBA1C4] row-span-3 flex items-center justify-center ">
              AG10
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#70D9D2] col-span-2 flex items-center justify-center">
        AG3
      </div>
    </div>
  );
}
