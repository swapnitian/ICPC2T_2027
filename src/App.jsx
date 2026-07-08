import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const AboutNIT = lazy(() => import('./pages/AboutNIT'));
const Tracks = lazy(() => import('./pages/Tracks'));
const Committee = lazy(() => import('./pages/Committee'));
const KeynoteSpeakers = lazy(() => import('./pages/KeynoteSpeakers'));
const ImportantDates = lazy(() => import('./pages/ImportantDates'));
const Registration = lazy(() => import('./pages/Registration'));
const Submission = lazy(() => import('./pages/Submission'));
const Venue = lazy(() => import('./pages/Venue'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Downloads = lazy(() => import('./pages/Downloads'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-gray-500 font-medium">Loading...</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/about-nit-raipur" element={<AboutNIT />} />
              <Route path="/tracks" element={<Tracks />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/keynote-speakers" element={<KeynoteSpeakers />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/submission" element={<Submission />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
