import { Home } from "./Component/Home"
import {Header} from './Component/Header/Header'
import './App.scss';
import{Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/'element={<Home/>}/>
    </Routes>
    </>
   
  );
}

export default App;
