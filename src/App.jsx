import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
