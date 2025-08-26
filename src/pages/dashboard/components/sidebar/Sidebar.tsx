import { ChartColumn, UserRoundPlus, UsersRound } from "lucide-react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[250px] h-screen overflow-auto bg-white border-r border-slate-200">
      <div className="p-4 flex items-center border-b border-slate-200 h-16 ">
        <div className="text-xl font-bold">Dashboard</div>
      </div>
      <div>
        <ul className="mt-4">
          <li>
            <NavLink
              className="py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100 sidebar__link"
             to={'/'}
            >
              <ChartColumn />
              <span>Statistic</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/students'}
              className="py-3 pl-2 mb-2 flex items-center gap-2 hover:bg-gray-100 sidebar__link"
      
            >
              <UsersRound />
              <span>Students</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/create-student'}
              className="py-3 pl-2 border-l-4 border-transparent mb-2 flex items-center gap-2 hover:bg-gray-100 sidebar__link"
         
            >
              <UserRoundPlus />
              <span>Create Student</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Sidebar);
