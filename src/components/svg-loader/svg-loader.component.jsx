import './svg-loader.styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Loader from '../loader/loader.component';

const SvgLoader=({imgSrc,imgWidth})=>{

    const [imgLoaded,setImgLoaded]=useState(false);

    return(
        <div className='svg-loader-div'>
            {!imgLoaded && <Loader/> }
            <img src={imgSrc} width={imgWidth} onLoad={()=>setImgLoaded(true)} />
        </div>
    )
}
SvgLoader.propTypes={
    imgSrc:PropTypes.string,
    imgWidth:PropTypes.number,
}
export default SvgLoader;