import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Props from "./components/Props/Props";
import Body from "./components/Body";
import User from "./components/ConditionalRendering/User";
import MapReducer from "./components/MapAndReduce/MapReducer";
import UseRefExample from "./components/useRef/useRefExmaple";
import Memo from "./components/useMemo/Memo";
import UseRef from "./components/useRef/UseRef";
import CallBackFn from "./components/useCallBack/CallBackFn";
import JsonUser from "./components/useEffect/JsonUser";
import MouseFollows from "./components/MouseTrackCircle/MouseFollows";
import Login from "./components/Authentication/Login";
import AuthProvider from "./components/Authentication/AuthProvider";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";

const JsonDummy = lazy(() => import("./components/useEffect/JsonDummy"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/mouse", element: <MouseFollows /> },
          {
            path: "/props",
            element: <Props />,
          },

          {
            path: "/user",
            element: <User />,
          },
          {
            path: "/maprender",
            element: <MapReducer />,
          },
          {
            path: "/useref",
            element: (
              <>
                <UseRefExample />
                <UseRef />
              </>
            ),
          },
          {
            path: "/memo",
            element: <Memo />,
          },
          {
            path: "/callback",
            element: <CallBackFn />,
          },
          {
            path: "/jsondummy",
            element: (
              <Suspense fallback={<h1>Loading...</h1>}>
                {" "}
                <JsonDummy />{" "}
              </Suspense>
            ),
          },
          {
            path: "/jsonuser/:id",
            element: <JsonUser />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={appRouter} />;
    </AuthProvider>
  );
}

export default App;
