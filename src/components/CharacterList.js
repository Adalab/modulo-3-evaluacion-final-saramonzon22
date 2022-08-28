import PjItem from "./PjItem";
import '../styles/layout/CharacterList.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Detail from './CharacterDetail';


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