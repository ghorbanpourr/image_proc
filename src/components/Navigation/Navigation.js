import React from 'react';

const Navigation = ({ onRtChng, isSndIn }) => {
    if (isSndIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRtChng('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
        )
    }
    else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRtChng('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                <p onClick={() => onRtChng('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
            </nav>
        );
    }
}

export default Navigation;