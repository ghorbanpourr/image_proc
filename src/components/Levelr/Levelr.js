import React from 'react';

const Levelr = ({ name, entries }) => {
    return (
        <div>
            <div className='white f3'>
                {`${name.slice(1, -1)}, your current number of tries is ..`}
            </div>
            <div className='white f1'>
                {entries}
            </div>
        </div>

    )
}

export default Levelr;