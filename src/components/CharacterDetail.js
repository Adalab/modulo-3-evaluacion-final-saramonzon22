import CardDetail from './CardDetail';


function CharacterDetail(props) {

    const hpCard = props.dataPj.map((pj, index) => {
        return (

            <CardDetail character={pj} key={index} />
        )

    });

    return (
        <section>
            {hpCard}
        </section>

    );
    ;
}

export default CharacterDetail;