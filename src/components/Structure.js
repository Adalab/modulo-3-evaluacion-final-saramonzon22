import CharacterList from '../components/CharacterList';
import PjItem from '../components/PjItem';
import '../styles/layout/Page.scss';

function Structure(props) {
    return (
        <main className='page'>
            <CharacterList dataPj={props.dataPj} />
        </main>
    )
}

export default Structure;