import Obr_tr from './Obr_tr';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero2 from './hero2';
import './App.css';
import Hero from './hero';
import Obrozov from './Obrozov';
import Primers from './Primers';


function App() {
  return (
    <div id='glavglav'>
      <Navbar />
      <Hero /> 
      <Hero2 />
      <Obrozov />
      <Obr_tr />
      <Primers />
    </div>
  );
}
export default App;
