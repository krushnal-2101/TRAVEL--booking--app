import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";

import Layout from "./Routes/Layout";
import Home from "./Components/ui/Home";
import TripsData from "./Components/Pages/Trips";
import TripDetail from "./Components/Pages/TripDetail";
import Auth from "./auth/Auth";
import BookingForm from "./Components/Pages/BookingForm";
import ProtectedRoutes from "./Routes/ProtectedRoutes";
import ErrorElement from "./Components/ui/ErrorElement";
import MyBookings from "./Components/Pages/MyBookings";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorElement />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "trips",
          element: <TripsData />,
        },
        {
          path: "trips/:id",
          element: <TripDetail />,
        },
        {
          path: "auth",
          element: <Auth />,
        },
        {
          element: <ProtectedRoutes />,
          children: [
            {
              path: "trip/:id/book",
              element: <BookingForm />,
            },
            {
              path: "myBooking",
              element: <MyBookings />,
            },
          ],
        },
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
