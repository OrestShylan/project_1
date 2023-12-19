import Footer from 'Layout/Footer/Footer';
import Header from 'Layout/Header/Header';
import Home from 'pages/Home/Home';
import './scss/style.scss'
import About from 'pages/Home/About';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
      </main>
      <Footer />
    </>
  );
};
