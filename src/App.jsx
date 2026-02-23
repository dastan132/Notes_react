import React from "react";
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
import JsonDummy from "./components/useEffect/JsonDummy";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/props",
        element: <Props />,
      },
      {
        path: "/",
        element: <Body />,
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
        element: <JsonDummy />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={appRouter} />;
}

export default App;
