import '../styles/App.scss';
// api
import hpData from '../services/hpData';
// componentes
import Structure from './Structure';
import PjItem from '../components/PjItem';
import CharacterList from '../components/CharacterList';
import Header from '../components/Header';
import Detail from './CharacterDetail';
// hooks
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useLocation, matchPath } from 'react-router';




function App() {

  const [dataPj, setDataPj] = useState([]);

  const { pathname } = useLocation();
  const routeData = matchPath('CharacterDetail/:CharacterId', pathname);
  const CharacterId = routeData !== null ? routeData.params.CharacterId : '';
  console.log(routeData);


  useEffect(() => {
    hpData().then((dataFromHp) => {
      setDataPj(dataFromHp);
    })
  }, []);

  return (
    <div>
      <Routes>
        <>
          <Route path='/' element={<><Header />< Structure dataPj={dataPj} /> </>}></Route>
          <Route path='/CharacterDetail/:CharacterId' element={<Detail dataPj={dataPj} CharacterId={CharacterId} />}></Route>
        </>
      </Routes>

    </div >

  );
}

export default App;