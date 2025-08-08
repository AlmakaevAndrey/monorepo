import { LazyAbout } from "../pages/about/About.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../../host/src/components/App";

const routes = [
  {
    
    path: '/',
    children: [
      {
        path: 'admin/about', 
        element: <Suspense fallback={'Loading...'}><LazyAbout/></Suspense>
      },
    ],
  }
];

export const router = createBrowserRouter(routes);

export default routes;