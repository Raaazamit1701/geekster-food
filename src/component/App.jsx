import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Restorent from "./Restorents";
import Quotes from "./quotes";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
    const router= createBrowserRouter([
      {
      path:"/",
      element:
        <>
            <Header />
            <Body />
            <Footer/>
        </>
      },
      {
        path:"/Qoute",
        element: <>
         <Header/>
         <Quotes/>
         <Footer/>
        </>
  
      },
      {
        path:"/restorent",
        element:
          <>
              <Header />
              <Restorent />
              <Footer/>
          </>
        }
     
    ])
  
    return (
      <div className='app'>
        <RouterProvider router={router}/>
      </div>
    )
  }
  
  export default App;