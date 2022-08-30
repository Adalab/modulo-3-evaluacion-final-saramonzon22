import CardDetail from './CardDetail';
import PropTypes from 'prop-types';


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
CardDetail.propTypes = {
    character: PropTypes.object,
};

export default CharacterDetail;