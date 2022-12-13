import './App.css';
import HomePage from './pages/HomePage';
import ListBeers from './pages/ListBeersPage';
import SingleBeer from './pages/SingleBeerPage';
import RandomBeer from './pages/RandomBeerPage';
import NewBeer from './pages/NewBeerPage';
import { Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/beers' element={<ListBeers />} />
      <Route path='/beers/:beerId' element={<SingleBeer />} />
      <Route path='/randombeer' element={<RandomBeer />} />
      <Route path='/newbeer' element={<NewBeer />} />
    </Routes>
      
    </div>
  );
}

export default App;