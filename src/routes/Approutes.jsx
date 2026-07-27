// frontend/src/routes/Approutes.jsx
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy load all pages
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Programs = lazy(() => import('../pages/Programs'));
const FamilySupport = lazy(() => import('../pages/FamilySupport'));
const Events = lazy(() => import('../pages/Events'));
const Resources = lazy(() => import('../pages/Resources'));
const GetInvolved = lazy(() => import('../pages/GetInvolved'));
const News = lazy(() => import('../pages/News'));
const Contact = lazy(() => import('../pages/Contact'));
const Donate = lazy(() => import('../pages/Donate'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Termsconditions'));
const AccessibilityPage = lazy(() => import('../pages/Accessability'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading component
function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-teal-600 border-t-transparent"></div>
        <p className="mt-4 text-gray-600 text-lg">Loading...</p>
      </div>
    </div>
  );
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* Main Pages */}
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
        
        {/* Legal Pages */}
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/accessibility" element={<AccessibilityPage />} />
        
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}