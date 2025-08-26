import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Statistic from "./pages/statistic";
import Students from "./pages/students";
import CreateStudent from "./pages/create-student";

const App = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { index: true, element: <Statistic /> },
        { path: "students", element: <Students /> },
        { path: "create-student", element: <CreateStudent /> },
      ],
    },
  ]);
};

export default memo(App);
