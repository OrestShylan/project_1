import Footer from 'Layout/Footer/Footer';
import Header from 'Layout/Header/Header';
import Home from 'pages/Home/Home';
import './scss/style.scss'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
};
