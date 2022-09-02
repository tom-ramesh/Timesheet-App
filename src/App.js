import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TimeSheetManage from "./pages/TimeSheetManage";

const routes = [
  { key: 1, exact: true, path: "/", element: Login },
  { key: 2, exact: true, path: "/dashboard", element: Dashboard },
  { key: 3, exact: true, path: "/manage", element: TimeSheetManage },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {routes.map(({ element: Component, ...rest }) => (
            <Route element={<Component />} {...rest} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
