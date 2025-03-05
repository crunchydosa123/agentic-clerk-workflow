import React from 'react';
import Sidebar from '../components/Sidebar';
import DashboardGrid from '../components/DashboardGrid';

type Props = {};

const Dashboardpage = (props: Props) => {
  return (
    <div className="grid grid-cols-9 grid-rows-1 h-screen bg-[#202226]">
      <Sidebar />
      <div className="col-span-7"> {/* Make DashboardGrid take the remaining space */}
        <DashboardGrid />
      </div>
    </div>
  );
};

export default Dashboardpage;
