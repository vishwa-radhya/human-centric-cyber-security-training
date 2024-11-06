import './favorites.styles.scss';
import noFavoriteImg from '../../assets/void.svg';
import 'animate.css';

const Favorites=()=>{
    return(
        <div className="favorites-div animate__animated animate__fadeInDown">
            <h1>Favorite Courses</h1>
            <div className='no-fav'>
                <img src={noFavoriteImg} style={{width:'40%'}} />
            </div>
        </div>
    )
}
export default Favorites;