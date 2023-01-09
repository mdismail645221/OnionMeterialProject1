import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/Home/Home';
import { theme } from './theme/theme';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <div>Not found</div>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
])

function App() {


  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline>
        <RouterProvider router={router}></RouterProvider>
        </CssBaseline>
      </>
    </ThemeProvider>
  );
}

export default App;
