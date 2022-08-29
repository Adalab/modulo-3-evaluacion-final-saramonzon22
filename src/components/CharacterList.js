import PjItem from "./PjItem";
import '../styles/layout/CharacterList.scss';
import Detail from './CharacterDetail';



function CharacterList(props) {

    const hpPjElements = props.dataPj.map((pj, index) => {
        return (
            <PjItem character={pj} key={index} />
        );
    });

    return (
        <section className="list">
            <ul className="cards">
                {hpPjElements}{props.drawHtml}
            </ul>

        </section >
    );
};

export default CharacterList;