import './user.styles.scss';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth-context.context';
import { signInUser } from '../../utils/firebase';
import { signOutUser } from '../../utils/firebase';
import { FaGoogle } from 'react-icons/fa6';
import AuthImage from '../../assets/auth-now.png';
import SvgLoader from '../../components/svg-loader/svg-loader.component';

const User = () => {

    const {user} = useContext(AuthContext);

    return ( 
        <div className="user-div animate__animated animate__fadeInDown">
            <h1>User Space</h1>
            {user ? <div className='user-div-space'>
                    <img src={user?.photoURL} alt='user' width={100} />
                    <p>{user?.displayName}</p>
                    <p>{user?.email}</p>
                    <button className='c-btn' onClick={signOutUser}>Sign Out</button>
            </div> : <div className='no-user-div-space'>
                        <SvgLoader imgSrc={AuthImage} imgWidth={200} />
                        <button className='c-btn' onClick={signInUser}> <FaGoogle/>signIn</button>
            </div>}
        </div>
     );
}
 
export default User;