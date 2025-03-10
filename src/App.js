import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Homepage/Home';
import Programs from './pages/Programs/Programs';
import Resources from './pages/Resources/Resources';
import Business from './pages/Business/Business';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Cosmos Academy</title>
        <meta name="description" content="Welcome to Cosmos Academy" />
        <meta name="keywords" content="conference, cosmos, 2024" />
        <meta property="og:title" content="Cosmos Academy" />
        <meta property="og:description" content="Join us for Cosmos Academy!" />
        {/* <meta property="og:image" content="https://cosmosconference.org/" />
        <link rel="canonical" href="https://cosmosconference.org/" /> */}
      </Helmet>

      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/business" element={<Business />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
