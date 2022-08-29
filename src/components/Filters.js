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


    return (
        <main className='page'>
            <form className='search-filter'>
                <label id='name' name='name' className='text-search'>search for character</label>
                <input className='search-bar' type='text' placeholder='Write your fav!' onChange={handleSearch} value={props.searchName}></input>
                <label id='name' name='name' className='text-search'>search for house</label>
                <select name='house' id='house' className='select-search' onChange={handleSearchSelect} value={props.selectHouse}>
                    <option value='Gryffindor'>Gryffindor</option>
                    <option value='Hufflepuff'>Hufflepuff </option>
                    <option value='Ravenclaw'>Ravenclaw</option>
                    <option value='Slytherin'>Slytherin</option>
                    <option value='none'>Without house</option>
                </select>
                <button className='reset' onClick={props.handleReset}>Reset</button>
            </form>
            <CharacterList dataPj={props.dataPj} filtersFunction={props.filtersFunction} searchName={props.searchName} />
        </main>
    )
}

export default Structure;