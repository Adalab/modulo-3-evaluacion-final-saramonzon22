import errorImage from '../images/defaultImg.jpg';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const PjDetail = () => {

        const { CharacterId } = useParams();
    }
    const notImage = (image) => {
        return image === '' ? errorImage : props.character.picture;
    };
    const pjAlive = (alive) => {
        if (alive === true) {
            return (<p className="card__description">Alive <i class="fa-solid fa-heart"></i></p>)
        }
        else {
            return <p className="card__description">Dead <i class="fa-solid fa-skull-crossbones"></i></p>
        }
    }

    return (
        <div><h4 className="card__title">{props.character.name}</h4>
            <img
                className="card__img"
                src={notImage(props.character.picture)}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <p className="card__description">{`${props.character.gender}`} </p>
            <p className="card__description">{`${props.character.species}`} </p>
            <p className="card__description">{pjAlive(props.character.alive)}</p>
            <p className="card__description">{`${props.character.house}`} </p>

        </div>
    )
};

export default Detail;