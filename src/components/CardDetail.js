import errorImage from '../images/defaultImg.jpg';
import '../styles/layout/CardDetail.scss';

function Detail(props) {
    console.log(props)
    const notImage = (image) => {
        return image === '' ? errorImage : props.characterFound.picture;
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
                src={notImage(props.characterFound.picture)}
                alt={`Foto de ${props.characterFound.name}`}
                title={`Foto de ${props.characterFound.name}`}></img>
            <div>
                <h4 className="title">{props.characterFound.name}</h4>
                <p className="card__description">{`${props.characterFound.gender}`} </p>
                <p className="card__description">{`${props.characterFound.species}`} </p>
                <p className="card__description">{pjAlive(props.characterFound.alive)}</p>
                <p className="card__description">{`${props.characterFound.house}`} </p>
            </div>

        </div>
    )
};

export default Detail;