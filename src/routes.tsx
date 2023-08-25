import Footer from "components/Footer";
import Header from "components/Header";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Menu = lazy(() => import("pages/menu"));
const CommmonPage = lazy(() => import("components/CommonPage"));
const Home = lazy(() => import("pages/Home"));
const About = lazy(() => import("pages/About"));
const NotFound = lazy(() => import("pages/NotFound"));
const Dish = lazy(() => import("pages/Dish"));
const Admin = lazy(() => import("pages/Admin"));

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Header />
        <Suspense fallback={<p>Carregando...</p>}>
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
        </Suspense>
        <Footer />
      </Router>
    </main>
  );
}
