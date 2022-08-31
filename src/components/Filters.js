import CharacterList from './CharacterList';
import PjItem from './PjItem';
import '../styles/layout/Page.scss';


function Structure(props) {

    const handleSearch = (ev) => {
        props.handleSearchName(ev.currentTarget.value);
    };
    const handleSearchSelect = (ev) => {
        props.handleSearchSelect(ev.target.value)
    }
    const handleGender = (ev) => {
        props.handleGender(ev.target.value)
    }
    const noEnterKey = (ev) => {
        if (ev.keyCode === 13) {
            ev.preventDefault();
        }
    }
    const handleName = (ev) => {
        props.handleName(ev.target.value)
    }

    return (
        <main className='page'>
            <form className='search-filter'>
                <label id='name' name='name' className='text-search'>search for character</label>
                <input className='search-bar' type='text' placeholder='Write your fav!' onChange={handleSearch} value={props.searchName} onKeyDown={noEnterKey}></input>
                <label id='name' name='name' className='text-search'>search for house</label>
                <select name='house' id='house' className='select-search' onChange={handleSearchSelect} value={props.selectHouse}>
                    <option value='Gryffindor'>Gryffindor</option>
                    <option value='Hufflepuff'>Hufflepuff </option>
                    <option value='Ravenclaw'>Ravenclaw</option>
                    <option value='Slytherin'>Slytherin</option>
                    <option value='none'>Without house</option>
                </select>
                <select name='gender' className='gender-search' id='gender' onChange={handleGender} value={props.genderSearch}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value=''>All</option>
                </select>
                <button className='reset' onClick={props.handleReset}>Reset</button>
                <label id='others' name='others'>alternateName</label>
                <input id='others' name='others' type='number' value={props.otherName} onChange={handleName}></input>
            </form>
            <CharacterList dataPj={props.dataPj} filtersFunction={props.filtersFunction} searchName={props.searchName} />
        </main>
    )
}

export default Structure;