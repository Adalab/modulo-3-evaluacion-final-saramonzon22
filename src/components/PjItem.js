import '../styles/layout/PjItem.scss';
import errorImage from '../images/defaultImg.jpg';


function PjItem(props) {

    const notImage = (image) => {
        return image === '' ? errorImage : props.character.picture;
    };


    return (<>{props.drawHtml}</>)
}

export default PjItem; 