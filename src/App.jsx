// frontend/src/App.jsx
import { LanguageProvider } from './context/LanguageContext';
import SiteHeader from './components/layout/SiteHeader';
import SiteFooter from './components/layout/SiteFooter';
import AppRoutes from './routes/Approutes';
import ScrollToTop from './components/shared/ScrollToTop'; 

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop /> 
      <SiteHeader />
      <main id="main">
        <AppRoutes />
      </main>
      <SiteFooter />
    </LanguageProvider>
  );
}