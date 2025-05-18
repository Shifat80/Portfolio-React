import { createBrowserRouter } from "react-router";
import Home from "../Home";
import About from "../Component/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        index:true,
        Component:About,
      },
      {
        path:"/about",
        Component:About,
      }
    ]
  },
]);

export default router;
