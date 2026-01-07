import Navbar from "./components/Navbar";
import AppRouter from "./router/AppRouter";
import PrivateRoute from "./routes/PrivateRoute";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default App;
