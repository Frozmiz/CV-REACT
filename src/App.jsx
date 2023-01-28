import './App.scss';
import Curriculum from "./components/Curriculum/Curriculum";
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import {alexDB} from "./alexDB/alexDB";


const {hero, portfolio, curriculum} = alexDB;

function App() {
  return (
    <div className='App'>
      <Hero hero={hero}/>
      <Curriculum curriculum={curriculum}/>
      <Portfolio portfolio={portfolio}/>
    </div>
  );
}

export default App;




  
