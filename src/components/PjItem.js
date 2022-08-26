import '../styles/layout/PjItem.scss';
import errorImage from '../images/defaultImg.jpg';

function PjItem(props) {

    const notImage = (image) => {
        return image === '' ? errorImage : props.character.picture;
    };
    return (
        <li className="card-li">

            <img
                className="card__img"
                src={notImage(props.character.picture)}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <h4 className="card__title">{props.character.name}</h4>
            <p className="card__description">{`${props.character.species}/ ${props.character.gender}`}</p>

        </li >)

}

export default PjItem;