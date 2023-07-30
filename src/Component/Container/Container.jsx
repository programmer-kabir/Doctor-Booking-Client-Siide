import React from 'react';

const Container = ({children}) => {
    return (
        <div className='lg:px-28 px-5'>
            {children}
        </div>
    );
};

export default Container;