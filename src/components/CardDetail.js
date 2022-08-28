import errorImage from '../images/defaultImg.jpg';
import '../styles/layout/CardDetail.scss';

function Detail(props) {

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
        <div className='one-card'>
            <img
                className="card__img"
                src={notImage(props.character.picture)}
                alt={`Foto de ${props.character.name}`}
                title={`Foto de ${props.character.name}`}></img>
            <div>
                <h4 className="title">{props.character.name}</h4>
                <p className="card__description">{`${props.character.gender}`} </p>
                <p className="card__description">{`${props.character.species}`} </p>
                <p className="card__description">{pjAlive(props.character.alive)}</p>
                <p className="card__description">{`${props.character.house}`} </p>
            </div>

        </div>
    )
};

export default Detail;