import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import Open_source from "./pages/OpenSource/Open_source";
import Articles from "./pages/Articles/Articles";


const Layout = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Outlet />
        <Footer />
      </div>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/open_source',
        element: <Open_source />
      },
      {
        path: '/blog',
        element: <Articles />
      },
    ]
  },

  {
    path: '/projects',
    element: <Projects />
  },
  {
    path: '/open_source',
    element: <Open_source />
  }
]);
function App() {
  return (
      <RouterProvider router={router} />
    );
  }
  
  export default App;
  