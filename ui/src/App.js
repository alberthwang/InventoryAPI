import logo from './logo.svg';
import './App.css';

import {Home} from './Home';
import {Category} from './Category';
import {Item} from './Item';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">
         React Front Page
      </h3>
      <Navigation/>

      <Routes>
        <Route path='/' element={<Home/>} exact></Route>
        <Route path='/category' element={<Category/>}></Route>
        <Route path='/item' element={<Item/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
