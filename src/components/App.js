import '../styles/App.scss';
// api
import hpData from '../services/hpData';
import localStorage from '../services/localStorage';
// componentes
import Structure from './Filters';
import Header from '../components/Header';
import CardDetail from './CharacterCard';
// hooks
import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';


function App() {

  // variables de estado

  const [dataPj, setDataPj] = useState(localStorage.get('dataPj', []));
  const [userSearch, setUserSearch] = useState({
    name: '',
    species: '',
  });
  const [searchName, setSearchName] = useState(localStorage.get('filterName') || '');
  const [selectHouse, setSelecHouse] = useState('Gryffindor');
  const [genderSearch, setGenderSearch] = useState('');

  // obtener id de la ruta
  const { pathname } = useLocation('/character/:characterId');
  const dataPath = matchPath('/character/:characterId', pathname);

  const characterId = dataPath !== null ? dataPath.params.characterId : null;
  const characterFound = dataPj.find(pj => {
    return pj.id === parseInt(characterId);
  });

  // filtros

  const filtersFunction = dataPj
    .sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    })

    .filter((searchPj) => {
      return searchPj.name.toLowerCase().includes(searchName.toLowerCase())
    })

    .filter((searchPj) => {
      if (selectHouse === '') {
        return true;
      }
      return selectHouse === searchPj.house;
    })
    .filter((searchPj) => {
      if (genderSearch === '') {
        return true;
      }
      return genderSearch === searchPj.gender;
    });



  // reset 
  const handleReset = (ev) => {
    ev.preventDefault();
    handleSearchName('');
    handleSearchSelect('Gryffindor');

    // localStorage de filtros 
  }
  useEffect(() => {
    localStorage.set('filterName', searchName);
  }, [searchName]);

  // manejadora filtros
  const handleSearchName = (value) => {
    setSearchName(value)

  };
  const handleSearchSelect = (value) => {
    setSelecHouse(value)
  }
  const handleGender = (value) => {
    setGenderSearch(value)
  }

  // datos de la api  
  useEffect(() => {
    hpData().then((dataFromHp) => {
      localStorage.set('dataPj', dataFromHp)
      setDataPj(dataFromHp);
    })
  }, []);


  return (
    <div>
      <Routes>
        <>
          <Route path='/' element={<><Header />< Structure dataPj={filtersFunction} handleSearchName={handleSearchName} searchName={searchName} handleSearchSelect={handleSearchSelect} characterFound={characterFound} selectHouse={selectHouse} handleReset={handleReset} genderSearch={genderSearch} handleGender={handleGender} /></>}></Route>
          <Route path='/character/:characterId' element={<><Header /><CardDetail dataPj={dataPj} filtersFunction={filtersFunction} characterFound={characterFound} /></>}></Route>
        </>
      </Routes>

    </div >

  );
}

export default App;