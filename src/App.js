import Data from './components/Data';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import './styles/app.css';

const App = () => {
  return ( 
    <div className="app">
        <Header />
        <Profile />
        <Footer />
    </div>
   );
}
 
export default App;