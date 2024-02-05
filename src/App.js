import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./Component/Home";
import Main from "./Component/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectDetails from "./Component/ProjectDetails";
import ProjectDetails2 from "./Component/ProjectDetails2";
import ProjectDetails3 from "./Component/ProjectDetails3";
import Blog from "./Component/Blog";

AOS.init();
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/cellcart",
          element: <ProjectDetails></ProjectDetails>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/meditime",
          element: <ProjectDetails2></ProjectDetails2>,
        },
        {
          path: "/eacademy",
          element: <ProjectDetails3></ProjectDetails3>,
        },
      ],
    },
  ]);

  return (
    <div className="App overflow-hidden pt-20 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
