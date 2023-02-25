import Header from '../components/Header';
import Footer from '../components/Footer';
import Notifications from '../components/Notifications';

function MainLayout ({ children }) {
  return (
    <>
      <Header />
      <Notifications />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
