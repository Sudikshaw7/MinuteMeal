import { Outlet } from "react-router-dom";
import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <NavigationBar />
      <main className="flex-grow-1 pt-5 pt-lg-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;