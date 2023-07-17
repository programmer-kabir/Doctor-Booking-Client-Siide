import React from 'react';

const Title = ({title, subtitle}) => {
    return (
        <div>
            <h3 className='text-[#19D3AE] font-semibold text-xl'>{title}</h3>
            <h4 className='text-[#3A4256] text-3xl text-base'>{subtitle}</h4>
        </div>
    );
};

export default Title;