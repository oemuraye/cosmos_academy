import { Helmet } from 'react-helmet-async';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import Footer from './components/Footer/Footer';

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
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
