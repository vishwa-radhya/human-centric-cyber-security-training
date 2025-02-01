import { GrCatalogOption } from 'react-icons/gr';
import './bottom-nav.styles.scss';
import { FaRegCircleUser, FaRegStar } from 'react-icons/fa6';
import { MdOutlineQuiz } from 'react-icons/md';
import { BsPeople } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const BottomNav=()=>{

    const icons=[GrCatalogOption,FaRegStar,MdOutlineQuiz,FaRegCircleUser,BsPeople];
    const navigateRouter = useNavigate();
    const iconNames=['Catalog','Favorites','Quiz','User','People'];

    return (
        <div className='bottom-nav-div'>
            {icons.map((Icon,index)=>{
                return <div key={`nav-icon-group-${index}`} onClick={()=>navigateRouter(`${iconNames[index].toLowerCase()}`)}>
                    <Icon className='icon' />
                    <p>{iconNames[index]}</p>
                </div>
            })}
        </div>
    )
}
export default BottomNav;