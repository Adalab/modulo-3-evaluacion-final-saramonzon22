import '../styles/App.scss';
// api
import hpData from '../services/hpData';
// componentes
import Structure from './Structure';
import PjItem from '../components/PjItem';
import CharacterList from '../components/CharacterList';
import Header from '../components/Header';
// hooks
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';



function App() {

  const [dataPj, setDataPj] = useState([]);



  useEffect(() => {
    hpData().then((dataFromHp) => {
      setDataPj(dataFromHp);
    })
  }, []);

  return (
    <div>
      <Routes>

        <Route path='/' element={<><Header />< Structure dataPj={dataPj} /> </>}></Route>
      </Routes>
    </div >

  );
}

export default App;