import React, { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./component/Navbar";
import Error from "./pages/Error";
import GamerByTag from "./pages/GamerByTag";
import Pricing from "./pages/Pricing";
import Loader from "./component/Loader";
import Home, { LoaderHomeData } from "./pages/Home";
import DetailsCard from "./pages/DetailsCard";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="error" element={<Error />} />
        <Route path="gamer" element={<GamerByTag />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path=":id" element={<DetailsCard />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
