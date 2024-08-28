import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import LayoutDashboard from './Layout/LayoutDashboard';
import routes_dashboard from './routes/route_dashboard';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route element={<LayoutDashboard />} >
        {
          routes_dashboard.map((route, index) => {
            const { path, component: Component } = route;
            return (
              <Route
                key={index}
                path={path}
                element={<Component />}
              />
            );
          })
        }
      </Route>
    </Routes>
  );
}

export default App;
