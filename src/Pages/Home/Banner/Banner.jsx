import React from 'react';
import banner from '../../../assets/Banner/chair 1.png'
import Container from '../../../Component/Container/Container';
const Banner = () => {
    return (
        <Container>
            <div className='md:flex gap-9 mt-24'>
            <div className='md:w-1/2 space-y-3'>
                <h2 className='text[#3A4256] text-4xl font-semibold'>Your New Smile Starts <br /> Here</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                <button className='primary-btn'>GET STARTED</button>
            </div>
            <div className='md:w-1/2'>
                <img src={banner} alt="" />
            </div>
        </div>
        </Container>
    );
};

export default Banner;