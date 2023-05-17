import React from 'react';

const Banner = () => {
    return (
        <div className='my-5 relative w-full'>
            <img className='w-full absolute' style={{ height: '85vh' }} src="https://www.wallpaperflare.com/static/550/72/960/princess-guardian-boy-and-girl-anime-wallpaper-preview.jpg" alt="" />
            <div className='absolute bg-black inset-0 w-full opacity-40' style={{ height: '85vh' }}></div>
            <div className=' absolute w-2/3 flex flex-col space-y-8 transform translate-y-1/2 left-20'>
                <p className='text-3xl md:text-5xl font-bold text-white'>BRAND NEW <br /> ANIME ACTION FIGURE <br /> FOR YOUR KIDS</p>
                <p className='text-white hidden md:block'>We makes spacial and collectables, age appropriate action figures <br /> and deliver straight to your door.</p>
                <button className='btn w-5/6 md:w-1/4 rounded-3xl'>Get your action figure</button>
            </div>
        </div>
    );
};

export default Banner;