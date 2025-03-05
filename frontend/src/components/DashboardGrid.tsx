import DocumentsTable from "./DocumentsTable";

const DashboardGrid = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-4 h-full p-3 gap-2">

        <div className="p-4 border border-gray-600 rounded-md flex flex-col justify-between text-white">
            <div>Documents Stored</div>
            <div >
                <div className="text-3xl" >22</div>
                <div className="text-sm text-gray-300">compared to yesterday</div>
            </div>
        </div>

        <div className="p-4 border border-gray-600 rounded-md flex flex-col justify-between text-white">
            <div>Classes Transcribed</div>
            <div >
                <div className="text-3xl" >12</div>
                <div className="text-sm text-gray-300">compared to yesterday</div>
            </div>
        </div>

        <div className="p-4 border border-gray-600 rounded-md flex flex-col justify-between text-white">
            <div>Knowledge Bases</div>
            <div >
                <div className="text-3xl" >2</div>
                <div className="text-sm text-gray-300">Total in use</div>
            </div>
        </div>

        <div className="col-span-3 flex flex-col m-3">
            <div className=" flex justify-between">
                <div className="text-white text-2xl font-bold">Quick Look</div>

                <div>
                    <button className="text-sm px-3 bg-gray-600 text-green-400 p-1 rounded-l border-r border-[#202226] font-bold">Documents</button>
                    <button className="text-sm px-3 bg-gray-600 text-white p-1 border-[#202226]">Transcriptions</button>
                    <button className="text-sm px-3 bg-gray-600 text-white p-1 rounded-r border-l border-[#202226]">Knowledge Bases</button>
                </div>
            </div>
            <DocumentsTable />
        </div>

        
        
        
    </div>
  );
};

export default DashboardGrid;
