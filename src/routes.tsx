import CommmonPage from "components/CommonPage";
import Footer from "components/Footer";
import Header from "components/Header";
import About from "pages/About";
import Admin from "pages/Admin";
import Dish from "pages/Dish";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Menu from "pages/menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CommmonPage />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="admin/:user" element={<Admin />} />
          </Route>
          <Route path="dish/:id" element={<Dish />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}
