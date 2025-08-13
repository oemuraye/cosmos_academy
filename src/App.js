import { Helmet } from 'react-helmet-async';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage/Home';
import Programs from './pages/Programs/Programs';
import Resources from './pages/Resources/Resources';
import Business from './pages/Business/Business';
import About from './pages/About/About';
import Pricing from './pages/Pricing/Pricing';
import CourseContent from './pages/CourseContent';
import Community from './pages/Community';
import BlogPost from './pages/BlogPost/BlogPost';
import FaqPage from './pages/Faq/Faq';
import ScrollToTop from './utils/ScrollToTop';
import Welcome from './pages/Welcome/Welcome';
import Partner from './pages/Partner/Partner';
import Contact from './pages/Contact/Contact';
import Admin from './pages/Admin/Admin';
import ProtectedRoute from './routes/ProtectedRoute';
import Login from './pages/Admin/Login';
import logo from './assets/images/brand_logo.png';


function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/coscademy/admin');
  // const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="App">
      <Helmet>
        <title>Cosmos Academy</title>
        <meta name="description" content="Unlock the future with Cosmos Academy - Your gateway to learning and innovation" />
        <meta name="keywords" content="Cosmos Academy, online courses, innovation, learning, education, technology" />
        <meta property="og:title" content="Welcome to Cosmos Academy" />
        <meta property="og:description" content="Explore cutting-edge courses and join a community of innovators at Cosmos Academy!" />
        <meta property="og:image" content="https://cosmosacademy.org/" />
        <link rel="canonical" href="https://cosmosacademy.org/" />

        <meta property="og:url" content="https://cosmosacademy.org/" />
        <meta property="og:image" content={logo || "https://server.cosmosconference.org/images/logo_crest.png"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Welcome to Cosmos Academy" />
        <meta name="twitter:description" content="Explore cutting-edge courses and join a community of innovators at Cosmos Academy!" />
        <meta name="twitter:image" content={logo || "https://server.cosmosconference.org/images/logo_crest.png"} />
      </Helmet>

      <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
       />

      {!isAdminRoute && <Header />}

      <ScrollToTop />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/course/:courseID" element={<CourseContent/>} />
          <Route path="/community" element={<Community/>} />
          <Route path="/blog-post/:postID" element={<BlogPost/>} />
          <Route path="/faq" element={<FaqPage/>} />
          <Route path="/welcome" element={<Welcome/>} />
          <Route path="/partner" element={<Partner/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/admin-login" element={<Login />} />
          <Route path="/coscademy/admin/*" element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          } />


          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;