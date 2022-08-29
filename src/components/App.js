import '../styles/App.scss';
import errorImage from '../images/defaultImg.jpg';
// api
import hpData from '../services/hpData';
import localStorage from '../services/localStorage';
// componentes
import Structure from './Filters';
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
    return pj.id === parseInt(characterId);
  });

  const filtersFunction = dataPj

    .filter((searchPj) => {
      return searchPj.name.toLowerCase().includes(searchName.toLowerCase())
    })

    .filter((searchPj) => {
      if (selectHouse === '') {
        return true;
      }
      return selectHouse === searchPj.house;
    });

  const handleReset = (ev) => {
    ev.preventDefault();
    handleSearchName('');
    handleSearchSelect('Gryffindor');


  }
  useEffect(() => {
    localStorage.set('filterName', searchName);
  }, [searchName]);

  // filtros
  const handleSearchName = (value) => {
    setSearchName(value)

  };
  const handleSearchSelect = (value) => {
    setSelecHouse(value)
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
          <Route path='/' element={<><Header />< Structure dataPj={filtersFunction} handleSearchName={handleSearchName} searchName={searchName} handleSearchSelect={handleSearchSelect} characterFound={characterFound} selectHouse={selectHouse} handleReset={handleReset} />  </>}></Route>
          <Route path='/character/:characterId' element={<><Header /><CardDetail dataPj={dataPj} filtersFunction={filtersFunction} characterFound={characterFound} /></>}></Route>
        </>
      </Routes>

    </div >

  );
}

export default App;