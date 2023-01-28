import './App.scss';
import Hero from './components/Hero/Hero';
import {alexDB} from "./alexDB/alexDB";
import Portfolio from './components/Portfolio/Portfolio';

const {hero, portfolio} = alexDB;

function App() {
  return (
    <div className='App'>
      <Hero hero={hero}/>
      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;




  
