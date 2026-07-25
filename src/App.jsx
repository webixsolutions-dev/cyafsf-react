import { Routes, Route } from 'react-router-dom';
import SiteHeader from './components/layout/SiteHeader.jsx';
import SiteFooter from './components/layout/SiteFooter.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Programs from './pages/Programs.jsx';
import FamilySupport from './pages/FamilySupport.jsx';
import Events from './pages/Events.jsx';
import Resources from './pages/Resources.jsx';
import GetInvolved from './pages/GetInvolved.jsx';
import News from './pages/News.jsx';
import Contact from './pages/Contact.jsx';
import Donate from './pages/Donate.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/family-support" element={<FamilySupport />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  );
}
