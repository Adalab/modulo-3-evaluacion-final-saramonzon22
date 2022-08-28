import PjItem from "./PjItem";
import '../styles/layout/CharacterList.scss';
import Detail from './CharacterDetail';
import { Link, Route, Routes } from 'react-router-dom';


function CharacterList(props) {

    const hpPjElements = props.dataPj.map((pj, index) => {
        return (
            <PjItem character={pj} key={index} />
        );
    });

    return (
        <section className="list">
            <Link to='/CharacterDetail/:CharacterId'>
                <ul className="cards">
                    {hpPjElements}{props.drawHtml}
                </ul>
            </Link>
        </section >
    );
};

export default CharacterList;