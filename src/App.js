import './App.css';
import Navbar from './components/Navbar';
function App() {

  const arr = [];
  for(let i = 0; i<100; i++){
    arr.push(Math.floor(Math.random()*(700-5+1)+5));
  }

  return (
    <div className="App">
      <Navbar array = {arr}/>
    </div>
  );
}

export default App;
