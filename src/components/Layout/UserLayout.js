import React from 'react';

import NavBar from '../NavBar/NavBar';



const Layout = (props) => {
    return (
        <div>
            <NavBar />
            <div style={{ clear: 'both' }}>
                {props.children}

            </div>
        </div>
    )
}

export default Layout;