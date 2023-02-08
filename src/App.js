import './App.css';
import Header from './components/Header/Header';
import Media from './components/Media/Media';
import SearchContainer from './components/SearchContainer/SearchContainer';


function App() {
  return (
    <div className="app">  
    <div className='main'>
      <Header />
      <SearchContainer/>
      <Media/>
    </div>
     
    </div>
  );
}

export default App;
