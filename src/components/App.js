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
import CardDetail from './CardDetail';
// hooks
import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router';
import { useParams } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';




function App() {

  const [dataPj, setDataPj] = useState([]);
  const [userSearch, setUserSearch] = useState({
    name: '',
    species: '',
  });
  const [searchName, setSearchName] = useState(localStorage.get('filterName') || '');
  const [selectHouse, setSelecHouse] = useState('Gryffindor');


  const { pathname } = useLocation();
  const dataPath = matchPath('/character/:characterId', pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataPj.find((pj) => {
    return pj.id === characterId;
  });

  const drawHtml = dataPj

    .filter((searchPj) => {
      if (searchPj.name.toLowerCase() === null) {
        return (<main><p>No coincidence</p></main>)
      }
      else {
        return searchPj.name.toLowerCase().includes(searchName.toLowerCase())
      }
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
      return <li key={index} className='card-li'>
        <Link to={`/character/${pj.id}`}>
          <img
            className="card__img"
            src={notImage(pj.picture)}
            alt={`Foto de ${pj.name}`}
            title={`Foto de ${pj.name}`}></img>
          <h4 className="card__title">{pj.name}</h4>
          <p className="card__description">{`${pj.species}/ ${pj.gender}`}</p>
        </Link>
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
          <Route path='/character/:characterId' element={<CardDetail dataPj={dataPj} drawHtml={drawHtml} characterFound={characterFound} />}></Route>
        </>
      </Routes>

    </div >

  );
}

export default App;