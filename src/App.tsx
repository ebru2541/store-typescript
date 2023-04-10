
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import { Navbar } from "./components/Navbar";
import {Provider} from "react-redux"
import { store } from "./app/store";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-500 min-h-screen text-center">
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favori" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Provider>
    </div>
  );
}

export default App;
