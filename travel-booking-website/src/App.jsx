import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routs/Layout";
import Home from "./componets/ui/Home";
import { Container, Row, Col } from "react-bootstrap";
import TripsDetail from "./componets/pages/TripsDetail";
import TripsData from "./componets/pages/Trips";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,          
      children: [ 
        {
          index:true,
          element: <Home />,
        },
        {
          path: "trips",
          element: <TripsData/>,
        },
       { path:"trips/:id",
        element:<TripsDetail/>
      }
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
