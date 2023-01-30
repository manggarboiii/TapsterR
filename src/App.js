import './App.css';
import Header from './comps/Header.js';
import Qrcode from './comps/Qrcode.js';
import Intro from './comps/Intro';
import Contacts from './comps/Contacts';
import Footer from './comps/Footer';

function App() {
  return (
    <div className="App">
      <div className="Allcontainer">
        <Header/>
        <Qrcode/>
        <Intro/>
        <Contacts/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
