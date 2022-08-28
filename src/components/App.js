import '../styles/App.scss';
import errorImage from '../images/defaultImg.jpg';
// api
import hpData from '../services/hpData';
import localStorage from '../services/localStorage';
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
import { useParams } from 'react-router-dom';




function App() {

  const [dataPj, setDataPj] = useState([]);
  const [userSearch, setUserSearch] = useState({
    name: '',
    species: '',
  });
  const [searchName, setSearchName] = useState(localStorage.get('filterName') || '');
  const [selectHouse, setSelecHouse] = useState('Gryffindor');




  const drawHtml = dataPj

    .filter((searchPj) => {
      return searchPj.name.toLowerCase().includes(searchName.toLowerCase())

    })
    .filter((searchPj) => {
      if (selectHouse === '') {
        return true;
      }
      return searchPj.house === selectHouse;
    })
    .map((pj, index) => {
      const notImage = (image) => {
        return image === '' ? errorImage : pj.picture
      };
      return <li key={index}>
        <img
          className="card__img"
          src={notImage(pj.picture)}
          alt={`Foto de ${pj.name}`}
          title={`Foto de ${pj.name}`}></img>
        <h4 className="card__title">{pj.name}</h4>
        <p className="card__description">{`${pj.species}/ ${pj.gender}`}</p>
      </li>
    });

  useEffect(() => {
    localStorage.set('filterName', searchName);
  }, [searchName]);

  // filtros
  const handleSearchName = (value) => {
    setSearchName(value)
  };
  const handleSearchSelect = (ev) => {
    setSelecHouse(ev.target.value)
  }

  useEffect(() => {
    hpData().then((dataFromHp) => {
      setDataPj(dataFromHp);
    })
  }, []);


  return (
    <div>
      <Routes>
        <>
          <Route path='/' element={<><Header />< Structure dataPj={dataPj} handleSearchName={handleSearchName} searchName={searchName} drawHtml={drawHtml} handleSearchSelect={handleSearchSelect} />  </>}></Route>
          <Route path='/CharacterDetail/:CharacterId' element={<Detail dataPj={dataPj} drawHtml={drawHtml} />}></Route>
        </>
      </Routes>

    </div >

  );
}

export default App;