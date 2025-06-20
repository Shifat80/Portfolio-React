import { createBrowserRouter } from "react-router";
import Home from "../Home";
import About from "../Component/About";
import Work from "../Component/Work";
import Errorpage from "../Component/Errorpage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children:[
      {
        index:"/",
        Component:About,
      },
      {
        path:"/about",
        Component:About,
      },
      {
        path:"/work",
        Component:Work,
      },
      {
        path:'/*',
        Component:Errorpage,
      }
    ]
  },
]);

export default router;
