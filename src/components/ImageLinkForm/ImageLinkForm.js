import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({ onInptchng, onbttnsbmt }) => {
    return (
        <div className='ma4 mt0'>
            <p className='f3'>
                {'This Magic app will detect faces in your pic'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInptchng} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onbttnsbmt}
                    >Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;