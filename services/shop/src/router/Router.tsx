import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserCard } from "@packages/shared/src/components/UserCard";
import { LazyAbout } from "../../../admin/src/pages/about/About.lazy";
import App from "../components/App";

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/shop/main',
        element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
      },
      {
        path: '/shop/second',
        element: <Suspense fallback={'Loading...'}><div style={{color: 'red'}}>
          <h1>Second page</h1>
          <UserCard />
        </div></Suspense>
      },
    ],
  }
]

export const router = createBrowserRouter(routes);

export default routes;