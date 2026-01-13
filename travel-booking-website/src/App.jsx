import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routs/Layout";
import Home from"./componets/Home";
import { Container, Row, Col } from "react-bootstrap"

const App = () => {
  const router = createBrowserRouter([
{ 
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      }
    ]

}      
  ]);

  
  return (
   <>
   <Container fluid>
      <Row>
        <Col>
          <RouterProvider router={router}> 
              
           </RouterProvider>
        </Col>
      </Row>
   </Container>
   </>
  )
}

export default App