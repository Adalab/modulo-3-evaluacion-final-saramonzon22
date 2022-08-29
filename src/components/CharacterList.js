import PjItem from "./PjItem";
import '../styles/layout/CharacterList.scss';




function CharacterList(props) {

    const hpPjElements = props.dataPj.map((pj, index) => {
        return (
            <PjItem character={pj} key={index} characterFound={props.characterFound} dataPj={props.dataPj} />
        );
    });

    return (
        <section className="list">
            <ul className="cards">
                {hpPjElements}
            </ul>
        </section >
    );
};

export default CharacterList;