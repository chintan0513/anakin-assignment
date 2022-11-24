import Data from './components/Data';
import Header from './components/Header';
import Profile from './components/Profile';
import './styles/app.css';

const App = () => {
  return ( 
    <div className="app">
        <Header />
        <Profile />
    </div>
   );
}
 
export default App;