import React from 'react';
import './FcRcgntn.css';

const FcRcgntn = ({ imgURL, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inptimg' alt='' src={imgURL} width='700px' heigh='auto' />
                <div className='bounding-box' style={{ top: box.tpRw, right: box.rtCl, bottom: box.btmRw, left: box.lftCl }}></div>
            </div>
        </div>
    )
}

export default FcRcgntn;