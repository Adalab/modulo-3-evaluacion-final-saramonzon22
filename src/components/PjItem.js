import '../styles/layout/PjItem.scss';
import errorImage from '../images/defaultImg.jpg';
import { NavLink, Route, Routes } from 'react-router-dom';



function PjItem(props) {
    const notImage = (image) => {
        return image === '' ? errorImage : props.character.picture
    };

    return <li key={props.index} className='card-li'>
        <NavLink to={`/character/${props.character.id}`} className='link-one' exact>
            <img
                className="card__img"
                src={notImage(props.character.picture)}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <h4 className="card__title">{props.character.name}</h4>
            <p className="card__description">{`${props.character.species}/ ${props.character.gender}`}</p>
        </NavLink>
    </li >
}

export default PjItem; 