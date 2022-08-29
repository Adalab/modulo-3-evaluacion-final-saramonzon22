import PjItem from "./PjItem";
import '../styles/layout/CharacterList.scss';





function CharacterList(props) {

    const hpPjElements = props.dataPj.map((pj, index) => {
        return (
            <PjItem character={pj} key={index} characterFound={props.characterFound} dataPj={props.dataPj} />
        );
    });

    const errorPj = () => {
        if (hpPjElements.length === 0) {
            return <div className='page-error'><p className='error-p'>`Como dijo Dumbledore: "Oscuros y difíciles tiempos nos aguardan. Pronto todos tendremos que elegir entre lo que es correcto y lo que es fácil". Dicho de otra manera, que {props.searchName} no está, prueba con otro personaje.`</p>
            </div>
        }
    }
    return (
        <section>
            <ul className='cards'>
                {hpPjElements}
            </ul>
            {errorPj()}
        </section >
    );
};

export default CharacterList;