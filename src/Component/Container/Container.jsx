import React from 'react';

const Container = ({children}) => {
    return (
        <div className='lg:px-12 px-4'>
            {children}
        </div>
    );
};

export default Container;