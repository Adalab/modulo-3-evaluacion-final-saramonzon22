import CharacterList from '../components/CharacterList';
import PjItem from '../components/PjItem';
import '../styles/layout/Page.scss';


function Structure(props) {
    return (
        <main className='page'>
            <section className='search-filter'>
                <label id='name' name='name'>search for character</label>
                <input className='search-bar' type='text' placeholder='Write your fav!'></input>
                <label id='name' name='name'>search for house</label>
                <select name='house' id='house' className='select-search'>
                    <option value='all' selected>All</option>
                    <option value='Griffindor'>Gryffindor</option>
                    <option value='Hufflepuff'>Hufflepuff </option>
                    <option value='Ravenclaw'>Ravenclaw</option>
                    <option value='Slytherin'>Slytherin</option>

                </select>
            </section>
            <CharacterList dataPj={props.dataPj} />
        </main>
    )
}

export default Structure;