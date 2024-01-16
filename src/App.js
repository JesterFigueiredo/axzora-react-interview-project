import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/homePage';
import MapPage from './pages/maps';
import Footer from './components/footer';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>
    },
    {
      path:'/map',
      element:<MapPage/>
    }
  ]);
  
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
