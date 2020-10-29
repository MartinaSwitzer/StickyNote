import React from 'react';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';
import './Header.css';

export const Header = () => {
    return (
        <header>
            <h1>
                <LocalActivityIcon />
                 Sticky Note
            </h1>
        </header>
    )
}
export default Header;
