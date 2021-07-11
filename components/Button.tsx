import React, {ReactNode, ReactChildren} from 'react';

interface button{
    styles: any,
    children: ReactNode
}


const Button = ({styles, children}: button) => {
    return (
        <button className={styles}>
        {children}
        </button>
    );
};

export default Button;
