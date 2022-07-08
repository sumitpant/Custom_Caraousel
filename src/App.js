import './App.css';
import Caraousel from './Components/Caraousel';
import { images } from './data/data'

function App() {
  return (
    <div className="App">
      <Caraousel image={images}/>

    </div>
  );
}

export default App;
