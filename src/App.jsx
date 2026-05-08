import { Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import DayPage from './pages/DayPage.jsx';

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/days/:slug" element={<DayPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
